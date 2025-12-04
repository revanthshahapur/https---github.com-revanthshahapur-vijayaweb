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
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
var Form = FormProvider;
var FormFieldContext = /*#__PURE__*/ React.createContext({});
var FormField = function(_param) {
    var props = _extends({}, _object_destructuring_empty(_param));
    return /*#__PURE__*/ React.createElement(FormFieldContext.Provider, {
        value: {
            name: props.name
        }
    }, /*#__PURE__*/ React.createElement(Controller, props));
};
var useFormField = function() {
    var fieldContext = React.useContext(FormFieldContext);
    var itemContext = React.useContext(FormItemContext);
    var _useFormContext = useFormContext(), getFieldState = _useFormContext.getFieldState, formState = _useFormContext.formState;
    var fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    var id = itemContext.id;
    return _object_spread({
        id: id,
        name: fieldContext.name,
        formItemId: "".concat(id, "-form-item"),
        formDescriptionId: "".concat(id, "-form-item-description"),
        formMessageId: "".concat(id, "-form-item-message")
    }, fieldState);
};
var FormItemContext = /*#__PURE__*/ React.createContext({});
var FormItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var id = React.useId();
    return /*#__PURE__*/ React.createElement(FormItemContext.Provider, {
        value: {
            id: id
        }
    }, /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        className: cn("space-y-2", className)
    }, props)));
});
FormItem.displayName = "FormItem";
var FormLabel = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var _useFormField = useFormField(), error = _useFormField.error, formItemId = _useFormField.formItemId;
    return /*#__PURE__*/ React.createElement(Label, _object_spread({
        ref: ref,
        className: cn(error && "text-destructive", className),
        htmlFor: formItemId
    }, props));
});
FormLabel.displayName = "FormLabel";
var FormControl = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var props = _extends({}, _object_destructuring_empty(_param));
    var _useFormField = useFormField(), error = _useFormField.error, formItemId = _useFormField.formItemId, formDescriptionId = _useFormField.formDescriptionId, formMessageId = _useFormField.formMessageId;
    return /*#__PURE__*/ React.createElement(Slot, _object_spread({
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? "".concat(formDescriptionId) : "".concat(formDescriptionId, " ").concat(formMessageId),
        "aria-invalid": !!error
    }, props));
});
FormControl.displayName = "FormControl";
var FormDescription = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var formDescriptionId = useFormField().formDescriptionId;
    return /*#__PURE__*/ React.createElement("p", _object_spread({
        ref: ref,
        id: formDescriptionId,
        className: cn("text-sm text-muted-foreground", className)
    }, props));
});
FormDescription.displayName = "FormDescription";
var FormMessage = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "className",
        "children"
    ]);
    var _useFormField = useFormField(), error = _useFormField.error, formMessageId = _useFormField.formMessageId;
    var body = error ? String(error === null || error === void 0 ? void 0 : error.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("p", _object_spread({
        ref: ref,
        id: formMessageId,
        className: cn("text-sm font-medium text-destructive", className)
    }, props), body);
});
FormMessage.displayName = "FormMessage";
export { useFormField, Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField };
