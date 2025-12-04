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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";
// Format: { THEME_NAME: CSS_SELECTOR }
var THEMES = {
    light: "",
    dark: ".dark"
};
var ChartContext = /*#__PURE__*/ React.createContext(null);
function useChart() {
    var context = React.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
var ChartContainer = /*#__PURE__*/ React.forwardRef(function(_param, ref) {
    var id = _param.id, className = _param.className, children = _param.children, config = _param.config, props = _object_without_properties(_param, [
        "id",
        "className",
        "children",
        "config"
    ]);
    var uniqueId = React.useId();
    var chartId = "chart-".concat(id || uniqueId.replace(/:/g, ""));
    return /*#__PURE__*/ React.createElement(ChartContext.Provider, {
        value: {
            config: config
        }
    }, /*#__PURE__*/ React.createElement("div", _object_spread({
        "data-chart": chartId,
        ref: ref,
        className: cn("flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none", className)
    }, props), /*#__PURE__*/ React.createElement(ChartStyle, {
        id: chartId,
        config: config
    }), /*#__PURE__*/ React.createElement(RechartsPrimitive.ResponsiveContainer, null, children)));
});
ChartContainer.displayName = "Chart";
var ChartStyle = function(param) {
    var id = param.id, config = param.config;
    var colorConfig = Object.entries(config).filter(function(param) {
        var _param = _sliced_to_array(param, 2), _ = _param[0], config = _param[1];
        return config.theme || config.color;
    });
    if (!colorConfig.length) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES).map(function(param) {
                var _param = _sliced_to_array(param, 2), theme = _param[0], prefix = _param[1];
                return "\n".concat(prefix, " [data-chart=").concat(id, "] {\n").concat(colorConfig.map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], itemConfig = _param[1];
                    var _itemConfig_theme;
                    var color = ((_itemConfig_theme = itemConfig.theme) === null || _itemConfig_theme === void 0 ? void 0 : _itemConfig_theme[theme]) || itemConfig.color;
                    return color ? "  --color-".concat(key, ": ").concat(color, ";") : null;
                }).join("\n"), "\n}\n");
            }).join("\n")
        }
    });
};
var ChartTooltip = RechartsPrimitive.Tooltip;
var ChartTooltipContent = /*#__PURE__*/ React.forwardRef(function(param, ref) {
    var active = param.active, payload = param.payload, className = param.className, _param_indicator = param.indicator, indicator = _param_indicator === void 0 ? "dot" : _param_indicator, _param_hideLabel = param.hideLabel, hideLabel = _param_hideLabel === void 0 ? false : _param_hideLabel, _param_hideIndicator = param.hideIndicator, hideIndicator = _param_hideIndicator === void 0 ? false : _param_hideIndicator, label = param.label, labelFormatter = param.labelFormatter, labelClassName = param.labelClassName, formatter = param.formatter, color = param.color, nameKey = param.nameKey, labelKey = param.labelKey;
    var config = useChart().config;
    var tooltipLabel = React.useMemo(function() {
        var _config_label;
        if (hideLabel || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
            return null;
        }
        var _payload = _sliced_to_array(payload, 1), item = _payload[0];
        var key = "".concat(labelKey || item.dataKey || item.name || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        var value = !labelKey && typeof label === "string" ? ((_config_label = config[label]) === null || _config_label === void 0 ? void 0 : _config_label.label) || label : itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label;
        if (labelFormatter) {
            return /*#__PURE__*/ React.createElement("div", {
                className: cn("font-medium", labelClassName)
            }, labelFormatter(value, payload));
        }
        if (!value) {
            return null;
        }
        return /*#__PURE__*/ React.createElement("div", {
            className: cn("font-medium", labelClassName)
        }, value);
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey
    ]);
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    var nestLabel = payload.length === 1 && indicator !== "dot";
    return /*#__PURE__*/ React.createElement("div", {
        ref: ref,
        className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className)
    }, !nestLabel ? tooltipLabel : null, /*#__PURE__*/ React.createElement("div", {
        className: "grid gap-1.5"
    }, payload.map(function(item, index) {
        var key = "".concat(nameKey || item.name || item.dataKey || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        var indicatorColor = color || item.payload.fill || item.color;
        return /*#__PURE__*/ React.createElement("div", {
            key: item.dataKey,
            className: cn("flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground", indicator === "dot" && "items-center")
        }, formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? formatter(item.value, item.name, item, index, item.payload) : /*#__PURE__*/ React.createElement(React.Fragment, null, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) ? /*#__PURE__*/ React.createElement(itemConfig.icon, null) : !hideIndicator && /*#__PURE__*/ React.createElement("div", {
            className: cn("shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]", {
                "h-2.5 w-2.5": indicator === "dot",
                "w-1": indicator === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                "my-0.5": nestLabel && indicator === "dashed"
            }),
            style: {
                "--color-bg": indicatorColor,
                "--color-border": indicatorColor
            }
        }), /*#__PURE__*/ React.createElement("div", {
            className: cn("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center")
        }, /*#__PURE__*/ React.createElement("div", {
            className: "grid gap-1.5"
        }, nestLabel ? tooltipLabel : null, /*#__PURE__*/ React.createElement("span", {
            className: "text-muted-foreground"
        }, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) || item.name)), item.value && /*#__PURE__*/ React.createElement("span", {
            className: "font-mono font-medium tabular-nums text-foreground"
        }, item.value.toLocaleString()))));
    })));
});
ChartTooltipContent.displayName = "ChartTooltip";
var ChartLegend = RechartsPrimitive.Legend;
var ChartLegendContent = /*#__PURE__*/ React.forwardRef(function(param, ref) {
    var className = param.className, _param_hideIcon = param.hideIcon, hideIcon = _param_hideIcon === void 0 ? false : _param_hideIcon, payload = param.payload, _param_verticalAlign = param.verticalAlign, verticalAlign = _param_verticalAlign === void 0 ? "bottom" : _param_verticalAlign, nameKey = param.nameKey;
    var config = useChart().config;
    if (!(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", {
        ref: ref,
        className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)
    }, payload.map(function(item) {
        var key = "".concat(nameKey || item.dataKey || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /*#__PURE__*/ React.createElement("div", {
            key: item.value,
            className: cn("flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground")
        }, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) && !hideIcon ? /*#__PURE__*/ React.createElement(itemConfig.icon, null) : /*#__PURE__*/ React.createElement("div", {
            className: "h-2 w-2 shrink-0 rounded-[2px]",
            style: {
                backgroundColor: item.color
            }
        }), itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label);
    }));
});
ChartLegendContent.displayName = "ChartLegend";
// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
    if ((typeof payload === "undefined" ? "undefined" : _type_of(payload)) !== "object" || payload === null) {
        return undefined;
    }
    var payloadPayload = "payload" in payload && _type_of(payload.payload) === "object" && payload.payload !== null ? payload.payload : undefined;
    var configLabelKey = key;
    if (key in payload && typeof payload[key] === "string") {
        configLabelKey = payload[key];
    } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config ? config[configLabelKey] : config[key];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
