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
import { OTPInput, OTPInputContext } from "input-otp";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";
var InputOTP = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, containerClassName = _param.containerClassName, props = _object_without_properties(_param, [
        "className",
        "containerClassName"
    ]);
    return /*#__PURE__*/ React.createElement(OTPInput, _object_spread({
        ref: ref,
        containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
        className: cn("disabled:cursor-not-allowed", className)
    }, props));
});
InputOTP.displayName = "InputOTP";
var InputOTPGroup = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex items-center", className)
    }, props));
});
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var index = _param.index, className = _param.className, props = _object_without_properties(_param, [
        "index",
        "className"
    ]);
    var inputOTPContext = React.useContext(OTPInputContext);
    var _inputOTPContext_slots_index = inputOTPContext.slots[index], char = _inputOTPContext_slots_index.char, hasFakeCaret = _inputOTPContext_slots_index.hasFakeCaret, isActive = _inputOTPContext_slots_index.isActive;
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        className: cn("relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-2 ring-ring ring-offset-background", className)
    }, props), char, hasFakeCaret && /*#__PURE__*/ React.createElement("div", {
        className: "pointer-events-none absolute inset-0 flex items-center justify-center"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "animate-caret-blink h-4 w-px bg-foreground duration-1000"
    })));
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        role: "separator"
    }, props), /*#__PURE__*/ React.createElement(Dot, null));
});
InputOTPSeparator.displayName = "InputOTPSeparator";
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
