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
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
var ContextMenu = ContextMenuPrimitive.Root;
var ContextMenuTrigger = ContextMenuPrimitive.Trigger;
var ContextMenuGroup = ContextMenuPrimitive.Group;
var ContextMenuPortal = ContextMenuPrimitive.Portal;
var ContextMenuSub = ContextMenuPrimitive.Sub;
var ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
var ContextMenuSubTrigger = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.SubTrigger, _object_spread({
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className)
    }, props), children, /*#__PURE__*/ React.createElement(ChevronRight, {
        className: "ml-auto h-4 w-4"
    }));
});
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;
var ContextMenuSubContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.SubContent, _object_spread({
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props));
});
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;
var ContextMenuContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.Portal, null, /*#__PURE__*/ React.createElement(ContextMenuPrimitive.Content, _object_spread({
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props)));
});
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;
var ContextMenuItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className)
    }, props));
});
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;
var ContextMenuCheckboxItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.CheckboxItem, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked
    }, props), /*#__PURE__*/ React.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /*#__PURE__*/ React.createElement(ContextMenuPrimitive.ItemIndicator, null, /*#__PURE__*/ React.createElement(Check, {
        className: "h-4 w-4"
    }))), children);
});
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;
var ContextMenuRadioItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.RadioItem, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className)
    }, props), /*#__PURE__*/ React.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /*#__PURE__*/ React.createElement(ContextMenuPrimitive.ItemIndicator, null, /*#__PURE__*/ React.createElement(Circle, {
        className: "h-2 w-2 fill-current"
    }))), children);
});
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;
var ContextMenuLabel = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)
    }, props));
});
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;
var ContextMenuSeparator = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(ContextMenuPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-border", className)
    }, props));
});
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;
var ContextMenuShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
    }, props));
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";
export { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuCheckboxItem, ContextMenuRadioItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuGroup, ContextMenuPortal, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuRadioGroup };
