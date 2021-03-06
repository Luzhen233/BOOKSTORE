'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('element-plus/lib/utils/with-install');
var vue = require('vue');
var core = require('@vueuse/core');
var hooks = require('element-plus/lib/hooks');
var aria = require('element-plus/lib/utils/aria');
var util = require('element-plus/lib/utils/util');
var props = require('element-plus/lib/utils/props');

const imageViewerProps = props.buildProps({
  urlList: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  }
});
const imageViewerEmits = {
  close: () => true,
  switch: (index) => typeof index === "number"
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Mode = {
  CONTAIN: {
    name: "contain",
    icon: "el-icon-full-screen"
  },
  ORIGINAL: {
    name: "original",
    icon: "el-icon-c-scale-to-original"
  }
};
const mousewheelEventName = util.isFirefox() ? "DOMMouseScroll" : "mousewheel";
var script = vue.defineComponent({
  name: "ElImageViewer",
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(props, { emit }) {
    const { t } = hooks.useLocaleInject();
    const wrapper = vue.ref();
    const img = vue.ref();
    const scopeEventListener = vue.effectScope();
    const loading = vue.ref(true);
    const index = vue.ref(props.initialIndex);
    const mode = vue.ref(Mode.CONTAIN);
    const transform = vue.ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = vue.computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = vue.computed(() => {
      return index.value === 0;
    });
    const isLast = vue.computed(() => {
      return index.value === props.urlList.length - 1;
    });
    const currentImg = vue.computed(() => {
      return props.urlList[index.value];
    });
    const imgStyle = vue.computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? "transform .3s" : "",
        marginLeft: `${offsetX}px`,
        marginTop: `${offsetY}px`
      };
      if (mode.value.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    function hide() {
      unregisterEventListener();
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = util.rafThrottle((e) => {
        switch (e.code) {
          case aria.EVENT_CODE.esc:
            hide();
            break;
          case aria.EVENT_CODE.space:
            toggleMode();
            break;
          case aria.EVENT_CODE.left:
            prev();
            break;
          case aria.EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case aria.EVENT_CODE.right:
            next();
            break;
          case aria.EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = util.rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (delta > 0) {
          handleActions("zoomIn", {
            zoomRate: 0.015,
            enableTransition: false
          });
        } else {
          handleActions("zoomOut", {
            zoomRate: 0.015,
            enableTransition: false
          });
        }
      });
      scopeEventListener.run(() => {
        core.useEventListener(document, "keydown", keydownHandler);
        core.useEventListener(document, mousewheelEventName, mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const divLeft = wrapper.value.clientLeft;
      const divRight = wrapper.value.clientLeft + wrapper.value.clientWidth;
      const divTop = wrapper.value.clientTop;
      const divBottom = wrapper.value.clientTop + wrapper.value.clientHeight;
      const dragHandler = util.rafThrottle((ev) => {
        transform.value = __spreadProps(__spreadValues({}, transform.value), {
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        });
      });
      const removeMousemove = core.useEventListener(document, "mousemove", dragHandler);
      core.useEventListener(document, "mouseup", (evt) => {
        const mouseX = evt.pageX;
        const mouseY = evt.pageY;
        if (mouseX < divLeft || mouseX > divRight || mouseY < divTop || mouseY > divBottom) {
          reset();
        }
        removeMousemove();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = Mode[modeNames[nextIndex]];
      reset();
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value - 1 + len) % len;
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value + 1) % len;
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { zoomRate, rotateDeg, enableTransition } = __spreadValues({
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true
      }, options);
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale - zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          transform.value.scale = parseFloat((transform.value.scale + zoomRate).toFixed(3));
          break;
        case "clocelise":
          transform.value.deg += rotateDeg;
          break;
        case "anticlocelise":
          transform.value.deg -= rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    vue.watch(currentImg, () => {
      vue.nextTick(() => {
        const $img = img.value;
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    vue.watch(index, (val) => {
      reset();
      emit("switch", val);
    });
    vue.onMounted(() => {
      var _a, _b;
      registerEventListener();
      (_b = (_a = wrapper.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    });
    return {
      index,
      wrapper,
      img,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      mode,
      handleActions,
      prev,
      next,
      hide,
      toggleMode,
      handleImgLoad,
      handleImgError,
      handleMouseDown
    };
  }
});

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("i", { class: "el-icon-close" }, null, -1);
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("i", { class: "el-icon-arrow-left" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ vue.createElementVNode("i", { class: "el-icon-arrow-right" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { class: "el-image-viewer__btn el-image-viewer__actions" };
const _hoisted_8 = { class: "el-image-viewer__actions__inner" };
const _hoisted_9 = /* @__PURE__ */ vue.createElementVNode("i", { class: "el-image-viewer__actions__divider" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ vue.createElementVNode("i", { class: "el-image-viewer__actions__divider" }, null, -1);
const _hoisted_11 = { class: "el-image-viewer__canvas" };
const _hoisted_12 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Transition, { name: "viewer-fade" }, {
    default: vue.withCtx(() => [
      vue.createElementVNode("div", {
        ref: "wrapper",
        tabindex: -1,
        class: "el-image-viewer__wrapper",
        style: vue.normalizeStyle({ zIndex: _ctx.zIndex })
      }, [
        vue.createElementVNode("div", {
          class: "el-image-viewer__mask",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.hideOnClickModal && _ctx.hide(), ["self"]))
        }),
        vue.createCommentVNode(" CLOSE "),
        vue.createElementVNode("span", {
          class: "el-image-viewer__btn el-image-viewer__close",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.hide && _ctx.hide(...args))
        }, _hoisted_2),
        vue.createCommentVNode(" ARROW "),
        !_ctx.isSingle ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["el-image-viewer__btn el-image-viewer__prev", { "is-disabled": !_ctx.infinite && _ctx.isFirst }]),
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prev && _ctx.prev(...args))
          }, _hoisted_4, 2),
          vue.createElementVNode("span", {
            class: vue.normalizeClass(["el-image-viewer__btn el-image-viewer__next", { "is-disabled": !_ctx.infinite && _ctx.isLast }]),
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.next && _ctx.next(...args))
          }, _hoisted_6, 2)
        ], 64)) : vue.createCommentVNode("v-if", true),
        vue.createCommentVNode(" ACTIONS "),
        vue.createElementVNode("div", _hoisted_7, [
          vue.createElementVNode("div", _hoisted_8, [
            vue.createElementVNode("i", {
              class: "el-icon-zoom-out",
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleActions("zoomOut"))
            }),
            vue.createElementVNode("i", {
              class: "el-icon-zoom-in",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleActions("zoomIn"))
            }),
            _hoisted_9,
            vue.createElementVNode("i", {
              class: vue.normalizeClass(_ctx.mode.icon),
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.toggleMode && _ctx.toggleMode(...args))
            }, null, 2),
            _hoisted_10,
            vue.createElementVNode("i", {
              class: "el-icon-refresh-left",
              onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleActions("anticlocelise"))
            }),
            vue.createElementVNode("i", {
              class: "el-icon-refresh-right",
              onClick: _cache[8] || (_cache[8] = ($event) => _ctx.handleActions("clocelise"))
            })
          ])
        ]),
        vue.createCommentVNode(" CANVAS "),
        vue.createElementVNode("div", _hoisted_11, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.urlList, (url, i) => {
            return vue.withDirectives((vue.openBlock(), vue.createElementBlock("img", {
              ref: "img",
              key: url,
              src: url,
              style: vue.normalizeStyle(_ctx.imgStyle),
              class: "el-image-viewer__img",
              onLoad: _cache[9] || (_cache[9] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
              onError: _cache[10] || (_cache[10] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args)),
              onMousedown: _cache[11] || (_cache[11] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args))
            }, null, 44, _hoisted_12)), [
              [vue.vShow, i === _ctx.index]
            ]);
          }), 128))
        ]),
        vue.renderSlot(_ctx.$slots, "default")
      ], 4)
    ]),
    _: 3
  });
}

script.render = render;
script.__file = "packages/components/image-viewer/src/image-viewer.vue";

const ElImageViewer = withInstall.withInstall(script);

exports.ElImageViewer = ElImageViewer;
exports["default"] = ElImageViewer;
exports.imageViewerEmits = imageViewerEmits;
exports.imageViewerProps = imageViewerProps;
