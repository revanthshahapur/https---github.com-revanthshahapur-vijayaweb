const { transformSync } = require("@swc/core");
const { globSync } = require("glob");
const fs = require("fs");
const path = require("path");

const projectRoot = path.resolve(__dirname, "..");
const tsxFiles = globSync("src/**/*.tsx", { cwd: projectRoot });

tsxFiles.forEach((relativePath) => {
  const absolutePath = path.join(projectRoot, relativePath);
  const source = fs.readFileSync(absolutePath, "utf8");

  const { code } = transformSync(source, {
    filename: absolutePath,
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: true,
      },
      transform: {
        react: {
          runtime: "classic",
        },
      },
    },
    module: {
      type: "es6",
    },
  });

  const outputPath = absolutePath.replace(/\.tsx$/, ".jsx");
  fs.writeFileSync(outputPath, code, "utf8");
  fs.unlinkSync(absolutePath);
  console.log(`Converted ${relativePath} -> ${path.relative(projectRoot, outputPath)}`);
});


