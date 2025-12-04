const fs = require("fs");
const path = require("path");
const { globSync } = require("glob");

const projectRoot = path.resolve(__dirname, "..");
const files = globSync("src/**/*.jsx", { cwd: projectRoot });

files.forEach((relativePath) => {
  const absolutePath = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");

  if (!source.includes("React.")) {
    return;
  }

  const hasImport =
    source.includes('import React from "react"') ||
    source.includes("import React from 'react'") ||
    source.includes('import * as React from "react"') ||
    source.includes("import * as React from 'react'");

  if (hasImport) {
    return;
  }

  const updated = `import * as React from "react";\n${source}`;
  fs.writeFileSync(absolutePath, updated, "utf8");
  console.log(`Added React import to ${relativePath}`);
});


