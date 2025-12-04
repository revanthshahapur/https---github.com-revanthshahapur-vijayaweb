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
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
var MenubarMenu = MenubarPrimitive.Menu;
var MenubarGroup = MenubarPrimitive.Group;
var MenubarPortal = MenubarPrimitive.Portal;
var MenubarSub = MenubarPrimitive.Sub;
var MenubarRadioGroup = MenubarPrimitive.RadioGroup;
var Menubar = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Root, _object_spread({
        ref: ref,
        className: cn("flex h-10 items-center space-x-1 rounded-md border bg-background p-1", className)
    }, props));
});
Menubar.displayName = MenubarPrimitive.Root.displayName;
var MenubarTrigger = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Trigger, _object_spread({
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)
    }, props));
});
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;
var MenubarSubTrigger = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "inset",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.SubTrigger, _object_spread({
        ref: ref,
        className: cn("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent data-[state=open]:text-accent-foreground focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className)
    }, props), children, /*#__PURE__*/ React.createElement(ChevronRight, {
        className: "ml-auto h-4 w-4"
    }));
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;
var MenubarSubContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.SubContent, _object_spread({
        ref: ref,
        className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props));
});
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;
var MenubarContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, _param_align = _param.align, align = _param_align === void 0 ? "start" : _param_align, _param_alignOffset = _param.alignOffset, alignOffset = _param_alignOffset === void 0 ? -4 : _param_alignOffset, _param_sideOffset = _param.sideOffset, sideOffset = _param_sideOffset === void 0 ? 8 : _param_sideOffset, props = _object_without_properties(_param, [
        "className",
        "align",
        "alignOffset",
        "sideOffset"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Portal, null, /*#__PURE__*/ React.createElement(MenubarPrimitive.Content, _object_spread({
        ref: ref,
        align: align,
        alignOffset: alignOffset,
        sideOffset: sideOffset,
        className: cn("z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className)
    }, props)));
});
MenubarContent.displayName = MenubarPrimitive.Content.displayName;
var MenubarItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", inset && "pl-8", className)
    }, props));
});
MenubarItem.displayName = MenubarPrimitive.Item.displayName;
var MenubarCheckboxItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, checked = _param.checked, props = _object_without_properties(_param, [
        "className",
        "children",
        "checked"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.CheckboxItem, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className),
        checked: checked
    }, props), /*#__PURE__*/ React.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /*#__PURE__*/ React.createElement(MenubarPrimitive.ItemIndicator, null, /*#__PURE__*/ React.createElement(Check, {
        className: "h-4 w-4"
    }))), children);
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;
var MenubarRadioItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.RadioItem, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground", className)
    }, props), /*#__PURE__*/ React.createElement("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    }, /*#__PURE__*/ React.createElement(MenubarPrimitive.ItemIndicator, null, /*#__PURE__*/ React.createElement(Circle, {
        className: "h-2 w-2 fill-current"
    }))), children);
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;
var MenubarLabel = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, inset = _param.inset, props = _object_without_properties(_param, [
        "className",
        "inset"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Label, _object_spread({
        ref: ref,
        className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)
    }, props));
});
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;
var MenubarSeparator = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(MenubarPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 my-1 h-px bg-muted", className)
    }, props));
});
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;
var MenubarShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
    }, props));
};
MenubarShortcut.displayname = "MenubarShortcut";
export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarLabel, MenubarCheckboxItem, MenubarRadioGroup, MenubarRadioItem, MenubarPortal, MenubarSubContent, MenubarSubTrigger, MenubarGroup, MenubarSub, MenubarShortcut };
