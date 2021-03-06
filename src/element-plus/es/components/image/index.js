import { withInstall } from 'element-plus/es/utils/with-install';
import { defineComponent, ref, computed, watch, nextTick, onMounted, resolveComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createElementVNode, toDisplayString, mergeProps, createBlock, Teleport, Fragment, withCtx, createCommentVNode } from 'vue';
import { isString } from '@vue/shared';
import { useThrottleFn, useEventListener } from '@vueuse/core';
import { useLocaleInject, useAttrs } from 'element-plus/es/hooks';
import ImageViewer from 'element-plus/es/components/image-viewer';
import isServer from 'element-plus/es/utils/isServer';
import { getScrollContainer, isInContainer } from 'element-plus/es/utils/dom';
import { buildProps, definePropType, mutable } from 'element-plus/es/utils/props';
import { isNumber } from 'element-plus/es/utils/util';

const imageProps = buildProps({
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
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
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
var script = defineComponent({
  name: "ElImage",
  components: {
    ImageViewer
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = useLocaleInject();
    const attrs = useAttrs();
    const hasLoadError = ref(false);
    const loading = ref(true);
    const imgWidth = ref(0);
    const imgHeight = ref(0);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (!isServer && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { src, previewSrcList } = props;
      let previewIndex = 0;
      const srcIndex = previewSrcList.indexOf(src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (isServer)
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
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    function addLazyLoadListener() {
      return __async(this, null, function* () {
        var _a;
        if (isServer)
          return;
        yield nextTick();
        const { scrollContainer } = props;
        if (isHtmlElement(scrollContainer)) {
          _scrollContainer.value = scrollContainer;
        } else if (isString(scrollContainer) && scrollContainer !== "") {
          _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
        } else if (container.value) {
          _scrollContainer.value = getScrollContainer(container.value);
        }
        if (_scrollContainer.value) {
          stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
          setTimeout(() => handleLazyLoad(), 100);
        }
      });
    }
    function removeLazyLoadListener() {
      if (isServer || !_scrollContainer.value || !lazyLoadHandler)
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
      stopWheelListener = useEventListener("wheel", wheelHandler, {
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
    watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
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

const _hoisted_1 = /* @__PURE__ */ createElementVNode("div", { class: "el-image__placeholder" }, null, -1);
const _hoisted_2 = { class: "el-image__error" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["el-image", _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      _hoisted_1
    ]) : _ctx.hasLoadError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createElementVNode("div", _hoisted_2, toDisplayString(_ctx.t("el.image.error")), 1)
    ]) : (openBlock(), createElementBlock("img", mergeProps({
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
    (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: withCtx(() => [
            _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "viewer")
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : createCommentVNode("v-if", true)
      ], 2112)) : createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}

script.render = render;
script.__file = "packages/components/image/src/image.vue";

const ElImage = withInstall(script);

export { ElImage, ElImage as default, imageEmits, imageProps };
