'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('element-plus/lib/utils/with-install');
var vue = require('vue');
var shared = require('@vue/shared');
var aria = require('element-plus/lib/utils/aria');
var resizeEvent = require('element-plus/lib/utils/resize-event');
var dom = require('element-plus/lib/utils/dom');
var error = require('element-plus/lib/utils/error');
var directives = require('element-plus/lib/directives');

var script$2 = vue.defineComponent({
  name: "ElTabBar",
  directives: {
    Resize: directives.Resize
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const rootTabs = vue.inject("rootTabs");
    if (!rootTabs) {
      throw new Error(`ElTabBar must use with ElTabs`);
    }
    const instance = vue.getCurrentInstance();
    const getBarStyle = () => {
      const style = {};
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a;
        const $el = (_a = instance.parent.refs) == null ? void 0 : _a[`tab-${tab.paneName}`];
        if (!$el) {
          return false;
        }
        if (!tab.active) {
          return true;
        } else {
          tabSize = $el[`client${shared.capitalize(sizeName)}`];
          const position = sizeDir === "x" ? "left" : "top";
          offset = $el.getBoundingClientRect()[position] - $el.parentElement.getBoundingClientRect()[position];
          const tabStyles = window.getComputedStyle($el);
          if (sizeName === "width") {
            if (props.tabs.length > 1) {
              tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
            }
            offset += parseFloat(tabStyles.paddingLeft);
          }
          return false;
        }
      });
      const transform = `translate${shared.capitalize(sizeDir)}(${offset}px)`;
      style[sizeName] = `${tabSize}px`;
      style.transform = transform;
      style.msTransform = transform;
      style.webkitTransform = transform;
      return style;
    };
    const barStyle = vue.ref(getBarStyle());
    const update = () => {
      barStyle.value = getBarStyle();
    };
    vue.watch(() => props.tabs, () => {
      vue.nextTick(() => {
        update();
      });
    });
    return {
      rootTabs,
      barStyle,
      update
    };
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_resize = vue.resolveDirective("resize");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: vue.normalizeStyle(_ctx.barStyle)
  }, null, 6)), [
    [_directive_resize, _ctx.update]
  ]);
}

script$2.render = render$1;
script$2.__file = "packages/components/tabs/src/tab-bar.vue";

var script$1 = vue.defineComponent({
  name: "ElTabNav",
  components: {
    TabBar: script$2
  },
  props: {
    panes: {
      type: Array,
      default: () => []
    },
    currentName: {
      type: String,
      default: ""
    },
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: shared.NOOP
    },
    onTabRemove: {
      type: Function,
      default: shared.NOOP
    },
    type: {
      type: String,
      default: ""
    },
    stretch: Boolean
  },
  setup() {
    const rootTabs = vue.inject("rootTabs");
    if (!rootTabs) {
      error.throwError("[ElTabNav]", `ElTabNav must be nested inside ElTabs`);
    }
    const scrollable = vue.ref(false);
    const navOffset = vue.ref(0);
    const isFocus = vue.ref(false);
    const focusable = vue.ref(true);
    const navScroll$ = vue.ref(null);
    const nav$ = vue.ref(null);
    const el$ = vue.ref(null);
    const sizeName = vue.computed(() => {
      return ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
    });
    const navStyle = vue.computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      const navSize = nav$.value[`offset${shared.capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = () => {
      if (!scrollable.value)
        return;
      const nav = nav$.value;
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      if (!nav$.value)
        return;
      const navSize = nav$.value[`offset${shared.capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${shared.capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        const currentOffset2 = navOffset.value;
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset2;
        scrollable.value.next = currentOffset2 + containerSize < navSize;
        if (navSize - currentOffset2 < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      let nextIndex;
      let currentIndex, tabList;
      const { up, down, left, right } = aria.EVENT_CODE;
      if ([up, down, left, right].indexOf(code) !== -1) {
        tabList = e.currentTarget.querySelectorAll("[role=tab]");
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus();
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value) {
        isFocus.value = true;
      }
    };
    const removeFocus = () => {
      isFocus.value = false;
    };
    const visibilityChangeHandler = () => {
      const visibility = document.visibilityState;
      if (visibility === "hidden") {
        focusable.value = false;
      } else if (visibility === "visible") {
        setTimeout(() => {
          focusable.value = true;
        }, 50);
      }
    };
    const windowBlurHandler = () => {
      focusable.value = false;
    };
    const windowFocusHandler = () => {
      setTimeout(() => {
        focusable.value = true;
      }, 50);
    };
    vue.onUpdated(() => {
      update();
    });
    vue.onMounted(() => {
      resizeEvent.addResizeListener(el$.value, update);
      dom.on(document, "visibilitychange", visibilityChangeHandler);
      dom.on(window, "blur", windowBlurHandler);
      dom.on(window, "focus", windowFocusHandler);
      setTimeout(() => {
        scrollToActiveTab();
      }, 0);
    });
    vue.onBeforeUnmount(() => {
      if (el$.value) {
        resizeEvent.removeResizeListener(el$.value, update);
      }
      dom.off(document, "visibilitychange", visibilityChangeHandler);
      dom.off(window, "blur", windowBlurHandler);
      dom.off(window, "focus", windowFocusHandler);
    });
    return {
      rootTabs,
      scrollable,
      navOffset,
      isFocus,
      focusable,
      navScroll$,
      nav$,
      el$,
      sizeName,
      navStyle,
      scrollPrev,
      scrollNext,
      scrollToActiveTab,
      update,
      changeTab,
      setFocus,
      removeFocus,
      visibilityChangeHandler,
      windowBlurHandler,
      windowFocusHandler
    };
  },
  render() {
    const {
      type,
      panes,
      editable,
      stretch,
      onTabClick,
      onTabRemove,
      navStyle,
      scrollable,
      scrollNext,
      scrollPrev,
      changeTab,
      setFocus,
      removeFocus,
      rootTabs,
      isFocus
    } = this;
    const scrollBtn = scrollable ? [
      vue.h("span", {
        class: [
          "el-tabs__nav-prev",
          scrollable.prev ? "" : "is-disabled"
        ],
        onClick: scrollPrev
      }, [vue.h("i", { class: "el-icon-arrow-left" })]),
      vue.h("span", {
        class: [
          "el-tabs__nav-next",
          scrollable.next ? "" : "is-disabled"
        ],
        onClick: scrollNext
      }, [vue.h("i", { class: "el-icon-arrow-right" })])
    ] : null;
    const tabs = panes.map((pane, index) => {
      var _a, _b;
      const tabName = pane.props.name || pane.index || `${index}`;
      const closable = pane.isClosable || editable;
      pane.index = `${index}`;
      const btnClose = closable ? vue.h("span", {
        class: "el-icon-close",
        onClick: (ev) => {
          onTabRemove(pane, ev);
        }
      }) : null;
      const tabLabelContent = ((_b = (_a = pane.instance.slots).label) == null ? void 0 : _b.call(_a)) || pane.props.label;
      const tabindex = pane.active ? 0 : -1;
      return vue.h("div", {
        class: {
          "el-tabs__item": true,
          [`is-${rootTabs.props.tabPosition}`]: true,
          "is-active": pane.active,
          "is-disabled": pane.props.disabled,
          "is-closable": closable,
          "is-focus": isFocus
        },
        id: `tab-${tabName}`,
        key: `tab-${tabName}`,
        "aria-controls": `pane-${tabName}`,
        role: "tab",
        "aria-selected": pane.active,
        ref: `tab-${tabName}`,
        tabindex,
        onFocus: () => {
          setFocus();
        },
        onBlur: () => {
          removeFocus();
        },
        onClick: (ev) => {
          removeFocus();
          onTabClick(pane, tabName, ev);
        },
        onKeydown: (ev) => {
          if (closable && (ev.code === aria.EVENT_CODE.delete || ev.code === aria.EVENT_CODE.backspace)) {
            onTabRemove(pane, ev);
          }
        }
      }, [tabLabelContent, btnClose]);
    });
    return vue.h("div", {
      ref: "el$",
      class: [
        "el-tabs__nav-wrap",
        scrollable ? "is-scrollable" : "",
        `is-${rootTabs.props.tabPosition}`
      ]
    }, [
      scrollBtn,
      vue.h("div", {
        class: "el-tabs__nav-scroll",
        ref: "navScroll$"
      }, [
        vue.h("div", {
          class: [
            "el-tabs__nav",
            `is-${rootTabs.props.tabPosition}`,
            stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "is-stretch" : ""
          ],
          ref: "nav$",
          style: navStyle,
          role: "tablist",
          onKeydown: changeTab
        }, [
          !type ? vue.h(script$2, {
            tabs: [...panes]
          }) : null,
          tabs
        ])
      ])
    ]);
  }
});

script$1.__file = "packages/components/tabs/src/tab-nav.vue";

var Tabs = vue.defineComponent({
  name: "ElTabs",
  components: { TabNav: script$1 },
  props: {
    type: {
      type: String,
      default: ""
    },
    activeName: {
      type: String,
      default: ""
    },
    closable: Boolean,
    addable: Boolean,
    modelValue: {
      type: String,
      default: ""
    },
    editable: Boolean,
    tabPosition: {
      type: String,
      default: "top"
    },
    beforeLeave: {
      type: Function,
      default: null
    },
    stretch: Boolean
  },
  emits: [
    "tab-click",
    "edit",
    "tab-remove",
    "tab-add",
    "input",
    "update:modelValue"
  ],
  setup(props, ctx) {
    const nav$ = vue.ref(null);
    const currentName = vue.ref(props.modelValue || props.activeName || "0");
    const panes = vue.ref([]);
    const instance = vue.getCurrentInstance();
    const paneStatesMap = {};
    vue.provide("rootTabs", {
      props,
      currentName
    });
    vue.provide("updatePaneState", (pane) => {
      paneStatesMap[pane.uid] = pane;
    });
    vue.watch(() => props.activeName, (modelValue) => {
      setCurrentName(modelValue);
    });
    vue.watch(() => props.modelValue, (modelValue) => {
      setCurrentName(modelValue);
    });
    vue.watch(currentName, () => {
      vue.nextTick(() => {
        nav$.value && nav$.value.$nextTick(() => {
          nav$.value && nav$.value.scrollToActiveTab();
        });
      });
      setPaneInstances(true);
    });
    const getPaneInstanceFromSlot = (vnode, paneInstanceList = []) => {
      Array.from(vnode.children || []).forEach((node) => {
        let type = node.type;
        type = type.name || type;
        if (type === "ElTabPane" && node.component) {
          paneInstanceList.push(node.component);
        } else if (type === vue.Fragment || type === "template") {
          getPaneInstanceFromSlot(node, paneInstanceList);
        }
      });
      return paneInstanceList;
    };
    const setPaneInstances = (isForceUpdate = false) => {
      if (ctx.slots.default) {
        const children = instance.subTree.children;
        const content = Array.from(children).find(({ props: props2 }) => {
          return props2.class === "el-tabs__content";
        });
        if (!content)
          return;
        const paneInstanceList = getPaneInstanceFromSlot(content).map((paneComponent) => {
          return paneStatesMap[paneComponent.uid];
        });
        const panesChanged = !(paneInstanceList.length === panes.value.length && paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid));
        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList;
        }
      } else if (panes.value.length !== 0) {
        panes.value = [];
      }
    };
    const changeCurrentName = (value) => {
      currentName.value = value;
      ctx.emit("input", value);
      ctx.emit("update:modelValue", value);
    };
    const setCurrentName = (value) => {
      if (currentName.value === value)
        return;
      const beforeLeave = props.beforeLeave;
      const before = beforeLeave && beforeLeave(value, currentName.value);
      if (before && shared.isPromise(before)) {
        before.then(() => {
          var _a, _b;
          changeCurrentName(value);
          (_b = (_a = nav$.value).removeFocus) == null ? void 0 : _b.call(_a);
        }, () => {
        });
      } else if (before !== false) {
        changeCurrentName(value);
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName);
      ctx.emit("tab-click", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled)
        return;
      ev.stopPropagation();
      ctx.emit("edit", pane.props.name, "remove");
      ctx.emit("tab-remove", pane.props.name);
    };
    const handleTabAdd = () => {
      ctx.emit("edit", null, "add");
      ctx.emit("tab-add");
    };
    vue.onUpdated(() => {
      setPaneInstances();
    });
    vue.onMounted(() => {
      setPaneInstances();
    });
    return {
      nav$,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes
    };
  },
  render() {
    var _a;
    const {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch
    } = this;
    const newButton = editable || addable ? vue.h("span", {
      class: "el-tabs__new-tab",
      tabindex: "0",
      onClick: handleTabAdd,
      onKeydown: (ev) => {
        if (ev.code === aria.EVENT_CODE.enter) {
          handleTabAdd();
        }
      }
    }, [vue.h("i", { class: "el-icon-plus" })]) : null;
    const header = vue.h("div", {
      class: ["el-tabs__header", `is-${tabPosition}`]
    }, [
      newButton,
      vue.h(script$1, {
        currentName,
        editable,
        type,
        panes,
        stretch,
        ref: "nav$",
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove
      })
    ]);
    const panels = vue.h("div", {
      class: "el-tabs__content"
    }, (_a = this.$slots) == null ? void 0 : _a.default());
    return vue.h("div", {
      class: {
        "el-tabs": true,
        "el-tabs--card": type === "card",
        [`el-tabs--${tabPosition}`]: true,
        "el-tabs--border-card": type === "border-card"
      }
    }, tabPosition !== "bottom" ? [header, panels] : [panels, header]);
  }
});

var script = vue.defineComponent({
  name: "ElTabPane",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },
  setup(props) {
    const index = vue.ref(null);
    const loaded = vue.ref(false);
    const rootTabs = vue.inject("rootTabs");
    const updatePaneState = vue.inject("updatePaneState");
    if (!rootTabs || !updatePaneState) {
      throw new Error(`ElTabPane must use with ElTabs`);
    }
    const isClosable = vue.computed(() => {
      return props.closable || rootTabs.props.closable;
    });
    const active = vue.computed(() => {
      return rootTabs.currentName.value === (props.name || index.value);
    });
    const paneName = vue.computed(() => {
      return props.name || index.value;
    });
    const shouldBeRender = vue.computed(() => {
      return !props.lazy || loaded.value || active.value;
    });
    vue.watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const instance = vue.getCurrentInstance();
    updatePaneState({
      uid: instance.uid,
      instance,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    return {
      index,
      loaded,
      isClosable,
      active,
      paneName,
      shouldBeRender
    };
  }
});

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.shouldBeRender ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    id: `pane-${_ctx.paneName}`,
    class: "el-tab-pane",
    role: "tabpanel",
    "aria-hidden": !_ctx.active,
    "aria-labelledby": `tab-${_ctx.paneName}`
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)), [
    [vue.vShow, _ctx.active]
  ]) : vue.createCommentVNode("v-if", true);
}

script.render = render;
script.__file = "packages/components/tabs/src/tab-pane.vue";

const ElTabs = withInstall.withInstall(Tabs, {
  TabPane: script
});
const ElTabPane = withInstall.withNoopInstall(script);

exports.ElTabPane = ElTabPane;
exports.ElTabs = ElTabs;
exports["default"] = ElTabs;
