'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('element-plus/lib/utils/with-install');
var vue = require('vue');
var directives = require('element-plus/lib/directives');
var Menubar = require('element-plus/lib/utils/menu/menu-bar');
var props = require('element-plus/lib/utils/props');
var util = require('element-plus/lib/utils/util');
var dom = require('element-plus/lib/utils/dom');
var core = require('@vueuse/core');
var ElCollapseTransition = require('element-plus/lib/components/collapse-transition');
var ElPopper = require('element-plus/lib/components/popper');
var error = require('element-plus/lib/utils/error');
var color = require('element-plus/lib/utils/color');
var ElTooltip = require('element-plus/lib/components/tooltip');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Menubar__default = /*#__PURE__*/_interopDefaultLegacy(Menubar);
var ElCollapseTransition__default = /*#__PURE__*/_interopDefaultLegacy(ElCollapseTransition);
var ElPopper__default = /*#__PURE__*/_interopDefaultLegacy(ElPopper);
var ElTooltip__default = /*#__PURE__*/_interopDefaultLegacy(ElTooltip);

var script$2 = vue.defineComponent({
  name: "ElMenuCollapseTransition",
  setup() {
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        dom.addClass(el, "el-opacity-transition");
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        dom.removeClass(el, "el-opacity-transition");
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          el.dataset = {};
        }
        if (dom.hasClass(el, "el-menu--collapse")) {
          dom.removeClass(el, "el-menu--collapse");
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          dom.addClass(el, "el-menu--collapse");
        } else {
          dom.addClass(el, "el-menu--collapse");
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          dom.removeClass(el, "el-menu--collapse");
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        dom.addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock(vue.Transition, vue.mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: vue.withCtx(() => [
      vue.renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}

script$2.render = render$2;
script$2.__file = "packages/components/menu/src/menu-collapse-transition.vue";

function useMenu(instance, currentIndex) {
  const rootMenu = vue.inject("rootMenu");
  if (!rootMenu)
    error.throwError("useMenu", "can not inject root menu");
  const indexPath = vue.computed(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = vue.computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  const paddingStyle = vue.computed(() => {
    let parent = instance.parent;
    if (rootMenu.props.mode !== "vertical")
      return {};
    let padding = 20;
    if (rootMenu.props.collapse) {
      padding = 20;
    } else {
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
    }
    return { paddingLeft: `${padding}px` };
  });
  return {
    parentMenu,
    paddingStyle,
    indexPath
  };
}

function useMenuColor(props) {
  const menuBarColor = vue.computed(() => {
    const color$1 = props.backgroundColor;
    if (!color$1) {
      return "";
    } else {
      return color.darken(color$1);
    }
  });
  return menuBarColor;
}

const useMenuCssVar = (props) => {
  return vue.computed(() => {
    return {
      "--el-menu-text-color": props.textColor || "",
      "--el-menu-hover-text-color": props.textColor || "",
      "--el-menu-background-color": props.backgroundColor || "",
      "--el-menu-hover-background-color": useMenuColor(props).value || "",
      "--el-menu-active-color": props.activeTextColor || ""
    };
  });
};

const subMenuProps = props.buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  }
});
const COMPONENT_NAME$2 = "ElSubMenu";
var SubMenu = vue.defineComponent({
  name: COMPONENT_NAME$2,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = vue.getCurrentInstance();
    const { paddingStyle, indexPath, parentMenu } = useMenu(instance, vue.computed(() => props.index));
    const rootMenu = vue.inject("rootMenu");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME$2, "can not inject root menu");
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME$2, "can not inject sub menu");
    const items = vue.ref({});
    const subMenus = vue.ref({});
    let timeout;
    const currentPlacement = vue.ref("");
    const mouseInChild = vue.ref(false);
    const verticalTitleRef = vue.ref();
    const vPopper = vue.ref();
    const subMenuTitleIcon = vue.computed(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? "el-icon-arrow-down" : "el-icon-arrow-right";
    });
    const isFirstLevel = vue.computed(() => {
      let isFirstLevel2 = true;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (["ElSubMenu", "ElMenuItemGroup"].includes(parent.type.name)) {
          isFirstLevel2 = false;
          break;
        } else {
          parent = parent.parent;
        }
      }
      return isFirstLevel2;
    });
    const appendToBody = vue.computed(() => {
      return props.popperAppendToBody === void 0 ? isFirstLevel.value : Boolean(props.popperAppendToBody);
    });
    const menuTransitionName = vue.computed(() => rootMenu.props.collapse ? "el-zoom-in-left" : "el-zoom-in-top");
    const fallbackPlacements = vue.computed(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = vue.computed(() => rootMenu.openedMenus.includes(props.index));
    const active = vue.computed(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = vue.computed(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = vue.computed(() => rootMenu.props.activeTextColor || "");
    const textColor = vue.computed(() => rootMenu.props.textColor || "");
    const mode = vue.computed(() => rootMenu.props.mode);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = vue.computed(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a;
      return (_a = vPopper.value) == null ? void 0 : _a.doDestroy();
    };
    const handleCollapseToggle = (value) => {
      if (value) {
        updatePlacement();
      } else {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus" && !event.relatedTarget) {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => rootMenu.openMenu(props.index, indexPath.value), showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      mouseInChild.value = false;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = core.useTimeoutFn(() => !mouseInChild.value && rootMenu.closeMenu(props.index), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    const updatePlacement = () => {
      currentPlacement.value = mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start";
    };
    vue.watch(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      vue.provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave
      });
    }
    expose({
      opened
    });
    vue.onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
      updatePlacement();
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        vue.h("i", {
          class: ["el-sub-menu__icon-arrow", subMenuTitleIcon.value]
        })
      ];
      const ulStyle = useMenuCssVar(rootMenu.props);
      const child = rootMenu.isMenuPopup ? vue.h(ElPopper__default["default"], {
        ref: vPopper,
        manualMode: true,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: 6,
        showArrow: false,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        appendToBody: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        default: () => {
          var _a2;
          return vue.h("div", {
            class: [`el-menu--${mode.value}`, props.popperClass],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            vue.h("ul", {
              class: [
                "el-menu el-menu--popup",
                `el-menu--popup-${currentPlacement.value}`
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        trigger: () => vue.h("div", {
          class: "el-sub-menu__title",
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : vue.h(vue.Fragment, {}, [
        vue.h("div", {
          class: "el-sub-menu__title",
          style: [
            paddingStyle.value,
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        vue.h(ElCollapseTransition__default["default"], {}, {
          default: () => {
            var _a2;
            return vue.withDirectives(vue.h("ul", {
              role: "menu",
              class: "el-menu el-menu--inline",
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[vue.vShow, opened.value]]);
          }
        })
      ]);
      return vue.h("li", {
        class: [
          "el-sub-menu",
          {
            "is-active": active.value,
            "is-opened": opened.value,
            "is-disabled": props.disabled
          }
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});

const menuProps = props.buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => util.isString(path));
const menuEmits = {
  close: (index, indexPath) => util.isString(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => util.isString(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => util.isString(index) && checkIndexPath(indexPath) && util.isObject(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var Menu = vue.defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = vue.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = vue.ref();
    const openedMenus = vue.ref(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = vue.ref(props.defaultActive);
    const items = vue.ref({});
    const subMenus = vue.ref({});
    const alteredCollapse = vue.ref(false);
    const isMenuPopup = vue.computed(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
    };
    const closeMenu = (index) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index);
        emit("close", index, indexPath);
      } else {
        openMenu(index, indexPath);
        emit("open", index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
        initMenu();
      } else {
        if (!alteredCollapse.value) {
          activeIndex.value = void 0;
        } else {
          alteredCollapse.value = false;
        }
      }
    };
    const handleResize = () => vue.nextTick(() => {
      instance.proxy.$forceUpdate();
    });
    vue.watch(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    vue.watch(items.value, () => initMenu());
    vue.watch(() => props.collapse, (value, prev) => {
      if (value !== prev) {
        alteredCollapse.value = true;
      }
      if (value)
        openedMenus.value = [];
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      vue.provide("rootMenu", vue.reactive({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      vue.provide(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu
      });
    }
    vue.onMounted(() => {
      initMenu();
      if (props.mode === "horizontal") {
        new Menubar__default["default"](instance.vnode.el);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    const flattedChildren = (children) => {
      const vnodes = Array.isArray(children) ? children : [children];
      const result = [];
      vnodes.forEach((child) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children));
        } else {
          result.push(child);
        }
      });
      return result;
    };
    const useVNodeResize = (vnode) => props.mode === "horizontal" ? vue.withDirectives(vnode, [[directives.Resize, handleResize]]) : vnode;
    return () => {
      var _a, _b, _c, _d;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const items2 = Array.from((_d = (_c = menu.value) == null ? void 0 : _c.childNodes) != null ? _d : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
        const originalSlot = flattedChildren(slot);
        const moreItemWidth = 64;
        const paddingLeft = parseInt(getComputedStyle(menu.value).paddingLeft, 10);
        const paddingRight = parseInt(getComputedStyle(menu.value).paddingRight, 10);
        const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
        let calcWidth = 0;
        let sliceIndex = 0;
        items2.forEach((item, index) => {
          calcWidth += item.offsetWidth || 0;
          if (calcWidth <= menuWidth - moreItemWidth) {
            sliceIndex = index + 1;
          }
        });
        const slotDefault = originalSlot.slice(0, sliceIndex);
        const slotMore = originalSlot.slice(sliceIndex);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(vue.h(SubMenu, {
            index: "sub-menu-more",
            class: "el-sub-menu__hide-arrow"
          }, {
            title: () => vue.h("i", {
              class: ["el-icon-more", "el-sub-menu__icon-more"]
            }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props);
      const resizeMenu = (vNode) => props.ellipsis ? useVNodeResize(vNode) : vNode;
      const vMenu = resizeMenu(vue.h("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          "el-menu": true,
          "el-menu--horizontal": props.mode === "horizontal",
          "el-menu--collapse": props.collapse
        }
      }, [...slot.map((vnode) => resizeMenu(vnode)), ...vShowMore]));
      if (props.collapseTransition && props.mode === "vertical") {
        return vue.h(script$2, () => vMenu);
      }
      return vMenu;
    };
  }
});

const menuItemProps = props.buildProps({
  index: {
    type: props.definePropType([String, null]),
    default: null
  },
  route: {
    type: props.definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => util.isString(item.index) && Array.isArray(item.indexPath)
};

const COMPONENT_NAME$1 = "ElMenuItem";
var script$1 = vue.defineComponent({
  name: COMPONENT_NAME$1,
  components: {
    ElTooltip: ElTooltip__default["default"]
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = vue.getCurrentInstance();
    const rootMenu = vue.inject("rootMenu");
    if (!rootMenu)
      error.throwError(COMPONENT_NAME$1, "can not inject root menu");
    const { parentMenu, paddingStyle, indexPath } = useMenu(instance, vue.toRef(props, "index"));
    const subMenu = vue.inject(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      error.throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const active = vue.computed(() => props.index === rootMenu.activeIndex);
    const item = vue.reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    vue.onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    vue.onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect: ElPopper.Effect,
      parentMenu,
      rootMenu,
      paddingStyle,
      active,
      handleClick
    };
  }
});

const _hoisted_1$1 = { style: {
  position: "absolute",
  left: 0,
  top: 0,
  height: "100%",
  width: "100%",
  display: "inline-block",
  boxSizing: "border-box",
  padding: "0 20px"
} };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  return vue.openBlock(), vue.createElementBlock("li", {
    class: vue.normalizeClass(["el-menu-item", {
      "is-active": _ctx.active,
      "is-disabled": _ctx.disabled
    }]),
    role: "menuitem",
    tabindex: "-1",
    style: vue.normalizeStyle(_ctx.paddingStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? (vue.openBlock(), vue.createBlock(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right"
    }, {
      content: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "title")
      ]),
      default: vue.withCtx(() => [
        vue.createElementVNode("div", _hoisted_1$1, [
          vue.renderSlot(_ctx.$slots, "default")
        ])
      ]),
      _: 3
    }, 8, ["effect"])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.renderSlot(_ctx.$slots, "default"),
      vue.renderSlot(_ctx.$slots, "title")
    ], 64))
  ], 6);
}

script$1.render = render$1;
script$1.__file = "packages/components/menu/src/menu-item.vue";

const menuItemGroupProps = {
  title: String
};

const COMPONENT_NAME = "ElMenuItemGroup";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const instance = vue.getCurrentInstance();
    const menu = vue.inject("rootMenu");
    if (!menu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const levelPadding = vue.computed(() => {
      if (menu.props.collapse)
        return 20;
      let padding = 20;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding
    };
  }
});

const _hoisted_1 = { class: "el-menu-item-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("li", _hoisted_1, [
    vue.createElementVNode("div", {
      class: "el-menu-item-group__title",
      style: vue.normalizeStyle({ paddingLeft: `${_ctx.levelPadding}px` })
    }, [
      !_ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.title), 1)
      ], 2112)) : vue.renderSlot(_ctx.$slots, "title", { key: 1 })
    ], 4),
    vue.createElementVNode("ul", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]);
}

script.render = render;
script.__file = "packages/components/menu/src/menu-item-group.vue";

const ElMenu = withInstall.withInstall(Menu, {
  MenuItem: script$1,
  MenuItemGroup: script,
  SubMenu
});
const ElMenuItem = withInstall.withNoopInstall(script$1);
const ElMenuItemGroup = withInstall.withNoopInstall(script);
const ElSubMenu = withInstall.withNoopInstall(SubMenu);

exports.ElMenu = ElMenu;
exports.ElMenuItem = ElMenuItem;
exports.ElMenuItemGroup = ElMenuItemGroup;
exports.ElSubMenu = ElSubMenu;
exports["default"] = ElMenu;
exports.menuEmits = menuEmits;
exports.menuItemEmits = menuItemEmits;
exports.menuItemGroupProps = menuItemGroupProps;
exports.menuItemProps = menuItemProps;
exports.menuProps = menuProps;
exports.subMenuProps = subMenuProps;
