'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('element-plus/lib/utils/with-install');
var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
var hooks = require('element-plus/lib/hooks');
var ImageViewer = require('element-plus/lib/components/image-viewer');
var isServer = require('element-plus/lib/utils/isServer');
var dom = require('element-plus/lib/utils/dom');
var props = require('element-plus/lib/utils/props');
var util = require('element-plus/lib/utils/util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ImageViewer__default = /*#__PURE__*/_interopDefaultLegacy(ImageViewer);
var isServer__default = /*#__PURE__*/_interopDefaultLegacy(isServer);

const imageProps = props.buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: props.definePropType([String, Object])
  },
  previewSrcList: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => util.isNumber(val),
  close: () => true
};

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
var script = vue.defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: ImageViewer__default["default"]
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = hooks.useLocaleInject();
    const attrs = hooks.useAttrs();
    const hasLoadError = vue.ref(false);
    const loading = vue.ref(true);
    const imgWidth = vue.ref(0);
    const imgHeight = vue.ref(0);
    const showViewer = vue.ref(false);
    const container = vue.ref();
    const _scrollContainer = vue.ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = vue.computed(() => rawAttrs.style);
    const imageStyle = vue.computed(() => {
      const { fit } = props;
      if (!isServer__default["default"] && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = vue.computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = vue.computed(() => {
      const { src, previewSrcList } = props;
      let previewIndex = 0;
      const srcIndex = previewSrcList.indexOf(src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (isServer__default["default"])
        return;
      loading.value = true;
      hasLoadError.value = false;
      const img = new Image();
      img.addEventListener("load", (e) => handleLoad(e, img));
      img.addEventListener("error", handleError);
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = props.src;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading.value = false;
      hasLoadError.value = false;
    }
    function handleError(event) {
      loading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (dom.isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = core.useThrottleFn(handleLazyLoad, 200);
    function addLazyLoadListener() {
      return __async(this, null, function* () {
        var _a;
        if (isServer__default["default"])
          return;
        yield vue.nextTick();
        const { scrollContainer } = props;
        if (isHtmlElement(scrollContainer)) {
          _scrollContainer.value = scrollContainer;
        } else if (shared.isString(scrollContainer) && scrollContainer !== "") {
          _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
        } else if (container.value) {
          _scrollContainer.value = dom.getScrollContainer(container.value);
        }
        if (_scrollContainer.value) {
          stopScrollListener = core.useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
          setTimeout(() => handleLazyLoad(), 100);
        }
      });
    }
    function removeLazyLoadListener() {
      if (isServer__default["default"] || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = core.useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    vue.watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    vue.onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});

const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", { class: "el-image__placeholder" }, null, -1);
const _hoisted_2 = { class: "el-image__error" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = vue.resolveComponent("image-viewer");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "container",
    class: vue.normalizeClass(["el-image", _ctx.$attrs.class]),
    style: vue.normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? vue.renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      _hoisted_1
    ]) : _ctx.hasLoadError ? vue.renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      vue.createElementVNode("div", _hoisted_2, vue.toDisplayString(_ctx.t("el.image.error")), 1)
    ]) : (vue.openBlock(), vue.createElementBlock("img", vue.mergeProps({
      key: 2,
      class: "el-image__inner"
    }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: {
        "el-image__preview": _ctx.preview
      },
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_3)),
    (vue.openBlock(), vue.createBlock(vue.Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        _ctx.showViewer ? (vue.openBlock(), vue.createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: vue.withCtx(() => [
            _ctx.$slots.viewer ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_4, [
              vue.renderSlot(_ctx.$slots, "viewer")
            ])) : vue.createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : vue.createCommentVNode("v-if", true)
      ], 2112)) : vue.createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}

script.render = render;
script.__file = "packages/components/image/src/image.vue";

const ElImage = withInstall.withInstall(script);

exports.ElImage = ElImage;
exports["default"] = ElImage;
exports.imageEmits = imageEmits;
exports.imageProps = imageProps;
