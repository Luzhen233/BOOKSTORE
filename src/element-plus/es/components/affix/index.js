import { withInstall } from 'element-plus/es/utils/with-install';
import { defineComponent, shallowRef, reactive, computed, watch, onMounted, openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot } from 'vue';
import { useEventListener, useResizeObserver } from '@vueuse/core';
import { getScrollContainer } from 'element-plus/es/utils/dom';
import { buildProps, definePropType } from 'element-plus/es/utils/props';

const affixProps = buildProps({
  zIndex: {
    type: definePropType([Number, String]),
    default: 100
  },
  target: {
    type: String,
    default: ""
  },
  offset: {
    type: Number,
    default: 0
  },
  position: {
    type: String,
    values: ["top", "bottom"],
    default: "top"
  }
});
const affixEmits = {
  scroll: ({ scrollTop, fixed }) => typeof scrollTop === "number" && typeof fixed === "boolean",
  change: (fixed) => typeof fixed === "boolean"
};

var script = defineComponent({
  name: "ElAffix",
  props: affixProps,
  emits: affixEmits,
  setup(props, { emit }) {
    const target = shallowRef();
    const root = shallowRef();
    const scrollContainer = shallowRef();
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      scrollTop: 0,
      clientHeight: 0,
      transform: 0
    });
    const rootStyle = computed(() => {
      return {
        height: state.fixed ? `${state.height}px` : "",
        width: state.fixed ? `${state.width}px` : ""
      };
    });
    const affixStyle = computed(() => {
      if (!state.fixed)
        return;
      const offset = props.offset ? `${props.offset}px` : 0;
      const transform = state.transform ? `translateY(${state.transform}px)` : "";
      return {
        height: `${state.height}px`,
        width: `${state.width}px`,
        top: props.position === "top" ? offset : "",
        bottom: props.position === "bottom" ? offset : "",
        transform,
        zIndex: props.zIndex
      };
    });
    const update = () => {
      if (!root.value || !target.value || !scrollContainer.value)
        return;
      const rootRect = root.value.getBoundingClientRect();
      const targetRect = target.value.getBoundingClientRect();
      state.height = rootRect.height;
      state.width = rootRect.width;
      state.scrollTop = scrollContainer.value instanceof Window ? document.documentElement.scrollTop : scrollContainer.value.scrollTop;
      state.clientHeight = document.documentElement.clientHeight;
      if (props.position === "top") {
        if (props.target) {
          const difference = targetRect.bottom - props.offset - state.height;
          state.fixed = props.offset > rootRect.top && targetRect.bottom > 0;
          state.transform = difference < 0 ? difference : 0;
        } else {
          state.fixed = props.offset > rootRect.top;
        }
      } else {
        if (props.target) {
          const difference = state.clientHeight - targetRect.top - props.offset - state.height;
          state.fixed = state.clientHeight - props.offset < rootRect.bottom && state.clientHeight > targetRect.top;
          state.transform = difference < 0 ? -difference : 0;
        } else {
          state.fixed = state.clientHeight - props.offset < rootRect.bottom;
        }
      }
    };
    const onScroll = () => {
      update();
      emit("scroll", {
        scrollTop: state.scrollTop,
        fixed: state.fixed
      });
    };
    watch(() => state.fixed, () => {
      emit("change", state.fixed);
    });
    onMounted(() => {
      var _a;
      if (props.target) {
        target.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
        if (!target.value) {
          throw new Error(`Target is not existed: ${props.target}`);
        }
      } else {
        target.value = document.documentElement;
      }
      scrollContainer.value = getScrollContainer(root.value, true);
    });
    useEventListener(scrollContainer, "scroll", onScroll);
    useResizeObserver(root, () => update());
    return {
      root,
      state,
      rootStyle,
      affixStyle
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: "el-affix",
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createElementVNode("div", {
      class: normalizeClass({ "el-affix--fixed": _ctx.state.fixed }),
      style: normalizeStyle(_ctx.affixStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4);
}

script.render = render;
script.__file = "packages/components/affix/src/affix.vue";

const ElAffix = withInstall(script);

export { ElAffix, affixEmits, affixProps, ElAffix as default };
