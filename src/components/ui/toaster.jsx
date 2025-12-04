import * as React from "react";
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
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";
export function Toaster() {
    var toasts = useToast().toasts;
    return /*#__PURE__*/ React.createElement(ToastProvider, null, toasts.map(function(_param) {
        var id = _param.id, title = _param.title, description = _param.description, action = _param.action, props = _object_without_properties(_param, [
            "id",
            "title",
            "description",
            "action"
        ]);
        return /*#__PURE__*/ React.createElement(Toast, _object_spread({
            key: id
        }, props), /*#__PURE__*/ React.createElement("div", {
            className: "grid gap-1"
        }, title && /*#__PURE__*/ React.createElement(ToastTitle, null, title), description && /*#__PURE__*/ React.createElement(ToastDescription, null, description)), action, /*#__PURE__*/ React.createElement(ToastClose, null));
    }), /*#__PURE__*/ React.createElement(ToastViewport, null));
}
