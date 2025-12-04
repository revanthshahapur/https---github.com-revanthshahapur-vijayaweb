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
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _object_destructuring_empty(o) {
    if (o === null || o === void 0) throw new TypeError("Cannot destructure " + o);
    return o;
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
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
var Breadcrumb = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /*#__PURE__*/ React.createElement("nav", _object_spread({
        ref: ref,
        "aria-label": "breadcrumb"
    }, props));
});
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("ol", _object_spread({
        ref: ref,
        className: cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", className)
    }, props));
});
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("li", _object_spread({
        ref: ref,
        className: cn("inline-flex items-center gap-1.5", className)
    }, props));
});
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var asChild = _param.asChild, className = _param.className, props = _object_without_properties(_param, [
        "asChild",
        "className"
    ]);
    var Comp = asChild ? Slot : "a";
    return /*#__PURE__*/ React.createElement(Comp, _object_spread({
        ref: ref,
        className: cn("transition-colors hover:text-foreground", className)
    }, props));
});
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        ref: ref,
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: cn("font-normal text-foreground", className)
    }, props));
});
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = function(_param) {
    var children = _param.children, className = _param.className, props = _object_without_properties(_param, [
        "children",
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("li", _object_spread({
        role: "presentation",
        "aria-hidden": "true",
        className: cn("[&>svg]:size-3.5", className)
    }, props), children !== null && children !== void 0 ? children : /*#__PURE__*/ React.createElement(ChevronRight, null));
};
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        role: "presentation",
        "aria-hidden": "true",
        className: cn("flex h-9 w-9 items-center justify-center", className)
    }, props), /*#__PURE__*/ React.createElement(MoreHorizontal, {
        className: "h-4 w-4"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "sr-only"
    }, "More"));
};
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis };
