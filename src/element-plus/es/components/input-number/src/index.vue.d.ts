import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    step: {
        type: NumberConstructor;
        default: number;
    };
    stepStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: NumberConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlsPosition: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    label: StringConstructor;
    placeholder: StringConstructor;
    precision: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
    };
}, {
    input: import("vue").Ref<null>;
    displayValue: import("vue").ComputedRef<string | number>;
    handleInput: (value: any) => any;
    handleInputChange: (value: any) => void;
    controlsAtRight: import("vue").ComputedRef<boolean>;
    decrease: () => void;
    increase: () => void;
    inputNumberSize: import("vue").ComputedRef<any>;
    inputNumberDisabled: import("vue").ComputedRef<boolean | undefined>;
    maxDisabled: import("vue").ComputedRef<boolean>;
    minDisabled: import("vue").ComputedRef<boolean>;
    focus: () => void;
    blur: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "input" | "change" | "blur")[], "change" | "focus" | "update:modelValue" | "input" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    step?: unknown;
    stepStrictly?: unknown;
    max?: unknown;
    min?: unknown;
    modelValue?: unknown;
    disabled?: unknown;
    size?: unknown;
    controls?: unknown;
    controlsPosition?: unknown;
    name?: unknown;
    label?: unknown;
    placeholder?: unknown;
    precision?: unknown;
} & {
    disabled: boolean;
    max: number;
    controls: boolean;
    min: number;
    step: number;
    stepStrictly: boolean;
    controlsPosition: string;
} & {
    name?: string | undefined;
    size?: ComponentSize | undefined;
    modelValue?: number | undefined;
    placeholder?: string | undefined;
    label?: string | undefined;
    precision?: number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    max: number;
    controls: boolean;
    min: number;
    step: number;
    stepStrictly: boolean;
    controlsPosition: string;
}>;
export default _default;
