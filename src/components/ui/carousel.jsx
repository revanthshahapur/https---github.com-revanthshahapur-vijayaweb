function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
var CarouselContext = /*#__PURE__*/ React.createContext(null);
function useCarousel() {
    var context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
var Carousel = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var _param_orientation = _param.orientation, orientation = _param_orientation === void 0 ? "horizontal" : _param_orientation, opts = _param.opts, setApi = _param.setApi, plugins = _param.plugins, className = _param.className, children = _param.children, props = _object_without_properties(_param, [
        "orientation",
        "opts",
        "setApi",
        "plugins",
        "className",
        "children"
    ]);
    var _useEmblaCarousel = _sliced_to_array(useEmblaCarousel(_object_spread_props(_object_spread({}, opts), {
        axis: orientation === "horizontal" ? "x" : "y"
    }), plugins), 2), carouselRef = _useEmblaCarousel[0], api = _useEmblaCarousel[1];
    var _React_useState = _sliced_to_array(React.useState(false), 2), canScrollPrev = _React_useState[0], setCanScrollPrev = _React_useState[1];
    var _React_useState1 = _sliced_to_array(React.useState(false), 2), canScrollNext = _React_useState1[0], setCanScrollNext = _React_useState1[1];
    var onSelect = React.useCallback(function(api) {
        if (!api) {
            return;
        }
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    var scrollPrev = React.useCallback(function() {
        api === null || api === void 0 ? void 0 : api.scrollPrev();
    }, [
        api
    ]);
    var scrollNext = React.useCallback(function() {
        api === null || api === void 0 ? void 0 : api.scrollNext();
    }, [
        api
    ]);
    var handleKeyDown = React.useCallback(function(event) {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [
        scrollPrev,
        scrollNext
    ]);
    React.useEffect(function() {
        if (!api || !setApi) {
            return;
        }
        setApi(api);
    }, [
        api,
        setApi
    ]);
    React.useEffect(function() {
        if (!api) {
            return;
        }
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return function() {
            api === null || api === void 0 ? void 0 : api.off("select", onSelect);
        };
    }, [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ React.createElement(CarouselContext.Provider, {
        value: {
            carouselRef: carouselRef,
            api: api,
            opts: opts,
            orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev: scrollPrev,
            scrollNext: scrollNext,
            canScrollPrev: canScrollPrev,
            canScrollNext: canScrollNext
        }
    }, /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        onKeyDownCapture: handleKeyDown,
        className: cn("relative", className),
        role: "region",
        "aria-roledescription": "carousel"
    }, props), children));
});
Carousel.displayName = "Carousel";
var CarouselContent = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var _useCarousel = useCarousel(), carouselRef = _useCarousel.carouselRef, orientation = _useCarousel.orientation;
    return /*#__PURE__*/ React.createElement("div", {
        ref: carouselRef,
        className: "overflow-hidden"
    }, /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)
    }, props)));
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, props = _object_without_properties(_param, [
        "className"
    ]);
    var orientation = useCarousel().orientation;
    return /*#__PURE__*/ React.createElement("div", _object_spread({
        ref: ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)
    }, props));
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outline" : _param_variant, _param_size = _param.size, size = _param_size === void 0 ? "icon" : _param_size, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size"
    ]);
    var _useCarousel = useCarousel(), orientation = _useCarousel.orientation, scrollPrev = _useCarousel.scrollPrev, canScrollPrev = _useCarousel.canScrollPrev;
    return /*#__PURE__*/ React.createElement(Button, _object_spread({
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev
    }, props), /*#__PURE__*/ React.createElement(ArrowLeft, {
        className: "h-4 w-4"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "sr-only"
    }, "Previous slide"));
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var className = _param.className, _param_variant = _param.variant, variant = _param_variant === void 0 ? "outline" : _param_variant, _param_size = _param.size, size = _param_size === void 0 ? "icon" : _param_size, props = _object_without_properties(_param, [
        "className",
        "variant",
        "size"
    ]);
    var _useCarousel = useCarousel(), orientation = _useCarousel.orientation, scrollNext = _useCarousel.scrollNext, canScrollNext = _useCarousel.canScrollNext;
    return /*#__PURE__*/ React.createElement(Button, _object_spread({
        ref: ref,
        variant: variant,
        size: size,
        className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext
    }, props), /*#__PURE__*/ React.createElement(ArrowRight, {
        className: "h-4 w-4"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "sr-only"
    }, "Next slide"));
});
CarouselNext.displayName = "CarouselNext";
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
