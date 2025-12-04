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
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
var Drawer = function(_param) {
    var _param_shouldScaleBackground = _param.shouldScaleBackground, shouldScaleBackground = _param_shouldScaleBackground === void 0 ? true : _param_shouldScaleBackground, props = _object_without_properties(_param, [
        "shouldScaleBackground"
    ]);
    return /*#__PURE__*/ React.createElement(DrawerPrimitive.Root, _object_spread({
        shouldScaleBackground: shouldScaleBackground
    }, props));
};
Drawer.displayName = "Drawer";
var DrawerTrigger = DrawerPrimitive.Trigger;
var DrawerPortal = DrawerPrimitive.Portal;
var DrawerClose = DrawerPrimitive.Close;
var DrawerOverlay = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(DrawerPrimitive.Overlay, _object_spread({
        ref: ref,
        className: cn("fixed inset-0 z-50 bg-black/80", className)
    }, props));
});
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
var DrawerContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(DrawerPortal, null, /*#__PURE__*/ React.createElement(DrawerOverlay, null), /*#__PURE__*/ React.createElement(DrawerPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)
    }, props), /*#__PURE__*/ React.createElement("div", {
        className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
    }), children));
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        className: cn("grid gap-1.5 p-4 text-center sm:text-left", className)
    }, props));
};
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props));
};
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(DrawerPrimitive.Title, _object_spread({
        ref: ref,
        className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props));
});
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;
var DrawerDescription = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(DrawerPrimitive.Description, _object_spread({
        ref: ref,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;
export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
