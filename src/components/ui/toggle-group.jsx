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
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";
var ToggleGroupContext = /*#__PURE__*/ React.createContext({
    size: "default",
    variant: "default"
});
var ToggleGroup = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, variant = _param.variant, size = _param.size, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(ToggleGroupPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("flex items-center justify-center gap-1", className)
    }, props), /*#__PURE__*/ React.createElement(ToggleGroupContext.Provider, {
        value: {
            variant: variant,
            size: size
        }
    }, children));
});
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;
var ToggleGroupItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, variant = _param.variant, size = _param.size, props = _object_without_properties(_param, [
        "className",
        "children",
        "variant",
        "size"
    ]);
    var context = React.useContext(ToggleGroupContext);
    return /*#__PURE__*/ React.createElement(ToggleGroupPrimitive.Item, _object_spread({
        ref: ref,
        className: cn(toggleVariants({
            variant: context.variant || variant,
            size: context.size || size
        }), className)
    }, props), children);
});
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem };
