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
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
var Command = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(CommandPrimitive, _object_spread({
        ref: ref,
        className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", className)
    }, props));
});
Command.displayName = CommandPrimitive.displayName;
var CommandDialog = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /*#__PURE__*/ React.createElement(Dialog, props, /*#__PURE__*/ React.createElement(DialogContent, {
        className: "overflow-hidden p-0 shadow-lg"
    }, /*#__PURE__*/ React.createElement(Command, {
        className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
    }, children)));
};
var CommandInput = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
    }, /*#__PURE__*/ React.createElement(Search, {
        className: "mr-2 h-4 w-4 shrink-0 opacity-50"
    }), /*#__PURE__*/ React.createElement(CommandPrimitive.Input, _object_spread({
        ref: ref,
        className: cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", className)
    }, props)));
});
CommandInput.displayName = CommandPrimitive.Input.displayName;
var CommandList = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(CommandPrimitive.List, _object_spread({
        ref: ref,
        className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
    }, props));
});
CommandList.displayName = CommandPrimitive.List.displayName;
var CommandEmpty = /*#__PURE__*/ React.forwardRef(function(props, ref) {
    return /*#__PURE__*/ React.createElement(CommandPrimitive.Empty, _object_spread({
        ref: ref,
        className: "py-6 text-center text-sm"
    }, props));
});
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;
var CommandGroup = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(CommandPrimitive.Group, _object_spread({
        ref: ref,
        className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", className)
    }, props));
});
CommandGroup.displayName = CommandPrimitive.Group.displayName;
var CommandSeparator = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(CommandPrimitive.Separator, _object_spread({
        ref: ref,
        className: cn("-mx-1 h-px bg-border", className)
    }, props));
});
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;
var CommandItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement(CommandPrimitive.Item, _object_spread({
        ref: ref,
        className: cn("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", className)
    }, props));
});
CommandItem.displayName = CommandPrimitive.Item.displayName;
var CommandShortcut = function(_param) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("span", _object_spread({
        className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className)
    }, props));
};
CommandShortcut.displayName = "CommandShortcut";
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };
