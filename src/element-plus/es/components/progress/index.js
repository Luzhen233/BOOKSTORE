import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, renderSlot, normalizeProps, guardReactiveProps, toDisplayString, createCommentVNode } from 'vue';

var script = defineComponent({
  name: "ElProgress",
  props: {
    type: {
      type: String,
      default: "line",
      validator: (val) => ["line", "circle", "dashboard"].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (val) => val >= 0 && val <= 100
    },
    status: {
      type: String,
      default: "",
      validator: (val) => ["", "success", "exception", "warning"].indexOf(val) > -1
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: [String, Array, Function],
      default: ""
    },
    format: {
      type: Function,
      default: (percentage) => `${percentage}%`
    }
  },
  setup(props) {
    const barStyle = computed(() => {
      return {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`,
        backgroundColor: getCurrentColor(props.percentage)
      };
    });
    const relativeStrokeWidth = computed(() => {
      return (props.strokeWidth / props.width * 100).toFixed(1);
    });
    const radius = computed(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        return parseInt(`${50 - parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      } else {
        return 0;
      }
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => {
      return 2 * Math.PI * radius.value;
    });
    const rate = computed(() => {
      return props.type === "dashboard" ? 0.75 : 1;
    });
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => {
      return {
        strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value
      };
    });
    const circlePathStyle = computed(() => {
      return {
        strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      };
    });
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        switch (props.status) {
          case "success":
            ret = "#13ce66";
            break;
          case "exception":
            ret = "#ff4949";
            break;
          case "warning":
            ret = "#e6a23c";
            break;
          default:
            ret = "#20a0ff";
        }
      }
      return ret;
    });
    const iconClass = computed(() => {
      if (props.status === "warning") {
        return "el-icon-warning";
      }
      if (props.type === "line") {
        return props.status === "success" ? "el-icon-circle-check" : "el-icon-circle-close";
      } else {
        return props.status === "success" ? "el-icon-check" : "el-icon-close";
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => {
      return props.format(props.percentage);
    });
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (typeof color === "function") {
        return color(percentage);
      } else if (typeof color === "string") {
        return color;
      } else {
        const span = 100 / color.length;
        const seriesColors = color.map((seriesColor, index) => {
          if (typeof seriesColor === "string") {
            return {
              color: seriesColor,
              percentage: (index + 1) * span
            };
          }
          return seriesColor;
        });
        const colorArray = seriesColors.sort((a, b) => a.percentage - b.percentage);
        for (let i = 0; i < colorArray.length; i++) {
          if (colorArray[i].percentage > percentage) {
            return colorArray[i].color;
          }
        }
        return (_a = colorArray[colorArray.length - 1]) == null ? void 0 : _a.color;
      }
    };
    const slotData = computed(() => {
      return {
        percentage: props.percentage
      };
    });
    return {
      barStyle,
      relativeStrokeWidth,
      radius,
      trackPath,
      perimeter,
      rate,
      strokeDashoffset,
      trailPathStyle,
      circlePathStyle,
      stroke,
      iconClass,
      progressTextSize,
      content,
      getCurrentColor,
      slotData
    };
  }
});

const _hoisted_1 = ["aria-valuenow"];
const _hoisted_2 = {
  key: 0,
  class: "el-progress-bar"
};
const _hoisted_3 = {
  key: 0,
  class: "el-progress-bar__innerText"
};
const _hoisted_4 = { viewBox: "0 0 100 100" };
const _hoisted_5 = ["d", "stroke-width"];
const _hoisted_6 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_7 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-progress", [
      `el-progress--${_ctx.type}`,
      _ctx.status ? `is-${_ctx.status}` : "",
      {
        "el-progress--without-text": !_ctx.showText,
        "el-progress--text-inside": _ctx.textInside
      }
    ]]),
    role: "progressbar",
    "aria-valuenow": _ctx.percentage,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [
    _ctx.type === "line" ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createElementVNode("div", {
        class: "el-progress-bar__outer",
        style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
      }, [
        createElementVNode("div", {
          class: normalizeClass([
            "el-progress-bar__inner",
            { "el-progress-bar__inner--indeterminate": _ctx.indeterminate }
          ]),
          style: normalizeStyle(_ctx.barStyle)
        }, [
          (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", _hoisted_3, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
              createElementVNode("span", null, toDisplayString(_ctx.content), 1)
            ])
          ])) : createCommentVNode("v-if", true)
        ], 6)
      ], 4)
    ])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: "el-progress-circle",
      style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
    }, [
      (openBlock(), createElementBlock("svg", _hoisted_4, [
        createElementVNode("path", {
          class: "el-progress-circle__track",
          d: _ctx.trackPath,
          stroke: "#e5e9f2",
          "stroke-width": _ctx.relativeStrokeWidth,
          fill: "none",
          style: normalizeStyle(_ctx.trailPathStyle)
        }, null, 12, _hoisted_5),
        createElementVNode("path", {
          class: "el-progress-circle__path",
          d: _ctx.trackPath,
          stroke: _ctx.stroke,
          fill: "none",
          "stroke-linecap": _ctx.strokeLinecap,
          "stroke-width": _ctx.percentage ? _ctx.relativeStrokeWidth : 0,
          style: normalizeStyle(_ctx.circlePathStyle)
        }, null, 12, _hoisted_6)
      ]))
    ], 4)),
    (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: "el-progress__text",
      style: normalizeStyle({ fontSize: `${_ctx.progressTextSize}px` })
    }, [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
        !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(_ctx.content), 1)) : (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.iconClass)
        }, null, 2))
      ])
    ], 4)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

script.render = render;
script.__file = "packages/components/progress/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Progress = script;
const ElProgress = _Progress;

export { ElProgress, _Progress as default };
