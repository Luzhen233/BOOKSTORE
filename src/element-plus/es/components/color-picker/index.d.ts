import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _ColorPicker: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: StringConstructor;
    showAlpha: BooleanConstructor;
    colorFormat: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    popperClass: StringConstructor;
    predefine: ArrayConstructor;
}, {
    Effect: typeof import("..").Effect;
    color: import("./src/color").default;
    colorDisabled: import("vue").ComputedRef<boolean | undefined>;
    colorSize: import("vue").ComputedRef<any>;
    displayedColor: import("vue").ComputedRef<string>;
    showPanelColor: import("vue").Ref<boolean>;
    showPicker: import("vue").Ref<boolean>;
    customInput: import("vue").Ref<string>;
    handleConfirm: () => void;
    hide: () => void;
    handleTrigger: () => void;
    clear: () => void;
    confirmValue: () => void;
    t: (...args: any[]) => string;
    hue: import("vue").Ref<null>;
    svPanel: import("vue").Ref<null>;
    alpha: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "active-change")[], "change" | "update:modelValue" | "active-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    showAlpha?: unknown;
    colorFormat?: unknown;
    disabled?: unknown;
    size?: unknown;
    popperClass?: unknown;
    predefine?: unknown;
} & {
    disabled: boolean;
    showAlpha: boolean;
} & {
    popperClass?: string | undefined;
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    modelValue?: string | undefined;
    colorFormat?: string | undefined;
    predefine?: unknown[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onActive-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    showAlpha: boolean;
}>>;
export default _ColorPicker;
export declare const ElColorPicker: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: StringConstructor;
    showAlpha: BooleanConstructor;
    colorFormat: StringConstructor;
    disabled: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    popperClass: StringConstructor;
    predefine: ArrayConstructor;
}, {
    Effect: typeof import("..").Effect;
    color: import("./src/color").default;
    colorDisabled: import("vue").ComputedRef<boolean | undefined>;
    colorSize: import("vue").ComputedRef<any>;
    displayedColor: import("vue").ComputedRef<string>;
    showPanelColor: import("vue").Ref<boolean>;
    showPicker: import("vue").Ref<boolean>;
    customInput: import("vue").Ref<string>;
    handleConfirm: () => void;
    hide: () => void;
    handleTrigger: () => void;
    clear: () => void;
    confirmValue: () => void;
    t: (...args: any[]) => string;
    hue: import("vue").Ref<null>;
    svPanel: import("vue").Ref<null>;
    alpha: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "active-change")[], "change" | "update:modelValue" | "active-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    showAlpha?: unknown;
    colorFormat?: unknown;
    disabled?: unknown;
    size?: unknown;
    popperClass?: unknown;
    predefine?: unknown;
} & {
    disabled: boolean;
    showAlpha: boolean;
} & {
    popperClass?: string | undefined;
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    modelValue?: string | undefined;
    colorFormat?: string | undefined;
    predefine?: unknown[] | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onActive-change"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    showAlpha: boolean;
}>>;
