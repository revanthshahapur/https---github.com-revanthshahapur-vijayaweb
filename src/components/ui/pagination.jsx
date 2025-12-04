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
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
var Pagination = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("nav", _object_spread({
        role: "navigation",
        "aria-label": "pagination",
        className: cn("mx-auto flex w-full justify-center", className)
    }, props));
};
Pagination.displayName = "Pagination";
var PaginationContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("ul", _object_spread({
        ref: ref,
        className: cn("flex flex-row items-center gap-1", className)
    }, props));
});
PaginationContent.displayName = "PaginationContent";
var PaginationItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("li", _object_spread({
        ref: ref,
        className: cn("", className)
    }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = function(_param) {
    var className = _param.className, isActive = _param.isActive, _param_size = _param.size, size = _param_size === void 0 ? "icon" : _param_size, props = _object_without_properties(_param, [
        "className",
        "isActive",
        "size"
    ]);
    return /*#__PURE__*/ React.createElement("a", _object_spread({
        "aria-current": isActive ? "page" : undefined,
        className: cn(buttonVariants({
            variant: isActive ? "outline" : "ghost",
            size: size
        }), className)
    }, props));
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(PaginationLink, _object_spread({
        "aria-label": "Go to previous page",
        size: "default",
        className: cn("gap-1 pl-2.5", className)
    }, props), /*#__PURE__*/ React.createElement(ChevronLeft, {
        className: "h-4 w-4"
    }), /*#__PURE__*/ React.createElement("span", null, "Previous"));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(PaginationLink, _object_spread({
        "aria-label": "Go to next page",
        size: "default",
        className: cn("gap-1 pr-2.5", className)
    }, props), /*#__PURE__*/ React.createElement("span", null, "Next"), /*#__PURE__*/ React.createElement(ChevronRight, {
        className: "h-4 w-4"
    }));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        "aria-hidden": true,
        className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), /*#__PURE__*/ React.createElement(MoreHorizontal, {
        className: "h-4 w-4"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "sr-only"
    }, "More pages"));
};
PaginationEllipsis.displayName = "PaginationEllipsis";
export { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious };
