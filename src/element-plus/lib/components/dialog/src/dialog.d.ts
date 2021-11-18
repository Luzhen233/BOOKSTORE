import type { ExtractPropTypes } from 'vue';
export declare const dialogProps: {
    readonly appendToBody: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly beforeClose: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    readonly destroyOnClose: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly center: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly customClass: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly closeOnClickModal: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly closeOnPressEscape: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly fullscreen: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly lockScroll: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly modal: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly showClose: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly title: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly openDelay: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly closeDelay: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly top: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly modelValue: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
    readonly modalClass: StringConstructor;
    readonly width: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
};
export declare type DialogProps = ExtractPropTypes<typeof dialogProps>;
export declare const dialogEmits: {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
};
export declare type DialogEmits = typeof dialogEmits;