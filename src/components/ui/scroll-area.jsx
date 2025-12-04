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
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
var ScrollArea = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("relative overflow-hidden", className)
    }, props), /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.Viewport, {
        className: "h-full w-full rounded-[inherit]"
    }, children), /*#__PURE__*/ React.createElement(ScrollBar, null), /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.Corner, null));
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "vertical" : _param_orientation, props = _object_without_properties(_param, [
        "className",
        "orientation"
    ]);
    return /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.ScrollAreaScrollbar, _object_spread({
        ref: ref,
        orientation: orientation,
        className: cn("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className)
    }, props), /*#__PURE__*/ React.createElement(ScrollAreaPrimitive.ScrollAreaThumb, {
        className: "relative flex-1 rounded-full bg-border"
    }));
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
export { ScrollArea, ScrollBar };
