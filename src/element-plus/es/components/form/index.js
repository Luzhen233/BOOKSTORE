import { withInstall, withNoopInstall } from 'element-plus/es/utils/with-install';
import { defineComponent, watch, reactive, toRefs, provide, ref, computed, openBlock, createElementBlock, normalizeClass, renderSlot, inject, onMounted, onUpdated, onBeforeUnmount, nextTick, h, Fragment, getCurrentInstance, resolveComponent, createVNode, withCtx, normalizeStyle, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, Transition } from 'vue';
import { elFormKey, elFormItemKey } from 'element-plus/es/tokens';
import { debugWarn } from 'element-plus/es/utils/error';
import { NOOP } from '@vue/shared';
import AsyncValidator from 'async-validator';
import { useGlobalConfig, addUnit, getPropByPath } from 'element-plus/es/utils/util';
import { isValidComponentSize } from 'element-plus/es/utils/validators';
import { addResizeListener, removeResizeListener } from 'element-plus/es/utils/resize-event';

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
function useFormLabelWidth() {
  const potentialLabelWidthArr = ref([]);
  const autoLabelWidth = computed(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1) {
      debugWarn("Form", `unexpected width ${width}`);
    }
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    index > -1 && potentialLabelWidthArr.value.splice(index, 1);
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
var script$1 = defineComponent({
  name: "ElForm",
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    labelSuffix: {
      type: String,
      default: ""
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false
    },
    scrollToError: Boolean
  },
  emits: ["validate"],
  setup(props, { emit }) {
    const fields = [];
    watch(() => props.rules, () => {
      fields.forEach((field) => {
        field.evaluateValidationEnabled();
      });
      if (props.validateOnRuleChange) {
        validate(() => ({}));
      }
    });
    const addField = (field) => {
      if (field) {
        fields.push(field);
      }
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = () => {
      if (!props.model) {
        debugWarn("Form", "model is required for resetFields to work.");
        return;
      }
      fields.forEach((field) => {
        field.resetField();
      });
    };
    const clearValidate = (props2 = []) => {
      const fds = props2.length ? typeof props2 === "string" ? fields.filter((field) => props2 === field.prop) : fields.filter((field) => props2.indexOf(field.prop) > -1) : fields;
      fds.forEach((field) => {
        field.clearValidate();
      });
    };
    const validate = (callback) => {
      if (!props.model) {
        debugWarn("Form", "model is required for validate to work!");
        return;
      }
      let promise;
      if (typeof callback !== "function") {
        promise = new Promise((resolve, reject) => {
          callback = function(valid2, invalidFields2) {
            if (valid2) {
              resolve(true);
            } else {
              reject(invalidFields2);
            }
          };
        });
      }
      if (fields.length === 0) {
        callback(true);
      }
      let valid = true;
      let count = 0;
      let invalidFields = {};
      let firstInvalidFields;
      for (const field of fields) {
        field.validate("", (message, field2) => {
          if (message) {
            valid = false;
            firstInvalidFields || (firstInvalidFields = field2);
          }
          invalidFields = __spreadValues$1(__spreadValues$1({}, invalidFields), field2);
          if (++count === fields.length) {
            callback(valid, invalidFields);
          }
        });
      }
      if (!valid && props.scrollToError) {
        scrollToField(Object.keys(firstInvalidFields)[0]);
      }
      return promise;
    };
    const validateField = (props2, cb) => {
      props2 = [].concat(props2);
      const fds = fields.filter((field) => props2.indexOf(field.prop) !== -1);
      if (!fields.length) {
        debugWarn("Form", "please pass correct props!");
        return;
      }
      fds.forEach((field) => {
        field.validate("", cb);
      });
    };
    const scrollToField = (prop) => {
      fields.forEach((item) => {
        if (item.prop === prop) {
          item.$el.scrollIntoView();
        }
      });
    };
    const elForm = reactive(__spreadValues$1(__spreadProps$1(__spreadValues$1({}, toRefs(props)), {
      resetFields,
      clearValidate,
      validateField,
      emit,
      addField,
      removeField
    }), useFormLabelWidth()));
    provide(elFormKey, elForm);
    return {
      validate,
      resetFields,
      clearValidate,
      validateField,
      scrollToField
    };
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    class: normalizeClass(["el-form", [
      _ctx.labelPosition ? "el-form--label-" + _ctx.labelPosition : "",
      { "el-form--inline": _ctx.inline }
    ]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

script$1.render = render$1;
script$1.__file = "packages/components/form/src/form.vue";

var LabelWrap = defineComponent({
  name: "ElLabelWrap",
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, { slots }) {
    const el = ref(null);
    const elForm = inject(elFormKey);
    const elFormItem = inject(elFormItemKey);
    const computedWidth = ref(0);
    watch(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        elForm.registerLabelWidth(val, oldVal);
        elFormItem.updateComputedLabelWidth(val);
      }
    });
    const getLabelWidth = () => {
      var _a;
      if ((_a = el.value) == null ? void 0 : _a.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      nextTick(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            elForm.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    onMounted(() => {
      addResizeListener(el.value.firstElementChild, updateLabelWidthFn);
      updateLabelWidthFn();
    });
    onUpdated(updateLabelWidthFn);
    onBeforeUnmount(() => {
      var _a;
      updateLabelWidth("remove");
      removeResizeListener((_a = el.value) == null ? void 0 : _a.firstElementChild, updateLabelWidthFn);
    });
    function render() {
      var _a, _b;
      if (!slots)
        return null;
      if (props.isAutoWidth) {
        const autoLabelWidth = elForm.autoLabelWidth;
        const style = {};
        if (autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = elForm.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return h("div", {
          ref: el,
          class: ["el-form-item__label-wrap"],
          style
        }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      } else {
        return h(Fragment, { ref: el }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      }
    }
    return render;
  }
});

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
var script = defineComponent({
  name: "ElFormItem",
  componentName: "ElFormItem",
  components: {
    LabelWrap
  },
  props: {
    label: String,
    labelWidth: {
      type: [String, Number],
      default: ""
    },
    prop: String,
    required: {
      type: Boolean,
      default: void 0
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ""
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator: isValidComponentSize
    }
  },
  setup(props, { slots }) {
    const $ELEMENT = useGlobalConfig();
    const elForm = inject(elFormKey, {});
    const validateState = ref("");
    const validateMessage = ref("");
    const isValidationEnabled = ref(false);
    const computedLabelWidth = ref("");
    const formItemRef = ref();
    const vm = getCurrentInstance();
    const isNested = computed(() => {
      let parent = vm.parent;
      while (parent && parent.type.name !== "ElForm") {
        if (parent.type.name === "ElFormItem") {
          return true;
        }
        parent = parent.parent;
      }
      return false;
    });
    let initialValue = void 0;
    watch(() => props.error, (val) => {
      validateMessage.value = val;
      validateState.value = val ? "error" : "";
    }, {
      immediate: true
    });
    watch(() => props.validateStatus, (val) => {
      validateState.value = val;
    });
    const labelFor = computed(() => props.for || props.prop);
    const labelStyle = computed(() => {
      const ret = {};
      if (elForm.labelPosition === "top")
        return ret;
      const labelWidth = addUnit(props.labelWidth || elForm.labelWidth);
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    });
    const contentStyle = computed(() => {
      const ret = {};
      if (elForm.labelPosition === "top" || elForm.inline) {
        return ret;
      }
      if (!props.label && !props.labelWidth && isNested.value) {
        return ret;
      }
      const labelWidth = addUnit(props.labelWidth || elForm.labelWidth);
      if (!props.label && !slots.label) {
        ret.marginLeft = labelWidth;
      }
      return ret;
    });
    const fieldValue = computed(() => {
      const model = elForm.model;
      if (!model || !props.prop) {
        return;
      }
      let path = props.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }
      return getPropByPath(model, path, true).v;
    });
    const isRequired = computed(() => {
      const rules = getRules();
      let required = false;
      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            required = true;
            return false;
          }
          return true;
        });
      }
      return required;
    });
    const elFormItemSize = computed(() => props.size || elForm.size);
    const sizeClass = computed(() => {
      return elFormItemSize.value || $ELEMENT.size;
    });
    const validate = (trigger, callback = NOOP) => {
      if (!isValidationEnabled.value) {
        callback();
        return;
      }
      const rules = getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && props.required === void 0) {
        callback();
        return;
      }
      validateState.value = "validating";
      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger;
        });
      }
      descriptor[props.prop] = rules;
      const validator = new AsyncValidator(descriptor);
      const model = {};
      model[props.prop] = fieldValue.value;
      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        var _a;
        validateState.value = !errors ? "success" : "error";
        validateMessage.value = errors ? errors[0].message || `${props.prop} is required` : "";
        callback(validateMessage.value, invalidFields);
        (_a = elForm.emit) == null ? void 0 : _a.call(elForm, "validate", props.prop, !errors, validateMessage.value || null);
      });
    };
    const clearValidate = () => {
      validateState.value = "";
      validateMessage.value = "";
    };
    const resetField = () => {
      validateState.value = "";
      validateMessage.value = "";
      const model = elForm.model;
      const value = fieldValue.value;
      let path = props.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }
      const prop = getPropByPath(model, path, true);
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(initialValue);
      } else {
        prop.o[prop.k] = initialValue;
      }
    };
    const getRules = () => {
      const formRules = elForm.rules;
      const selfRules = props.rules;
      const requiredRule = props.required !== void 0 ? { required: !!props.required } : [];
      const prop = getPropByPath(formRules, props.prop || "", false);
      const normalizedRule = formRules ? prop.o[props.prop || ""] || prop.v : [];
      return [].concat(selfRules || normalizedRule || []).concat(requiredRule);
    };
    const getFilteredRule = (trigger) => {
      const rules = getRules();
      return rules.filter((rule) => {
        if (!rule.trigger || trigger === "")
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map((rule) => __spreadValues({}, rule));
    };
    const evaluateValidationEnabled = () => {
      var _a;
      isValidationEnabled.value = !!((_a = getRules()) == null ? void 0 : _a.length);
    };
    const updateComputedLabelWidth = (width) => {
      computedLabelWidth.value = width ? `${width}px` : "";
    };
    const elFormItem = reactive(__spreadProps(__spreadValues({}, toRefs(props)), {
      size: sizeClass,
      validateState,
      $el: formItemRef,
      evaluateValidationEnabled,
      resetField,
      clearValidate,
      validate,
      updateComputedLabelWidth
    }));
    onMounted(() => {
      if (props.prop) {
        elForm == null ? void 0 : elForm.addField(elFormItem);
        const value = fieldValue.value;
        initialValue = Array.isArray(value) ? [...value] : value;
        evaluateValidationEnabled();
      }
    });
    onBeforeUnmount(() => {
      elForm == null ? void 0 : elForm.removeField(elFormItem);
    });
    provide(elFormItemKey, elFormItem);
    const formItemClass = computed(() => [
      {
        "el-form-item--feedback": elForm.statusIcon,
        "is-error": validateState.value === "error",
        "is-validating": validateState.value === "validating",
        "is-success": validateState.value === "success",
        "is-required": isRequired.value || props.required,
        "is-no-asterisk": elForm.hideRequiredAsterisk
      },
      sizeClass.value ? `el-form-item--${sizeClass.value}` : ""
    ]);
    const shouldShowError = computed(() => {
      return validateState.value === "error" && props.showMessage && elForm.showMessage;
    });
    return {
      formItemRef,
      formItemClass,
      shouldShowError,
      elForm,
      labelStyle,
      contentStyle,
      validateMessage,
      labelFor,
      resetField,
      clearValidate
    };
  }
});

const _hoisted_1 = ["for"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelWrap = resolveComponent("LabelWrap");
  return openBlock(), createElementBlock("div", {
    ref: "formItemRef",
    class: normalizeClass(["el-form-item", _ctx.formItemClass])
  }, [
    createVNode(_component_LabelWrap, {
      "is-auto-width": _ctx.labelStyle.width === "auto",
      "update-all": _ctx.elForm.labelWidth === "auto"
    }, {
      default: withCtx(() => [
        _ctx.label || _ctx.$slots.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: _ctx.labelFor,
          class: "el-form-item__label",
          style: normalizeStyle(_ctx.labelStyle)
        }, [
          renderSlot(_ctx.$slots, "label", {
            label: _ctx.label + _ctx.elForm.labelSuffix
          }, () => [
            createTextVNode(toDisplayString(_ctx.label + _ctx.elForm.labelSuffix), 1)
          ])
        ], 12, _hoisted_1)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["is-auto-width", "update-all"]),
    createElementVNode("div", {
      class: "el-form-item__content",
      style: normalizeStyle(_ctx.contentStyle)
    }, [
      renderSlot(_ctx.$slots, "default"),
      createVNode(Transition, { name: "el-zoom-in-top" }, {
        default: withCtx(() => [
          _ctx.shouldShowError ? renderSlot(_ctx.$slots, "error", {
            key: 0,
            error: _ctx.validateMessage
          }, () => [
            createElementVNode("div", {
              class: normalizeClass(["el-form-item__error", {
                "el-form-item__error--inline": typeof _ctx.inlineMessage === "boolean" ? _ctx.inlineMessage : _ctx.elForm.inlineMessage || false
              }])
            }, toDisplayString(_ctx.validateMessage), 3)
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ], 4)
  ], 2);
}

script.render = render;
script.__file = "packages/components/form/src/form-item.vue";

const ElForm = withInstall(script$1, {
  FormItem: script
});
const ElFormItem = withNoopInstall(script);

export { ElForm, ElFormItem, ElForm as default };
