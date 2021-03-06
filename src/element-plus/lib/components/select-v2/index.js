'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var directives = require('element-plus/lib/directives');
var ElPopper = require('element-plus/lib/components/popper');
var ElTag = require('element-plus/lib/components/tag');
var constants = require('element-plus/lib/utils/constants');
var util = require('element-plus/lib/utils/util');
var virtualList = require('element-plus/lib/components/virtual-list');
var validators = require('element-plus/lib/utils/validators');
var shared = require('@vue/shared');
var isEqual = require('lodash/isEqual');
var lodashDebounce = require('lodash/debounce');
var tokens = require('element-plus/lib/tokens');
var hooks = require('element-plus/lib/hooks');
var resizeEvent = require('element-plus/lib/utils/resize-event');
var isDef = require('element-plus/lib/utils/isDef');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ElPopper__default = /*#__PURE__*/_interopDefaultLegacy(ElPopper);
var ElTag__default = /*#__PURE__*/_interopDefaultLegacy(ElTag);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);
var lodashDebounce__default = /*#__PURE__*/_interopDefaultLegacy(lodashDebounce);

var script$3 = vue.defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    style: Object,
    height: Number
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.item.isTitle ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: "el-select-group__title",
    style: vue.normalizeStyle([_ctx.style, { lineHeight: `${_ctx.height}px` }])
  }, vue.toDisplayString(_ctx.item.label), 5)) : (vue.openBlock(), vue.createElementBlock("div", {
    key: 1,
    class: "el-select-group__split",
    style: vue.normalizeStyle(_ctx.style)
  }, [
    vue.createElementVNode("span", {
      class: "el-select-group__split-dash",
      style: vue.normalizeStyle({ top: `${_ctx.height / 2}px` })
    }, null, 4)
  ], 4));
}

script$3.render = render$2;
script$3.__file = "packages/components/select-v2/src/group-item.vue";

function useOption(props, { emit }) {
  return {
    hoverItem: () => {
      if (!props.disabled) {
        emit("hover", props.index);
      }
    },
    selectOptionClick: () => {
      if (!props.disabled) {
        emit("select", props.item, props.index);
      }
    }
  };
}

const SelectProps = {
  allowCreate: Boolean,
  autocomplete: {
    type: String,
    default: "none"
  },
  automaticDropdown: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: String,
    default: "el-icon-circle-close"
  },
  collapseTags: Boolean,
  defaultFirstOption: Boolean,
  disabled: Boolean,
  estimatedOptionHeight: {
    type: Number,
    default: void 0
  },
  filterable: Boolean,
  filterMethod: Function,
  height: {
    type: Number,
    default: 170
  },
  itemHeight: {
    type: Number,
    default: 34
  },
  id: String,
  loading: Boolean,
  loadingText: String,
  label: String,
  modelValue: [Array, String, Number, Boolean, Object],
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  name: String,
  noDataText: String,
  noMatchText: String,
  remoteMethod: Function,
  reserveKeyword: Boolean,
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String
  },
  popperAppendToBody: {
    type: Boolean,
    default: true
  },
  popperClass: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: Object,
    default: () => ({})
  },
  remote: Boolean,
  size: {
    type: String,
    validator: validators.isValidComponentSize
  },
  valueKey: {
    type: String,
    default: "value"
  }
};
const OptionProps = {
  data: Array,
  disabled: Boolean,
  hovering: Boolean,
  item: Object,
  index: Number,
  style: Object,
  selected: Boolean,
  created: Boolean
};

var script$2 = vue.defineComponent({
  props: OptionProps,
  emits: ["select", "hover"],
  setup(props, { emit }) {
    const { hoverItem, selectOptionClick } = useOption(props, { emit });
    return {
      hoverItem,
      selectOptionClick
    };
  }
});

const _hoisted_1$1 = ["aria-selected"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("li", {
    "aria-selected": _ctx.selected,
    style: vue.normalizeStyle(_ctx.style),
    class: vue.normalizeClass({
      "el-select-dropdown__option-item": true,
      "is-selected": _ctx.selected,
      "is-disabled": _ctx.disabled,
      "is-created": _ctx.created,
      hover: _ctx.hovering
    }),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    vue.renderSlot(_ctx.$slots, "default", {
      item: _ctx.item,
      index: _ctx.index,
      disabled: _ctx.disabled
    }, () => [
      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.item.label), 1)
    ])
  ], 46, _hoisted_1$1);
}

script$2.render = render$1;
script$2.__file = "packages/components/select-v2/src/option-item.vue";

const selectV2InjectionKey = "ElSelectV2Injection";

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var script$1 = vue.defineComponent({
  name: "ElSelectDropdown",
  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number
  },
  setup(props) {
    const select = vue.inject(selectV2InjectionKey);
    const cachedHeights = vue.ref([]);
    const listRef = vue.ref(null);
    const isSized = vue.computed(() => util.isUndefined(select.props.estimatedOptionHeight));
    const listProps = vue.computed(() => {
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight
        };
      }
      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx) => cachedHeights.value[idx]
      };
    });
    const contains = (arr = [], target) => {
      const {
        props: { valueKey }
      } = select;
      if (!util.isObject(target)) {
        return arr.includes(target);
      }
      return arr && arr.some((item) => {
        return util.getValueByPath(item, valueKey) === util.getValueByPath(target, valueKey);
      });
    };
    const isEqual = (selected, target) => {
      if (!util.isObject(target)) {
        return selected === target;
      } else {
        const { valueKey } = select.props;
        return util.getValueByPath(selected, valueKey) === util.getValueByPath(target, valueKey);
      }
    };
    const isItemSelected = (modelValue, target) => {
      if (select.props.multiple) {
        return contains(modelValue, target.value);
      }
      return isEqual(modelValue, target.value);
    };
    const isItemDisabled = (modelValue, selected) => {
      const { disabled, multiple, multipleLimit } = select.props;
      return disabled || !selected && (multiple ? multipleLimit > 0 && modelValue.length >= multipleLimit : false);
    };
    const isItemHovering = (target) => props.hoveringIndex === target;
    const scrollToItem = (index) => {
      const list = listRef.value;
      if (list) {
        list.scrollToItem(index);
      }
    };
    const resetScrollTop = () => {
      const list = listRef.value;
      if (list) {
        list.resetScrollTop();
      }
    };
    return {
      select,
      listProps,
      listRef,
      isSized,
      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    };
  },
  render(_ctx, _cache) {
    var _a;
    const {
      $slots,
      data,
      listProps,
      select,
      isSized,
      width,
      isItemDisabled,
      isItemHovering,
      isItemSelected
    } = _ctx;
    const Comp = isSized ? virtualList.FixedSizeList : virtualList.DynamicSizeList;
    const {
      props: selectProps,
      onSelect,
      onHover,
      onKeyboardNavigate,
      onKeyboardSelect
    } = select;
    const { height, modelValue, multiple } = selectProps;
    if (data.length === 0) {
      return vue.h("div", {
        class: "el-select-dropdown",
        style: {
          width: `${width}px`
        }
      }, (_a = $slots.empty) == null ? void 0 : _a.call($slots));
    }
    const ListItem = vue.withCtx((scoped) => {
      const { index, data: data2 } = scoped;
      const item = data2[index];
      if (data2[index].type === "Group") {
        return vue.h(script$3, {
          item,
          style: scoped.style,
          height: isSized ? listProps.itemSize : listProps.estimatedSize
        });
      }
      const selected = isItemSelected(modelValue, item);
      const itemDisabled = isItemDisabled(modelValue, selected);
      return vue.h(script$2, __spreadProps$2(__spreadValues$2({}, scoped), {
        selected,
        disabled: item.disabled || itemDisabled,
        created: !!item.created,
        hovering: isItemHovering(index),
        item,
        onSelect,
        onHover
      }), {
        default: vue.withCtx((props) => {
          return vue.renderSlot($slots, "default", props, () => [
            vue.h("span", item.label)
          ]);
        })
      });
    });
    const List = vue.h(Comp, __spreadValues$2({
      ref: "listRef",
      className: "el-select-dropdown__list",
      data,
      height,
      width,
      total: data.length,
      onKeydown: [
        _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
        _cache[2] || (_cache[2] = vue.withKeys(vue.withModifiers(() => onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
        _cache[3] || (_cache[3] = vue.withKeys(vue.withModifiers(onKeyboardSelect, ["stop", "prevent"]), ["enter"])),
        _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(() => select.expanded = false, ["stop", "prevent"]), ["esc"])),
        _cache[5] || (_cache[5] = vue.withKeys(() => select.expanded = false, ["tab"]))
      ]
    }, listProps), {
      default: ListItem
    });
    return vue.h("div", {
      class: {
        "is-multiple": multiple,
        "el-select-dropdown": true
      }
    }, [List]);
  }
});

script$1.__file = "packages/components/select-v2/src/select-dropdown.vue";

function useAllowCreate(props, states) {
  const createOptionCount = vue.ref(0);
  const cachedSelectedOption = vue.ref(null);
  const enableAllowCreateMode = vue.computed(() => {
    return props.allowCreate && props.filterable;
  });
  function hasExistingOption(query) {
    const hasValue = (option) => option.value === query;
    return props.options && props.options.some(hasValue) || states.createdOptions.some(hasValue);
  }
  function selectNewOption(option) {
    if (!enableAllowCreateMode.value) {
      return;
    }
    if (props.multiple && option.created) {
      createOptionCount.value++;
    } else {
      cachedSelectedOption.value = option;
    }
  }
  function createNewOption(query) {
    if (enableAllowCreateMode.value) {
      if (query && query.length > 0 && !hasExistingOption(query)) {
        const newOption = {
          value: query,
          label: query,
          created: true,
          disabled: false
        };
        if (states.createdOptions.length >= createOptionCount.value) {
          states.createdOptions[createOptionCount.value] = newOption;
        } else {
          states.createdOptions.push(newOption);
        }
      } else {
        if (props.multiple) {
          states.createdOptions.length = createOptionCount.value;
        } else {
          const selectedOption = cachedSelectedOption.value;
          states.createdOptions.length = 0;
          if (selectedOption && selectedOption.created) {
            states.createdOptions.push(selectedOption);
          }
        }
      }
    }
  }
  function removeNewOption(option) {
    if (!enableAllowCreateMode.value || !option || !option.created) {
      return;
    }
    const idx = states.createdOptions.findIndex((it) => it.value === option.value);
    if (~idx) {
      states.createdOptions.splice(idx, 1);
      createOptionCount.value--;
    }
  }
  function clearAllNewOption() {
    if (enableAllowCreateMode.value) {
      states.createdOptions.length = 0;
      createOptionCount.value = 0;
    }
  }
  return {
    createNewOption,
    removeNewOption,
    selectNewOption,
    clearAllNewOption
  };
}

const flattenOptions = (options) => {
  const flattened = [];
  options.map((option) => {
    if (shared.isArray(option.options)) {
      flattened.push({
        label: option.label,
        isTitle: true,
        type: "Group"
      });
      option.options.forEach((o) => {
        flattened.push(o);
      });
      flattened.push({
        type: "Group"
      });
    } else {
      flattened.push(option);
    }
  });
  return flattened;
};

function useInput(handleInput) {
  const isComposing = vue.ref(false);
  const handleCompositionStart = () => {
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    const text = event.target.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isDef.isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    if (isComposing.value) {
      isComposing.value = false;
      if (shared.isFunction(handleInput)) {
        handleInput(event);
      }
    }
  };
  return {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const DEFAULT_INPUT_PLACEHOLDER = "";
const MINIMUM_INPUT_WIDTH = 11;
const TAG_BASE_WIDTH = {
  small: 42,
  mini: 33
};
const useSelect = (props, emit) => {
  const { t } = hooks.useLocaleInject();
  const elForm = vue.inject(tokens.elFormKey, {});
  const elFormItem = vue.inject(tokens.elFormItemKey, {});
  const $ELEMENT = util.useGlobalConfig();
  const states = vue.reactive({
    inputValue: DEFAULT_INPUT_PLACEHOLDER,
    displayInputValue: DEFAULT_INPUT_PLACEHOLDER,
    calculatedWidth: 0,
    cachedPlaceholder: "",
    cachedOptions: [],
    createdOptions: [],
    createdLabel: "",
    createdSelected: false,
    currentPlaceholder: "",
    hoveringIndex: -1,
    comboBoxHovering: false,
    isOnComposition: false,
    isSilentBlur: false,
    isComposing: false,
    inputLength: 20,
    selectWidth: 200,
    initialInputHeight: 0,
    previousQuery: null,
    previousValue: "",
    query: "",
    selectedLabel: "",
    softFocus: false,
    tagInMultiLine: false
  });
  const selectedIndex = vue.ref(-1);
  const popperSize = vue.ref(-1);
  const controlRef = vue.ref(null);
  const inputRef = vue.ref(null);
  const menuRef = vue.ref(null);
  const popper = vue.ref(null);
  const selectRef = vue.ref(null);
  const selectionRef = vue.ref(null);
  const calculatorRef = vue.ref(null);
  const expanded = vue.ref(false);
  const selectDisabled = vue.computed(() => props.disabled || elForm.disabled);
  const popupHeight = vue.computed(() => {
    const totalHeight = filteredOptions.value.length * 34;
    return totalHeight > props.height ? props.height : totalHeight;
  });
  const showClearBtn = vue.computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.comboBoxHovering && hasValue;
    return criteria;
  });
  const iconClass = vue.computed(() => props.remote && props.filterable ? "" : expanded.value ? "arrow-up is-reverse" : "arrow-up");
  const debounce = vue.computed(() => props.remote ? 300 : 0);
  const emptyText = vue.computed(() => {
    const options = filteredOptions.value;
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.inputValue === "" && options.length === 0)
        return false;
      if (props.filterable && states.inputValue && options.length > 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (options.length === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptions = vue.computed(() => {
    const isValidOption = (o) => {
      const query = states.inputValue;
      const containsQueryString = query ? o.label.includes(query) : true;
      return containsQueryString;
    };
    if (props.loading) {
      return [];
    }
    return flattenOptions(props.options.concat(states.createdOptions).map((v) => {
      if (shared.isArray(v.options)) {
        const filtered = v.options.filter(isValidOption);
        if (filtered.length > 0) {
          return __spreadProps$1(__spreadValues$1({}, v), {
            options: filtered
          });
        }
      } else {
        if (props.remote || isValidOption(v)) {
          return v;
        }
      }
      return null;
    }).filter((v) => v !== null));
  });
  const optionsAllDisabled = vue.computed(() => filteredOptions.value.every((option) => option.disabled));
  const selectSize = vue.computed(() => props.size || elFormItem.size || $ELEMENT.size);
  const collapseTagSize = vue.computed(() => ["small", "mini"].indexOf(selectSize.value) > -1 ? "mini" : "small");
  const tagMaxWidth = vue.computed(() => {
    const select = selectionRef.value;
    const size = collapseTagSize.value;
    const paddingLeft = select ? parseInt(getComputedStyle(select).paddingLeft) : 0;
    const paddingRight = select ? parseInt(getComputedStyle(select).paddingRight) : 0;
    return states.selectWidth - paddingRight - paddingLeft - TAG_BASE_WIDTH[size];
  });
  const calculatePopperSize = () => {
    var _a, _b, _c;
    popperSize.value = ((_c = (_b = (_a = selectRef.value) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.width) || 200;
  };
  const inputWrapperStyle = vue.computed(() => {
    return {
      width: `${states.calculatedWidth === 0 ? MINIMUM_INPUT_WIDTH : Math.ceil(states.calculatedWidth) + MINIMUM_INPUT_WIDTH}px`
    };
  });
  const shouldShowPlaceholder = vue.computed(() => {
    if (shared.isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.displayInputValue;
    }
    return props.filterable ? states.displayInputValue.length === 0 : true;
  });
  const currentPlaceholder = vue.computed(() => {
    const _placeholder = props.placeholder || t("el.select.placeholder");
    return props.multiple ? _placeholder : states.selectedLabel || _placeholder;
  });
  const popperRef = vue.computed(() => {
    var _a;
    return (_a = popper.value) == null ? void 0 : _a.popperRef;
  });
  const indexRef = vue.computed(() => {
    if (props.multiple) {
      const len = props.modelValue.length;
      if (props.modelValue.length > 0) {
        return filteredOptions.value.findIndex((o) => o.value === props.modelValue[len - 1]);
      }
    } else {
      if (props.modelValue) {
        return filteredOptions.value.findIndex((o) => o.value === props.modelValue);
      }
    }
    return -1;
  });
  const dropdownMenuVisible = vue.computed(() => {
    return expanded.value && emptyText.value !== false;
  });
  const {
    createNewOption,
    removeNewOption,
    selectNewOption,
    clearAllNewOption
  } = useAllowCreate(props, states);
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useInput((e) => onInput(e));
  const focusAndUpdatePopup = () => {
    var _a, _b, _c, _d;
    (_b = (_a = inputRef.value).focus) == null ? void 0 : _b.call(_a);
    (_d = (_c = popper.value).update) == null ? void 0 : _d.call(_c);
  };
  const toggleMenu = () => {
    if (props.automaticDropdown)
      return;
    if (!selectDisabled.value) {
      if (states.isComposing)
        states.softFocus = true;
      return vue.nextTick(() => {
        var _a, _b;
        expanded.value = !expanded.value;
        (_b = (_a = inputRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
      });
    }
  };
  const onInputChange = () => {
    if (props.filterable && states.inputValue !== states.selectedLabel) {
      states.query = states.selectedLabel;
    }
    handleQueryChange(states.inputValue);
    return vue.nextTick(() => {
      createNewOption(states.inputValue);
    });
  };
  const debouncedOnInputChange = lodashDebounce__default["default"](onInputChange, debounce.value);
  const handleQueryChange = (val) => {
    if (states.previousQuery === val) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && shared.isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && shared.isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
  };
  const emitChange = (val) => {
    if (!isEqual__default["default"](props.modelValue, val)) {
      emit(constants.CHANGE_EVENT, val);
    }
  };
  const update = (val) => {
    emit(constants.UPDATE_MODEL_EVENT, val);
    emitChange(val);
    states.previousValue = val.toString();
  };
  const getValueIndex = (arr = [], value) => {
    if (!shared.isObject(value)) {
      return arr.indexOf(value);
    }
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (util.getValueByPath(item, valueKey) === util.getValueByPath(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const getValueKey = (item) => {
    return shared.isObject(item) ? util.getValueByPath(item, props.valueKey) : item;
  };
  const getLabel = (item) => {
    return shared.isObject(item) ? item.label : item;
  };
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable) {
      return;
    }
    return vue.nextTick(() => {
      var _a, _b;
      if (!inputRef.value)
        return;
      const selection = selectionRef.value;
      selectRef.value.height = selection.offsetHeight;
      if (expanded.value && emptyText.value !== false) {
        (_b = (_a = popper.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    calculatePopperSize();
    (_b = (_a = popper.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      return resetInputHeight();
    }
  };
  const resetInputWidth = () => {
    const select = selectionRef.value;
    if (select) {
      states.selectWidth = select.getBoundingClientRect().width;
    }
  };
  const onSelect = (option, idx, byClick = true) => {
    var _a, _b;
    if (props.multiple) {
      let selectedOptions = props.modelValue.slice();
      const index = getValueIndex(selectedOptions, option.value);
      if (index > -1) {
        selectedOptions = [
          ...selectedOptions.slice(0, index),
          ...selectedOptions.slice(index + 1)
        ];
        states.cachedOptions.splice(index, 1);
        removeNewOption(option);
      } else if (props.multipleLimit <= 0 || selectedOptions.length < props.multipleLimit) {
        selectedOptions = [...selectedOptions, option.value];
        states.cachedOptions.push(option);
        selectNewOption(option);
        updateHoveringIndex(idx);
      }
      update(selectedOptions);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable) {
        (_b = (_a = inputRef.value).focus) == null ? void 0 : _b.call(_a);
        onUpdateInputValue("");
      }
      if (props.filterable) {
        states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
      }
      resetInputHeight();
      setSoftFocus();
    } else {
      selectedIndex.value = idx;
      states.selectedLabel = option.label;
      update(option.value);
      expanded.value = false;
      states.isComposing = false;
      states.isSilentBlur = byClick;
      selectNewOption(option);
      if (!option.created) {
        clearAllNewOption();
      }
      updateHoveringIndex(idx);
    }
  };
  const deleteTag = (event, tag) => {
    const index = props.modelValue.indexOf(tag.value);
    if (index > -1 && !selectDisabled.value) {
      const value = [
        ...props.modelValue.slice(0, index),
        ...props.modelValue.slice(index + 1)
      ];
      states.cachedOptions.splice(index, 1);
      update(value);
      emit("remove-tag", tag.value);
      states.softFocus = true;
      removeNewOption(tag);
      return vue.nextTick(focusAndUpdatePopup);
    }
    event.stopPropagation();
  };
  const handleFocus = (event) => {
    const focused = states.isComposing;
    states.isComposing = true;
    if (!states.softFocus) {
      if (!focused)
        emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const handleBlur = () => {
    states.softFocus = false;
    return vue.nextTick(() => {
      var _a, _b;
      (_b = (_a = inputRef.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
      if (calculatorRef.value) {
        states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
      }
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        if (states.isComposing) {
          emit("blur");
        }
      }
      states.isComposing = false;
    });
  };
  const handleEsc = () => {
    if (states.displayInputValue.length > 0) {
      onUpdateInputValue("");
    } else {
      expanded.value = false;
    }
  };
  const handleDel = (e) => {
    if (states.displayInputValue.length === 0) {
      e.preventDefault();
      const selected = props.modelValue.slice();
      selected.pop();
      removeNewOption(states.cachedOptions.pop());
      update(selected);
    }
  };
  const handleClear = () => {
    let emptyValue;
    if (shared.isArray(props.modelValue)) {
      emptyValue = [];
    } else {
      emptyValue = "";
    }
    states.softFocus = true;
    if (props.multiple) {
      states.cachedOptions = [];
    } else {
      states.selectedLabel = "";
    }
    expanded.value = false;
    update(emptyValue);
    emit("clear");
    clearAllNewOption();
    return vue.nextTick(focusAndUpdatePopup);
  };
  const onUpdateInputValue = (val) => {
    states.displayInputValue = val;
    states.inputValue = val;
  };
  const onKeyboardNavigate = (direction, hoveringIndex = void 0) => {
    const options = filteredOptions.value;
    if (!["forward", "backward"].includes(direction) || selectDisabled.value || options.length <= 0 || optionsAllDisabled.value) {
      return;
    }
    if (!expanded.value) {
      return toggleMenu();
    }
    if (hoveringIndex === void 0) {
      hoveringIndex = states.hoveringIndex;
    }
    let newIndex = -1;
    if (direction === "forward") {
      newIndex = hoveringIndex + 1;
      if (newIndex >= options.length) {
        newIndex = 0;
      }
    } else if (direction === "backward") {
      newIndex = hoveringIndex - 1;
      if (newIndex < 0) {
        newIndex = options.length - 1;
      }
    }
    const option = options[newIndex];
    if (option.disabled || option.type === "Group") {
      return onKeyboardNavigate(direction, newIndex);
    } else {
      updateHoveringIndex(newIndex);
      scrollToItem(newIndex);
    }
  };
  const onKeyboardSelect = () => {
    if (!expanded.value) {
      return toggleMenu();
    } else if (~states.hoveringIndex) {
      onSelect(filteredOptions.value[states.hoveringIndex], states.hoveringIndex, false);
    }
  };
  const updateHoveringIndex = (idx) => {
    states.hoveringIndex = idx;
  };
  const resetHoveringIndex = () => {
    states.hoveringIndex = -1;
  };
  const setSoftFocus = () => {
    var _a;
    const _input = inputRef.value;
    if (_input) {
      (_a = _input.focus) == null ? void 0 : _a.call(_input);
    }
  };
  const onInput = (event) => {
    const value = event.target.value;
    onUpdateInputValue(value);
    if (states.displayInputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
    if (props.multiple) {
      resetInputHeight();
    }
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const handleClickOutside = () => {
    expanded.value = false;
    return handleBlur();
  };
  const handleMenuEnter = () => {
    states.inputValue = states.displayInputValue;
    return vue.nextTick(() => {
      if (~indexRef.value) {
        updateHoveringIndex(indexRef.value);
        scrollToItem(states.hoveringIndex);
      }
    });
  };
  const scrollToItem = (index) => {
    menuRef.value.scrollToItem(index);
  };
  const initStates = () => {
    resetHoveringIndex();
    if (props.multiple) {
      if (props.modelValue.length > 0) {
        let initHovering = false;
        states.cachedOptions.length = 0;
        props.modelValue.map((selected) => {
          const itemIndex = filteredOptions.value.findIndex((option) => option.value === selected);
          if (~itemIndex) {
            states.cachedOptions.push(filteredOptions.value[itemIndex]);
            if (!initHovering) {
              updateHoveringIndex(itemIndex);
            }
            initHovering = true;
          }
        });
      } else {
        states.cachedOptions = [];
      }
    } else {
      if (props.modelValue) {
        const options = filteredOptions.value;
        const selectedItemIndex = options.findIndex((o) => o.value === props.modelValue);
        if (~selectedItemIndex) {
          states.selectedLabel = options[selectedItemIndex].label;
          updateHoveringIndex(selectedItemIndex);
        } else {
          states.selectedLabel = `${props.modelValue}`;
        }
      } else {
        states.selectedLabel = "";
      }
    }
    calculatePopperSize();
  };
  vue.watch(expanded, (val) => {
    var _a, _b;
    emit("visible-change", val);
    if (val) {
      (_b = (_a = popper.value).update) == null ? void 0 : _b.call(_a);
    } else {
      states.displayInputValue = "";
      createNewOption("");
    }
  });
  vue.watch(() => props.modelValue, (val) => {
    if (!val || val.toString() !== states.previousValue) {
      initStates();
    }
  }, {
    deep: true
  });
  vue.watch(() => props.options, () => {
    const input = inputRef.value;
    if (!input || input && document.activeElement !== input) {
      initStates();
    }
  }, {
    deep: true
  });
  vue.watch(filteredOptions, () => {
    return vue.nextTick(menuRef.value.resetScrollTop);
  });
  vue.onMounted(() => {
    initStates();
    resizeEvent.addResizeListener(selectRef.value, handleResize);
  });
  vue.onBeforeMount(() => {
    resizeEvent.removeResizeListener(selectRef.value, handleResize);
  });
  return {
    collapseTagSize,
    currentPlaceholder,
    expanded,
    emptyText,
    popupHeight,
    debounce,
    filteredOptions,
    iconClass,
    inputWrapperStyle,
    popperSize,
    dropdownMenuVisible,
    shouldShowPlaceholder,
    selectDisabled,
    selectSize,
    showClearBtn,
    states,
    tagMaxWidth,
    calculatorRef,
    controlRef,
    inputRef,
    menuRef,
    popper,
    selectRef,
    selectionRef,
    popperRef,
    Effect: ElPopper.Effect,
    debouncedOnInputChange,
    deleteTag,
    getLabel,
    getValueKey,
    handleBlur,
    handleClear,
    handleClickOutside,
    handleDel,
    handleEsc,
    handleFocus,
    handleMenuEnter,
    handleResize,
    toggleMenu,
    scrollTo: scrollToItem,
    onInput,
    onKeyboardNavigate,
    onKeyboardSelect,
    onSelect,
    onHover: updateHoveringIndex,
    onUpdateInputValue,
    handleCompositionStart,
    handleCompositionEnd,
    handleCompositionUpdate
  };
};
var useSelect$1 = useSelect;

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
var script = vue.defineComponent({
  name: "ElSelectV2",
  components: {
    ElSelectMenu: script$1,
    ElTag: ElTag__default["default"],
    ElPopper: ElPopper__default["default"]
  },
  directives: { ClickOutside: directives.ClickOutside, ModelText: vue.vModelText },
  props: SelectProps,
  emits: [
    constants.UPDATE_MODEL_EVENT,
    constants.CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, { emit }) {
    const API = useSelect$1(props, emit);
    vue.provide(selectV2InjectionKey, {
      props: vue.reactive(__spreadProps(__spreadValues({}, vue.toRefs(props)), {
        height: API.popupHeight
      })),
      onSelect: API.onSelect,
      onHover: API.onHover,
      onKeyboardNavigate: API.onKeyboardNavigate,
      onKeyboardSelect: API.onKeyboardSelect
    });
    return API;
  }
});

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "el-select-v2__selection"
};
const _hoisted_3 = {
  key: 0,
  class: "el-select-v2__selected-item"
};
const _hoisted_4 = ["id", "autocomplete", "aria-expanded", "aria-labelledby", "disabled", "readonly", "name", "unselectable"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "el-select-v2__selected-item el-select-v2__input-wrapper" };
const _hoisted_7 = ["id", "aria-labelledby", "aria-expanded", "autocomplete", "disabled", "name", "readonly", "unselectable"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "el-select-v2__suffix" };
const _hoisted_10 = { class: "el-select-v2__empty" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = vue.resolveComponent("el-tag");
  const _component_el_select_menu = vue.resolveComponent("el-select-menu");
  const _component_el_popper = vue.resolveComponent("el-popper");
  const _directive_model_text = vue.resolveDirective("model-text");
  const _directive_click_outside = vue.resolveDirective("click-outside");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    ref: "selectRef",
    class: vue.normalizeClass([[_ctx.selectSize ? "el-select-v2--" + _ctx.selectSize : ""], "el-select-v2"]),
    onClick: _cache[25] || (_cache[25] = vue.withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"])),
    onMouseenter: _cache[26] || (_cache[26] = ($event) => _ctx.states.comboBoxHovering = true),
    onMouseleave: _cache[27] || (_cache[27] = ($event) => _ctx.states.comboBoxHovering = false)
  }, [
    vue.createVNode(_component_el_popper, {
      ref: "popper",
      visible: _ctx.dropdownMenuVisible,
      "onUpdate:visible": _cache[23] || (_cache[23] = ($event) => _ctx.dropdownMenuVisible = $event),
      "append-to-body": _ctx.popperAppendToBody,
      "popper-class": `el-select-v2__popper ${_ctx.popperClass}`,
      "gpu-acceleration": false,
      "stop-popper-mouse-event": false,
      "popper-options": _ctx.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.Effect.LIGHT,
      "manual-mode": "",
      placement: "bottom-start",
      pure: "",
      transition: "el-zoom-in-top",
      trigger: "click",
      onBeforeEnter: _ctx.handleMenuEnter,
      onAfterLeave: _cache[24] || (_cache[24] = ($event) => _ctx.states.inputValue = _ctx.states.displayInputValue)
    }, {
      trigger: vue.withCtx(() => [
        vue.createElementVNode("div", {
          ref: "selectionRef",
          class: vue.normalizeClass(["el-select-v2__wrapper", {
            "is-focused": _ctx.states.isComposing,
            "is-hovering": _ctx.states.comboBoxHovering,
            "is-filterable": _ctx.filterable,
            "is-disabled": _ctx.disabled
          }])
        }, [
          _ctx.$slots.prefix ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
            vue.renderSlot(_ctx.$slots, "prefix")
          ])) : vue.createCommentVNode("v-if", true),
          _ctx.multiple ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
            _ctx.collapseTags && _ctx.modelValue.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3, [
              vue.createVNode(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.states.cachedOptions[0].disable,
                size: _ctx.collapseTagSize,
                type: "info",
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.states.cachedOptions[0]))
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", {
                    class: "el-select-v2__tags-text",
                    style: vue.normalizeStyle({
                      maxWidth: `${_ctx.tagMaxWidth}px`
                    })
                  }, vue.toDisplayString(_ctx.states.cachedOptions[0].label), 5)
                ]),
                _: 1
              }, 8, ["closable", "size"]),
              _ctx.modelValue.length > 1 ? (vue.openBlock(), vue.createBlock(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: "info",
                "disable-transitions": ""
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", {
                    class: "el-select-v2__tags-text",
                    style: vue.normalizeStyle({
                      maxWidth: `${_ctx.tagMaxWidth}px`
                    })
                  }, "+ " + vue.toDisplayString(_ctx.modelValue.length - 1), 5)
                ]),
                _: 1
              }, 8, ["size"])) : vue.createCommentVNode("v-if", true)
            ])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(_ctx.states.cachedOptions, (selected, idx) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: idx,
                class: "el-select-v2__selected-item"
              }, [
                vue.createVNode(_component_el_tag, {
                  key: _ctx.getValueKey(selected),
                  closable: !_ctx.selectDisabled && !selected.disabled,
                  size: _ctx.collapseTagSize,
                  type: "info",
                  "disable-transitions": "",
                  onClose: ($event) => _ctx.deleteTag($event, selected)
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("span", {
                      class: "el-select-v2__tags-text",
                      style: vue.normalizeStyle({
                        maxWidth: `${_ctx.tagMaxWidth}px`
                      })
                    }, vue.toDisplayString(_ctx.getLabel(selected)), 5)
                  ]),
                  _: 2
                }, 1032, ["closable", "size", "onClose"])
              ]);
            }), 128)),
            vue.createElementVNode("div", {
              class: "el-select-v2__selected-item el-select-v2__input-wrapper",
              style: vue.normalizeStyle(_ctx.inputWrapperStyle)
            }, [
              vue.withDirectives(vue.createElementVNode("input", {
                id: _ctx.id,
                ref: "inputRef",
                autocomplete: _ctx.autocomplete,
                "aria-autocomplete": "list",
                "aria-haspopup": "listbox",
                autocapitalize: "off",
                "aria-expanded": _ctx.expanded,
                "aria-labelledby": _ctx.label,
                class: vue.normalizeClass(["el-select-v2__combobox-input", [_ctx.selectSize ? `is-${_ctx.selectSize}` : ""]]),
                disabled: _ctx.disabled,
                role: "combobox",
                readonly: !_ctx.filterable,
                spellcheck: "false",
                type: "text",
                name: _ctx.name,
                unselectable: _ctx.expanded ? "on" : void 0,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = (...args) => _ctx.onUpdateInputValue && _ctx.onUpdateInputValue(...args)),
                onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                onInput: _cache[3] || (_cache[3] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                onCompositionstart: _cache[4] || (_cache[4] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                onCompositionupdate: _cache[5] || (_cache[5] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                onCompositionend: _cache[6] || (_cache[6] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                onKeydown: [
                  _cache[7] || (_cache[7] = vue.withKeys(vue.withModifiers(($event) => _ctx.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
                  _cache[8] || (_cache[8] = vue.withKeys(vue.withModifiers(($event) => _ctx.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
                  _cache[9] || (_cache[9] = vue.withKeys(vue.withModifiers((...args) => _ctx.onKeyboardSelect && _ctx.onKeyboardSelect(...args), ["stop", "prevent"]), ["enter"])),
                  _cache[10] || (_cache[10] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"])),
                  _cache[11] || (_cache[11] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleDel && _ctx.handleDel(...args), ["stop"]), ["delete"]))
                ]
              }, null, 42, _hoisted_4), [
                [_directive_model_text, _ctx.states.displayInputValue]
              ]),
              _ctx.filterable ? (vue.openBlock(), vue.createElementBlock("span", {
                key: 0,
                ref: "calculatorRef",
                "aria-hidden": "true",
                class: "el-select-v2__input-calculator",
                textContent: vue.toDisplayString(_ctx.states.displayInputValue)
              }, null, 8, _hoisted_5)) : vue.createCommentVNode("v-if", true)
            ], 4)
          ])) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
            vue.createElementVNode("div", _hoisted_6, [
              vue.withDirectives(vue.createElementVNode("input", {
                id: _ctx.id,
                ref: "inputRef",
                "aria-autocomplete": "list",
                "aria-haspopup": "listbox",
                "aria-labelledby": _ctx.label,
                "aria-expanded": _ctx.expanded,
                autocapitalize: "off",
                autocomplete: _ctx.autocomplete,
                class: "el-select-v2__combobox-input",
                disabled: _ctx.disabled,
                name: _ctx.name,
                role: "combobox",
                readonly: !_ctx.filterable,
                spellcheck: "false",
                type: "text",
                unselectable: _ctx.expanded ? "on" : void 0,
                onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                onFocus: _cache[15] || (_cache[15] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                onInput: _cache[16] || (_cache[16] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                onKeydown: [
                  _cache[17] || (_cache[17] = vue.withKeys(vue.withModifiers(($event) => _ctx.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
                  _cache[18] || (_cache[18] = vue.withKeys(vue.withModifiers(($event) => _ctx.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
                  _cache[19] || (_cache[19] = vue.withKeys(vue.withModifiers((...args) => _ctx.onKeyboardSelect && _ctx.onKeyboardSelect(...args), ["stop", "prevent"]), ["enter"])),
                  _cache[20] || (_cache[20] = vue.withKeys(vue.withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"]))
                ],
                "onUpdate:modelValue": _cache[21] || (_cache[21] = (...args) => _ctx.onUpdateInputValue && _ctx.onUpdateInputValue(...args))
              }, null, 40, _hoisted_7), [
                [_directive_model_text, _ctx.states.displayInputValue]
              ])
            ]),
            _ctx.filterable ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              ref: "calculatorRef",
              "aria-hidden": "true",
              class: "el-select-v2__selected-item el-select-v2__input-calculator",
              textContent: vue.toDisplayString(_ctx.states.displayInputValue)
            }, null, 8, _hoisted_8)) : vue.createCommentVNode("v-if", true)
          ], 64)),
          _ctx.shouldShowPlaceholder ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 3,
            class: vue.normalizeClass({
              "el-select-v2__placeholder": true,
              "is-transparent": _ctx.states.isComposing || (_ctx.placeholder && _ctx.multiple ? _ctx.modelValue.length === 0 : !_ctx.modelValue)
            })
          }, vue.toDisplayString(_ctx.currentPlaceholder), 3)) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("span", _hoisted_9, [
            vue.withDirectives(vue.createElementVNode("i", {
              class: vue.normalizeClass([
                "el-select-v2__caret",
                "el-input__icon",
                "el-icon-" + _ctx.iconClass
              ])
            }, null, 2), [
              [vue.vShow, !_ctx.showClearBtn]
            ]),
            _ctx.showClearBtn ? (vue.openBlock(), vue.createElementBlock("i", {
              key: 0,
              class: vue.normalizeClass(`el-select-v2__caret el-input__icon ${_ctx.clearIcon}`),
              onClick: _cache[22] || (_cache[22] = vue.withModifiers((...args) => _ctx.handleClear && _ctx.handleClear(...args), ["prevent", "stop"]))
            }, null, 2)) : vue.createCommentVNode("v-if", true)
          ])
        ], 2)
      ]),
      default: vue.withCtx(() => [
        vue.createVNode(_component_el_select_menu, {
          ref: "menuRef",
          data: _ctx.filteredOptions,
          width: _ctx.popperSize,
          "hovering-index": _ctx.states.hoveringIndex
        }, {
          default: vue.withCtx((scope) => [
            vue.renderSlot(_ctx.$slots, "default", vue.normalizeProps(vue.guardReactiveProps(scope)))
          ]),
          empty: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "empty", {}, () => [
              vue.createElementVNode("p", _hoisted_10, vue.toDisplayString(_ctx.emptyText ? _ctx.emptyText : ""), 1)
            ])
          ]),
          _: 3
        }, 8, ["data", "width", "hovering-index"])
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "popper-class", "popper-options", "effect", "onBeforeEnter"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}

script.render = render;
script.__file = "packages/components/select-v2/src/select.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Select = script;
const ElSelectV2 = _Select;

exports.ElSelectV2 = ElSelectV2;
exports["default"] = _Select;
exports.selectV2InjectionKey = selectV2InjectionKey;
