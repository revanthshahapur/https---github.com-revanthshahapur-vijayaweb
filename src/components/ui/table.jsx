function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
import * as React from "react";
import { cn } from "@/lib/utils";
var Table = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "relative w-full overflow-auto"
    }, /*#__PURE__*/ React.createElement("table", _object_spread({
        ref: ref,
        className: cn("w-full caption-bottom text-sm", className)
    }, props)));
});
Table.displayName = "Table";
var TableHeader = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("thead", _object_spread({
        ref: ref,
        className: cn("[&_tr]:border-b", className)
    }, props));
});
TableHeader.displayName = "TableHeader";
var TableBody = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("tbody", _object_spread({
        ref: ref,
        className: cn("[&_tr:last-child]:border-0", className)
    }, props));
});
TableBody.displayName = "TableBody";
var TableFooter = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("tfoot", _object_spread({
        ref: ref,
        className: cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)
    }, props));
});
TableFooter.displayName = "TableFooter";
var TableRow = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("tr", _object_spread({
        ref: ref,
        className: cn("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50", className)
    }, props));
});
TableRow.displayName = "TableRow";
var TableHead = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("th", _object_spread({
        ref: ref,
        className: cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className)
    }, props));
});
TableHead.displayName = "TableHead";
var TableCell = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("td", _object_spread({
        ref: ref,
        className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)
    }, props));
});
TableCell.displayName = "TableCell";
var TableCaption = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("caption", _object_spread({
        ref: ref,
        className: cn("mt-4 text-sm text-muted-foreground", className)
    }, props));
});
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
