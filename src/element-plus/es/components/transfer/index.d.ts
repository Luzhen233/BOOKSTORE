import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _Transfer: SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./src/transfer").DataItem[]>;
        default: () => never[];
    };
    titles: {
        type: import("vue").PropType<[string, string]>;
        default: () => never[];
    };
    buttonTexts: {
        type: import("vue").PropType<[string, string]>;
        default: () => never[];
    };
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterMethod: import("vue").PropType<(query: string, item: import("./src/transfer").DataItem) => boolean>;
    leftDefaultChecked: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    rightDefaultChecked: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    renderContent: import("vue").PropType<(h: any, option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    modelValue: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    format: {
        type: import("vue").PropType<import("./src/transfer").Format>;
        default: () => {};
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: import("vue").PropType<import("./src/transfer").Props>;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    targetOrder: {
        type: import("vue").PropType<import("./src/transfer").TargetOrder>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    hasButtonTexts: import("vue").ComputedRef<boolean>;
    leftPanelTitle: import("vue").ComputedRef<string>;
    rightPanelTitle: import("vue").ComputedRef<string>;
    panelFilterPlaceholder: import("vue").ComputedRef<string>;
    clearQuery: (which: "right" | "left") => void;
    optionRender: import("vue").ComputedRef<(option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    leftChecked: import("vue").Ref<never[]>;
    rightChecked: import("vue").Ref<never[]>;
    sourceData: import("vue").ComputedRef<import("./src/transfer").DataItem[]>;
    targetData: import("vue").ComputedRef<import("./src/transfer").DataItem[]>;
    onSourceCheckedChange: (val: import("./src/transfer").Key[], movedKeys: import("./src/transfer").Key[]) => void;
    onTargetCheckedChange: (val: import("./src/transfer").Key[], movedKeys: import("./src/transfer").Key[]) => void;
    addToLeft: () => void;
    addToRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "left-check-change" | "right-check-change")[], "change" | "update:modelValue" | "left-check-change" | "right-check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    titles?: unknown;
    buttonTexts?: unknown;
    filterPlaceholder?: unknown;
    filterMethod?: unknown;
    leftDefaultChecked?: unknown;
    rightDefaultChecked?: unknown;
    renderContent?: unknown;
    modelValue?: unknown;
    format?: unknown;
    filterable?: unknown;
    props?: unknown;
    targetOrder?: unknown;
} & {
    props: import("./src/transfer").Props;
    modelValue: import("./src/transfer").Key[];
    data: import("./src/transfer").DataItem[];
    filterable: boolean;
    format: import("./src/transfer").Format;
    titles: [string, string];
    buttonTexts: [string, string];
    filterPlaceholder: string;
    leftDefaultChecked: import("./src/transfer").Key[];
    rightDefaultChecked: import("./src/transfer").Key[];
    targetOrder: import("./src/transfer").TargetOrder;
} & {
    filterMethod?: ((query: string, item: import("./src/transfer").DataItem) => boolean) | undefined;
    renderContent?: ((h: any, option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onLeft-check-change"?: ((...args: any[]) => any) | undefined;
    "onRight-check-change"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("./src/transfer").Props;
    modelValue: import("./src/transfer").Key[];
    data: import("./src/transfer").DataItem[];
    filterable: boolean;
    format: import("./src/transfer").Format;
    titles: [string, string];
    buttonTexts: [string, string];
    filterPlaceholder: string;
    leftDefaultChecked: import("./src/transfer").Key[];
    rightDefaultChecked: import("./src/transfer").Key[];
    targetOrder: import("./src/transfer").TargetOrder;
}>>;
export default _Transfer;
export declare const ElTransfer: SFCWithInstall<import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("./src/transfer").DataItem[]>;
        default: () => never[];
    };
    titles: {
        type: import("vue").PropType<[string, string]>;
        default: () => never[];
    };
    buttonTexts: {
        type: import("vue").PropType<[string, string]>;
        default: () => never[];
    };
    filterPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    filterMethod: import("vue").PropType<(query: string, item: import("./src/transfer").DataItem) => boolean>;
    leftDefaultChecked: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    rightDefaultChecked: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    renderContent: import("vue").PropType<(h: any, option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    modelValue: {
        type: import("vue").PropType<import("./src/transfer").Key[]>;
        default: () => never[];
    };
    format: {
        type: import("vue").PropType<import("./src/transfer").Format>;
        default: () => {};
    };
    filterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    props: {
        type: import("vue").PropType<import("./src/transfer").Props>;
        default: () => {
            label: string;
            key: string;
            disabled: string;
        };
    };
    targetOrder: {
        type: import("vue").PropType<import("./src/transfer").TargetOrder>;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    hasButtonTexts: import("vue").ComputedRef<boolean>;
    leftPanelTitle: import("vue").ComputedRef<string>;
    rightPanelTitle: import("vue").ComputedRef<string>;
    panelFilterPlaceholder: import("vue").ComputedRef<string>;
    clearQuery: (which: "right" | "left") => void;
    optionRender: import("vue").ComputedRef<(option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    leftChecked: import("vue").Ref<never[]>;
    rightChecked: import("vue").Ref<never[]>;
    sourceData: import("vue").ComputedRef<import("./src/transfer").DataItem[]>;
    targetData: import("vue").ComputedRef<import("./src/transfer").DataItem[]>;
    onSourceCheckedChange: (val: import("./src/transfer").Key[], movedKeys: import("./src/transfer").Key[]) => void;
    onTargetCheckedChange: (val: import("./src/transfer").Key[], movedKeys: import("./src/transfer").Key[]) => void;
    addToLeft: () => void;
    addToRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "left-check-change" | "right-check-change")[], "change" | "update:modelValue" | "left-check-change" | "right-check-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    titles?: unknown;
    buttonTexts?: unknown;
    filterPlaceholder?: unknown;
    filterMethod?: unknown;
    leftDefaultChecked?: unknown;
    rightDefaultChecked?: unknown;
    renderContent?: unknown;
    modelValue?: unknown;
    format?: unknown;
    filterable?: unknown;
    props?: unknown;
    targetOrder?: unknown;
} & {
    props: import("./src/transfer").Props;
    modelValue: import("./src/transfer").Key[];
    data: import("./src/transfer").DataItem[];
    filterable: boolean;
    format: import("./src/transfer").Format;
    titles: [string, string];
    buttonTexts: [string, string];
    filterPlaceholder: string;
    leftDefaultChecked: import("./src/transfer").Key[];
    rightDefaultChecked: import("./src/transfer").Key[];
    targetOrder: import("./src/transfer").TargetOrder;
} & {
    filterMethod?: ((query: string, item: import("./src/transfer").DataItem) => boolean) | undefined;
    renderContent?: ((h: any, option: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onLeft-check-change"?: ((...args: any[]) => any) | undefined;
    "onRight-check-change"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("./src/transfer").Props;
    modelValue: import("./src/transfer").Key[];
    data: import("./src/transfer").DataItem[];
    filterable: boolean;
    format: import("./src/transfer").Format;
    titles: [string, string];
    buttonTexts: [string, string];
    filterPlaceholder: string;
    leftDefaultChecked: import("./src/transfer").Key[];
    rightDefaultChecked: import("./src/transfer").Key[];
    targetOrder: import("./src/transfer").TargetOrder;
}>>;
export * from './src/transfer';
