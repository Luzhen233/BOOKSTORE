'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('element-plus/lib/utils/with-install');
var vue = require('vue');
var hooks = require('element-plus/lib/hooks');
var virtualList = require('element-plus/lib/components/virtual-list');
var props = require('element-plus/lib/utils/props');
var shared = require('@vue/shared');
var icons = require('@element-plus/icons');
var ElIcon = require('element-plus/lib/components/icon');
var ElCheckbox = require('element-plus/lib/components/checkbox');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ElIcon__default = /*#__PURE__*/_interopDefaultLegacy(ElIcon);
var ElCheckbox__default = /*#__PURE__*/_interopDefaultLegacy(ElCheckbox);

const ROOT_TREE_INJECTION_KEY = Symbol();
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {}
};
var TreeOptionsEnum;
(function(TreeOptionsEnum2) {
  TreeOptionsEnum2["KEY"] = "id";
  TreeOptionsEnum2["LABEL"] = "label";
  TreeOptionsEnum2["CHILDREN"] = "children";
  TreeOptionsEnum2["DISABLED"] = "disabled";
})(TreeOptionsEnum || (TreeOptionsEnum = {}));
var SetOperationEnum;
(function(SetOperationEnum2) {
  SetOperationEnum2["ADD"] = "add";
  SetOperationEnum2["DELETE"] = "delete";
})(SetOperationEnum || (SetOperationEnum = {}));
const treeProps = props.buildProps({
  data: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  emptyText: {
    type: String
  },
  height: {
    type: Number,
    default: 200
  },
  props: {
    type: props.definePropType(Object),
    default: () => props.mutable({
      children: TreeOptionsEnum.CHILDREN,
      label: TreeOptionsEnum.LABEL,
      disabled: TreeOptionsEnum.DISABLED,
      value: TreeOptionsEnum.KEY
    })
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  indent: {
    type: Number,
    default: 16
  },
  icon: {
    type: String
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: {
    type: Boolean,
    default: false
  },
  currentNodeKey: {
    type: props.definePropType([String, Number])
  },
  accordion: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: props.definePropType(Function)
  },
  perfMode: {
    type: Boolean,
    default: true
  }
});
const treeNodeProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    default: () => props.mutable(EMPTY_NODE)
  },
  expanded: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  current: {
    type: Boolean,
    default: false
  },
  hiddenExpandIcon: {
    type: Boolean,
    default: false
  }
});
const treeNodeContentProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    required: true
  }
});
const NODE_CLICK = "node-click";
const NODE_EXPAND = "node-expand";
const NODE_COLLAPSE = "node-collapse";
const CURRENT_CHANGE = "current-change";
const NODE_CHECK = "check";
const NODE_CHECK_CHANGE = "check-change";
const NODE_CONTEXTMENU = "node-contextmenu";
const treeEmits = {
  [NODE_CLICK]: (data, node) => data && node,
  [NODE_EXPAND]: (data, node) => data && node,
  [NODE_COLLAPSE]: (data, node) => data && node,
  [CURRENT_CHANGE]: (data, node) => data && node,
  [NODE_CHECK]: (data, checkedInfo) => data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data, checked) => data && typeof checked === "boolean",
  [NODE_CONTEXTMENU]: (event, data, node) => event && data && node
};
const treeNodeEmits = {
  click: (node) => !!node,
  toggle: (node) => !!node,
  check: (node, checked) => node && typeof checked === "boolean"
};

function useCheck(props, tree) {
  const checkedKeys = vue.ref(new Set());
  const indeterminateKeys = vue.ref(new Set());
  const { emit } = vue.getCurrentInstance();
  vue.watch(() => tree.value, () => {
    return vue.nextTick(() => {
      _setCheckedKeys(props.defaultCheckedKeys);
    });
  }, {
    immediate: true
  });
  const updateCheckedKeys = () => {
    if (!tree.value || !props.showCheckbox || props.checkStrictly) {
      return;
    }
    const { levelTreeNodeMap, maxLevel } = tree.value;
    const checkedKeySet = checkedKeys.value;
    const indeterminateKeySet = new Set();
    for (let level = maxLevel - 1; level >= 1; --level) {
      const nodes = levelTreeNodeMap.get(level);
      if (!nodes)
        continue;
      nodes.forEach((node) => {
        const children = node.children;
        if (children) {
          let allChecked = true;
          let hasChecked = false;
          for (let i = 0; i < children.length; ++i) {
            const childNode = children[i];
            const key = childNode.key;
            if (checkedKeySet.has(key)) {
              hasChecked = true;
            } else if (indeterminateKeySet.has(key)) {
              allChecked = false;
              hasChecked = true;
              break;
            } else {
              allChecked = false;
            }
          }
          if (allChecked) {
            checkedKeySet.add(node.key);
          } else if (hasChecked) {
            indeterminateKeySet.add(node.key);
            checkedKeySet.delete(node.key);
          } else {
            checkedKeySet.delete(node.key);
            indeterminateKeySet.delete(node.key);
          }
        }
      });
    }
    indeterminateKeys.value = indeterminateKeySet;
  };
  const isChecked = (node) => checkedKeys.value.has(node.key);
  const isIndeterminate = (node) => indeterminateKeys.value.has(node.key);
  const toggleCheckbox = (node, isChecked2, nodeClick = true) => {
    const checkedKeySet = checkedKeys.value;
    const toggle = (node2, checked) => {
      checkedKeySet[checked ? SetOperationEnum.ADD : SetOperationEnum.DELETE](node2.key);
      const children = node2.children;
      if (!props.checkStrictly && children) {
        children.forEach((childNode) => {
          if (!childNode.disabled) {
            toggle(childNode, checked);
          }
        });
      }
    };
    toggle(node, isChecked2);
    updateCheckedKeys();
    if (nodeClick) {
      afterNodeCheck(node, isChecked2);
    }
  };
  const afterNodeCheck = (node, checked) => {
    const { checkedNodes, checkedKeys: checkedKeys2 } = getChecked();
    const { halfCheckedNodes, halfCheckedKeys } = getHalfChecked();
    emit(NODE_CHECK, node.data, {
      checkedKeys: checkedKeys2,
      checkedNodes,
      halfCheckedKeys,
      halfCheckedNodes
    });
    emit(NODE_CHECK_CHANGE, node.data, checked);
  };
  function getCheckedKeys(leafOnly = false) {
    return getChecked(leafOnly).checkedKeys;
  }
  function getCheckedNodes(leafOnly = false) {
    return getChecked(leafOnly).checkedNodes;
  }
  function getHalfCheckedKeys() {
    return getHalfChecked().halfCheckedKeys;
  }
  function getHalfCheckedNodes() {
    return getHalfChecked().halfCheckedNodes;
  }
  function getChecked(leafOnly = false) {
    const checkedNodes = [];
    const keys = [];
    if ((tree == null ? void 0 : tree.value) && props.showCheckbox) {
      const { treeNodeMap } = tree.value;
      checkedKeys.value.forEach((key) => {
        const node = treeNodeMap.get(key);
        if (node && (!leafOnly || leafOnly && node.isLeaf)) {
          keys.push(key);
          checkedNodes.push(node.data);
        }
      });
    }
    return {
      checkedKeys: keys,
      checkedNodes
    };
  }
  function getHalfChecked() {
    const halfCheckedNodes = [];
    const halfCheckedKeys = [];
    if ((tree == null ? void 0 : tree.value) && props.showCheckbox) {
      const { treeNodeMap } = tree.value;
      indeterminateKeys.value.forEach((key) => {
        const node = treeNodeMap.get(key);
        if (node) {
          halfCheckedKeys.push(key);
          halfCheckedNodes.push(node.data);
        }
      });
    }
    return {
      halfCheckedNodes,
      halfCheckedKeys
    };
  }
  function setCheckedKeys(keys) {
    checkedKeys.value.clear();
    _setCheckedKeys(keys);
  }
  function setChecked(key, isChecked2) {
    if ((tree == null ? void 0 : tree.value) && props.showCheckbox) {
      const node = tree.value.treeNodeMap.get(key);
      if (node) {
        toggleCheckbox(node, isChecked2, false);
      }
    }
  }
  function _setCheckedKeys(keys) {
    if (tree == null ? void 0 : tree.value) {
      const { treeNodeMap } = tree.value;
      if (props.showCheckbox && treeNodeMap && keys) {
        for (let i = 0; i < keys.length; ++i) {
          const key = keys[i];
          const node = treeNodeMap.get(key);
          if (node && !isChecked(node)) {
            toggleCheckbox(node, true, false);
          }
        }
      }
    }
  }
  return {
    updateCheckedKeys,
    toggleCheckbox,
    isChecked,
    isIndeterminate,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys
  };
}

function useFilter(props, tree) {
  const hiddenNodeKeySet = vue.ref(new Set([]));
  const hiddenExpandIconKeySet = vue.ref(new Set([]));
  const filterable = vue.computed(() => {
    return shared.isFunction(props.filterMethod);
  });
  function doFilter(query) {
    var _a;
    if (!filterable.value) {
      return;
    }
    const expandKeySet = new Set();
    const hiddenExpandIconKeys = hiddenExpandIconKeySet.value;
    const hiddenKeys = hiddenNodeKeySet.value;
    const family = [];
    const nodes = ((_a = tree.value) == null ? void 0 : _a.treeNodes) || [];
    const filter = props.filterMethod;
    hiddenKeys.clear();
    function traverse(nodes2) {
      nodes2.forEach((node) => {
        family.push(node);
        if (filter == null ? void 0 : filter(query, node.data)) {
          family.forEach((member) => {
            expandKeySet.add(member.key);
          });
        } else if (node.isLeaf) {
          hiddenKeys.add(node.key);
        }
        const children = node.children;
        if (children) {
          traverse(children);
        }
        if (!node.isLeaf) {
          if (!expandKeySet.has(node.key)) {
            hiddenKeys.add(node.key);
          } else if (children) {
            let allHidden = true;
            for (let i = 0; i < children.length; ++i) {
              const childNode = children[i];
              if (!hiddenKeys.has(childNode.key)) {
                allHidden = false;
                break;
              }
            }
            if (allHidden) {
              hiddenExpandIconKeys.add(node.key);
            } else {
              hiddenExpandIconKeys.delete(node.key);
            }
          }
        }
        family.pop();
      });
    }
    traverse(nodes);
    return expandKeySet;
  }
  function isForceHiddenExpandIcon(node) {
    return hiddenExpandIconKeySet.value.has(node.key);
  }
  return {
    hiddenExpandIconKeySet,
    hiddenNodeKeySet,
    doFilter,
    isForceHiddenExpandIcon
  };
}

function useTree(props, emit) {
  const expandedKeySet = vue.ref(new Set(props.defaultExpandedKeys));
  const currentKey = vue.ref();
  const tree = vue.shallowRef();
  vue.watch(() => props.currentNodeKey, (key) => {
    currentKey.value = key;
  }, {
    immediate: true
  });
  vue.watch(() => props.data, (data) => {
    setData(data);
  }, {
    immediate: true
  });
  const {
    isIndeterminate,
    isChecked,
    toggleCheckbox,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys
  } = useCheck(props, tree);
  const { doFilter, hiddenNodeKeySet, isForceHiddenExpandIcon } = useFilter(props, tree);
  const valueKey = vue.computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.value) || TreeOptionsEnum.KEY;
  });
  const childrenKey = vue.computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.children) || TreeOptionsEnum.CHILDREN;
  });
  const disabledKey = vue.computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.disabled) || TreeOptionsEnum.DISABLED;
  });
  const labelKey = vue.computed(() => {
    var _a;
    return ((_a = props.props) == null ? void 0 : _a.label) || TreeOptionsEnum.LABEL;
  });
  const flattenTree = vue.computed(() => {
    const expandedKeys = expandedKeySet.value;
    const hiddenKeys = hiddenNodeKeySet.value;
    const flattenNodes = [];
    const nodes = tree.value && tree.value.treeNodes || [];
    function traverse() {
      const stack = [];
      for (let i = nodes.length - 1; i >= 0; --i) {
        stack.push(nodes[i]);
      }
      while (stack.length) {
        const node = stack.pop();
        if (!node)
          continue;
        if (!hiddenKeys.has(node.key)) {
          flattenNodes.push(node);
        }
        if (expandedKeys.has(node.key)) {
          const children = node.children;
          if (children) {
            const length = children.length;
            for (let i = length - 1; i >= 0; --i) {
              stack.push(children[i]);
            }
          }
        }
      }
    }
    traverse();
    return flattenNodes;
  });
  const isNotEmpty = vue.computed(() => {
    return flattenTree.value.length > 0;
  });
  function createTree(data) {
    const treeNodeMap = new Map();
    const levelTreeNodeMap = new Map();
    let maxLevel = 1;
    function traverse(nodes, level = 1, parent = void 0) {
      var _a;
      const siblings = [];
      for (let index = 0; index < nodes.length; ++index) {
        const rawNode = nodes[index];
        const value = getKey(rawNode);
        const node = {
          level,
          key: value,
          data: rawNode
        };
        node.label = getLabel(rawNode);
        node.parent = parent;
        const children = getChildren(rawNode);
        node.disabled = getDisabled(rawNode);
        node.isLeaf = !children || children.length === 0;
        if (children && children.length) {
          node.children = traverse(children, level + 1, node);
        }
        siblings.push(node);
        treeNodeMap.set(value, node);
        if (!levelTreeNodeMap.has(level)) {
          levelTreeNodeMap.set(level, []);
        }
        (_a = levelTreeNodeMap.get(level)) == null ? void 0 : _a.push(node);
      }
      if (level > maxLevel) {
        maxLevel = level;
      }
      return siblings;
    }
    const treeNodes = traverse(data);
    return {
      treeNodeMap,
      levelTreeNodeMap,
      maxLevel,
      treeNodes
    };
  }
  function filter(query) {
    const keys = doFilter(query);
    if (keys) {
      expandedKeySet.value = keys;
    }
  }
  function getChildren(node) {
    return node[childrenKey.value];
  }
  function getKey(node) {
    if (!node) {
      return "";
    }
    return node[valueKey.value];
  }
  function getDisabled(node) {
    return node[disabledKey.value];
  }
  function getLabel(node) {
    return node[labelKey.value];
  }
  function toggleExpand(node) {
    const expandedKeys = expandedKeySet.value;
    if (expandedKeys.has(node.key)) {
      collapse(node);
    } else {
      expand(node);
    }
  }
  function handleNodeClick(node) {
    emit(NODE_CLICK, node.data, node);
    handleCurrentChange(node);
    if (props.expandOnClickNode) {
      toggleExpand(node);
    }
    if (props.showCheckbox && props.checkOnClickNode && !node.disabled) {
      toggleCheckbox(node, !isChecked(node), true);
    }
  }
  function handleCurrentChange(node) {
    if (!isCurrent(node)) {
      currentKey.value = node.key;
      emit(CURRENT_CHANGE, node.data, node);
    }
  }
  function handleNodeCheck(node, checked) {
    toggleCheckbox(node, checked);
  }
  function expand(node) {
    const keySet = expandedKeySet.value;
    if ((tree == null ? void 0 : tree.value) && props.accordion) {
      const { treeNodeMap } = tree.value;
      keySet.forEach((key) => {
        const node2 = treeNodeMap.get(key);
        if (node2 && node2.level === node2.level) {
          keySet.delete(key);
        }
      });
    }
    keySet.add(node.key);
    emit(NODE_EXPAND, node.data, node);
  }
  function collapse(node) {
    expandedKeySet.value.delete(node.key);
    emit(NODE_COLLAPSE, node.data, node);
  }
  function isExpanded(node) {
    return expandedKeySet.value.has(node.key);
  }
  function isDisabled(node) {
    return !!node.disabled;
  }
  function isCurrent(node) {
    const current = currentKey.value;
    return !!current && current === node.key;
  }
  function getCurrentNode() {
    var _a, _b;
    if (!currentKey.value)
      return void 0;
    return (_b = (_a = tree == null ? void 0 : tree.value) == null ? void 0 : _a.treeNodeMap.get(currentKey.value)) == null ? void 0 : _b.data;
  }
  function getCurrentKey() {
    return currentKey.value;
  }
  function setCurrentKey(key) {
    currentKey.value = key;
  }
  function setData(data) {
    vue.nextTick(() => tree.value = createTree(data));
  }
  return {
    tree,
    flattenTree,
    isNotEmpty,
    getKey,
    getChildren,
    toggleExpand,
    toggleCheckbox,
    isExpanded,
    isChecked,
    isIndeterminate,
    isDisabled,
    isCurrent,
    isForceHiddenExpandIcon,
    handleNodeClick,
    handleNodeCheck,
    getCurrentNode,
    getCurrentKey,
    setCurrentKey,
    getCheckedKeys,
    getCheckedNodes,
    getHalfCheckedKeys,
    getHalfCheckedNodes,
    setChecked,
    setCheckedKeys,
    filter,
    setData
  };
}

var ElNodeContent = vue.defineComponent({
  name: "ElTreeNodeContent",
  props: treeNodeContentProps,
  setup(props) {
    const tree = vue.inject(ROOT_TREE_INJECTION_KEY);
    return () => {
      const node = props.node;
      const { data } = node;
      return (tree == null ? void 0 : tree.ctx.slots.default) ? tree.ctx.slots.default({ node, data }) : vue.h("span", { class: "el-tree-node__label" }, [node == null ? void 0 : node.label]);
    };
  }
});

const DEFAULT_ICON = "caret-right";
var script$1 = vue.defineComponent({
  name: "ElTreeNode",
  components: {
    ElIcon: ElIcon__default["default"],
    CaretRight: icons.CaretRight,
    ElCheckbox: ElCheckbox__default["default"],
    ElNodeContent
  },
  props: treeNodeProps,
  emits: treeNodeEmits,
  setup(props, { emit }) {
    const tree = vue.inject(ROOT_TREE_INJECTION_KEY);
    const indent = vue.computed(() => {
      return (tree == null ? void 0 : tree.props.indent) || 16;
    });
    const icon = vue.computed(() => {
      return (tree == null ? void 0 : tree.props.icon) ? tree.props.icon : DEFAULT_ICON;
    });
    const handleClick = () => {
      emit("click", props.node);
    };
    const handleExpandIconClick = () => {
      emit("toggle", props.node);
    };
    const handleCheckChange = (value) => {
      emit("check", props.node, value);
    };
    const handleContextMenu = (event) => {
      var _a, _b, _c, _d;
      if ((_c = (_b = (_a = tree == null ? void 0 : tree.instance) == null ? void 0 : _a.vnode) == null ? void 0 : _b.props) == null ? void 0 : _c["onNodeContextmenu"]) {
        event.stopPropagation();
        event.preventDefault();
      }
      tree == null ? void 0 : tree.ctx.emit(NODE_CONTEXTMENU, event, (_d = props.node) == null ? void 0 : _d.data, props.node);
    };
    return {
      indent,
      icon,
      handleClick,
      handleExpandIconClick,
      handleCheckChange,
      handleContextMenu
    };
  }
});

const _hoisted_1$1 = ["aria-expanded", "aria-disabled", "aria-checked", "data-key"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c;
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_checkbox = vue.resolveComponent("el-checkbox");
  const _component_el_node_content = vue.resolveComponent("el-node-content");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "node$",
    class: vue.normalizeClass(["el-tree-node", {
      "is-expanded": _ctx.expanded,
      "is-current": _ctx.current,
      "is-focusable": !_ctx.disabled,
      "is-checked": !_ctx.disabled && _ctx.checked
    }]),
    role: "treeitem",
    tabindex: "-1",
    "aria-expanded": _ctx.expanded,
    "aria-disabled": _ctx.disabled,
    "aria-checked": _ctx.checked,
    "data-key": (_a = _ctx.node) == null ? void 0 : _a.key,
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.handleClick && _ctx.handleClick(...args), ["stop"])),
    onContextmenu: _cache[2] || (_cache[2] = (...args) => _ctx.handleContextMenu && _ctx.handleContextMenu(...args))
  }, [
    vue.createElementVNode("div", {
      class: "el-tree-node__content",
      style: vue.normalizeStyle({ paddingLeft: `${(_ctx.node.level - 1) * _ctx.indent}px` })
    }, [
      vue.createVNode(_component_el_icon, {
        class: vue.normalizeClass([
          {
            "is-leaf": (_b = _ctx.node) == null ? void 0 : _b.isLeaf,
            "is-hidden": _ctx.hiddenExpandIcon,
            expanded: !((_c = _ctx.node) == null ? void 0 : _c.isLeaf) && _ctx.expanded
          },
          "el-tree-node__expand-icon"
        ]),
        onClick: vue.withModifiers(_ctx.handleExpandIconClick, ["stop"])
      }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.icon)))
        ]),
        _: 1
      }, 8, ["class", "onClick"]),
      _ctx.showCheckbox ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
        key: 0,
        "model-value": _ctx.checked,
        indeterminate: _ctx.indeterminate,
        disabled: _ctx.disabled,
        onChange: _ctx.handleCheckChange,
        onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
        }, ["stop"]))
      }, null, 8, ["model-value", "indeterminate", "disabled", "onChange"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_el_node_content, { node: _ctx.node }, null, 8, ["node"])
    ], 4)
  ], 42, _hoisted_1$1);
}

script$1.render = render$1;
script$1.__file = "packages/components/tree-v2/src/tree-node.vue";

var script = vue.defineComponent({
  name: "ElTreeV2",
  components: {
    ElTreeNode: script$1,
    FixedSizeList: virtualList.FixedSizeList
  },
  props: treeProps,
  emits: treeEmits,
  setup(props, ctx) {
    vue.provide(ROOT_TREE_INJECTION_KEY, {
      ctx,
      props,
      instance: vue.getCurrentInstance()
    });
    const { t } = hooks.useLocaleInject();
    const {
      flattenTree,
      isNotEmpty,
      toggleExpand,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      toggleCheckbox,
      handleNodeClick,
      handleNodeCheck,
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData
    } = useTree(props, ctx.emit);
    ctx.expose({
      getCurrentNode,
      getCurrentKey,
      setCurrentKey,
      getCheckedKeys,
      getCheckedNodes,
      getHalfCheckedKeys,
      getHalfCheckedNodes,
      setChecked,
      setCheckedKeys,
      filter,
      setData
    });
    return {
      t,
      flattenTree,
      itemSize: 26,
      isNotEmpty,
      toggleExpand,
      toggleCheckbox,
      isExpanded,
      isIndeterminate,
      isChecked,
      isDisabled,
      isCurrent,
      isForceHiddenExpandIcon,
      handleNodeClick,
      handleNodeCheck
    };
  }
});

const _hoisted_1 = {
  key: 1,
  class: "el-tree__empty-block"
};
const _hoisted_2 = { class: "el-tree__empty-text" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tree_node = vue.resolveComponent("el-tree-node");
  const _component_fixed_size_list = vue.resolveComponent("fixed-size-list");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-tree", {
      "el-tree--highlight-current": _ctx.highlightCurrent
    }]),
    role: "tree"
  }, [
    _ctx.isNotEmpty ? (vue.openBlock(), vue.createBlock(_component_fixed_size_list, {
      key: 0,
      "class-name": "el-tree-virtual-list",
      data: _ctx.flattenTree,
      total: _ctx.flattenTree.length,
      height: _ctx.height,
      "item-size": _ctx.itemSize,
      "perf-mode": _ctx.perfMode
    }, {
      default: vue.withCtx(({ data, index, style }) => [
        vue.createVNode(_component_el_tree_node, {
          key: data[index].key,
          style: vue.normalizeStyle(style),
          node: data[index],
          expanded: _ctx.isExpanded(data[index]),
          "show-checkbox": _ctx.showCheckbox,
          checked: _ctx.isChecked(data[index]),
          indeterminate: _ctx.isIndeterminate(data[index]),
          disabled: _ctx.isDisabled(data[index]),
          current: _ctx.isCurrent(data[index]),
          "hidden-expand-icon": _ctx.isForceHiddenExpandIcon(data[index]),
          onClick: _ctx.handleNodeClick,
          onToggle: _ctx.toggleExpand,
          onCheck: _ctx.handleNodeCheck
        }, null, 8, ["style", "node", "expanded", "show-checkbox", "checked", "indeterminate", "disabled", "current", "hidden-expand-icon", "onClick", "onToggle", "onCheck"])
      ]),
      _: 1
    }, 8, ["data", "total", "height", "item-size", "perf-mode"])) : (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
      vue.createElementVNode("span", _hoisted_2, vue.toDisplayString(_ctx.emptyText || _ctx.t("el.tree.emptyText")), 1)
    ]))
  ], 2);
}

script.render = render;
script.__file = "packages/components/tree-v2/src/tree.vue";

const ElTreeV2 = withInstall.withInstall(script);

exports.ElTreeV2 = ElTreeV2;
exports["default"] = ElTreeV2;
