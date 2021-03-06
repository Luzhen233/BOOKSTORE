export declare const ElRadio: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    border: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    model: import("vue").WritableComputedRef<string | number | boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    radioSize: import("vue").ComputedRef<any>;
    handleChange: () => void;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    label?: unknown;
    disabled?: unknown;
    name?: unknown;
    border?: unknown;
    size?: unknown;
} & {
    name: string;
    disabled: boolean;
    border: boolean;
    modelValue: string | number | boolean;
    label: string | number | boolean;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    border: boolean;
    modelValue: string | number | boolean;
    label: string | number | boolean;
}>> & {
    RadioButton: import("vue").DefineComponent<{
        label: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: string;
        };
        disabled: BooleanConstructor;
        name: {
            type: StringConstructor;
            default: string;
        };
    }, {
        isGroup: import("vue").ComputedRef<boolean>;
        size: import("vue").ComputedRef<import("../../utils/types").ComponentSize>;
        isDisabled: import("vue").ComputedRef<boolean | undefined>;
        tabIndex: import("vue").ComputedRef<0 | -1>;
        value: import("vue").WritableComputedRef<string | number | boolean>;
        focus: import("vue").Ref<boolean>;
        activeStyle: import("vue").ComputedRef<{
            backgroundColor: string;
            borderColor: string;
            boxShadow: string;
            color: string;
        }>;
        radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        label?: unknown;
        disabled?: unknown;
        name?: unknown;
    } & {
        name: string;
        disabled: boolean;
        label: string | number | boolean;
    } & {}>, {
        name: string;
        disabled: boolean;
        label: string | number | boolean;
    }>;
    RadioGroup: import("vue").DefineComponent<{
        modelValue: {
            type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../../utils/types").ComponentSize>;
            validator: (val: string) => boolean;
        };
        fill: {
            type: StringConstructor;
            default: string;
        };
        textColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: BooleanConstructor;
    }, {
        handleKeydown: (e: any) => void;
        radioGroupSize: import("vue").ComputedRef<import("../../utils/types").ComponentSize>;
        radioGroup: import("vue").Ref<null>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        modelValue?: unknown;
        size?: unknown;
        fill?: unknown;
        textColor?: unknown;
        disabled?: unknown;
    } & {
        fill: string;
        disabled: boolean;
        modelValue: string | number | boolean;
        textColor: string;
    } & {
        size?: import("../../utils/types").ComponentSize | undefined;
    }> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        fill: string;
        disabled: boolean;
        modelValue: string | number | boolean;
        textColor: string;
    }>;
};
export default ElRadio;
export declare const ElRadioGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
}, {
    handleKeydown: (e: any) => void;
    radioGroupSize: import("vue").ComputedRef<import("../../utils/types").ComponentSize>;
    radioGroup: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    size?: unknown;
    fill?: unknown;
    textColor?: unknown;
    disabled?: unknown;
} & {
    fill: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    textColor: string;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    fill: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    textColor: string;
}>>;
export declare const ElRadioButton: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
}, {
    isGroup: import("vue").ComputedRef<boolean>;
    size: import("vue").ComputedRef<import("../../utils/types").ComponentSize>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    value: import("vue").WritableComputedRef<string | number | boolean>;
    focus: import("vue").Ref<boolean>;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
        color: string;
    }>;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    disabled?: unknown;
    name?: unknown;
} & {
    name: string;
    disabled: boolean;
    label: string | number | boolean;
} & {}>, {
    name: string;
    disabled: boolean;
    label: string | number | boolean;
}>>;
export * from './src/token';
