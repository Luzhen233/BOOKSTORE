import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _Cascader: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: {
        type: import("vue").PropType<(node: import("../cascader-panel/src/node").default, keyword: string) => boolean>;
        default: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: import("vue").PropType<(value: string) => boolean | Promise<any>>;
        default: () => boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: import("vue").PropType<import("../cascader-panel/src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("../cascader-panel/src/node").CascaderOption[]>;
        default: () => import("../cascader-panel/src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("../cascader-panel/src/node").CascaderProps>;
        default: () => import("../cascader-panel/src/node").CascaderProps;
    };
}, {
    Effect: typeof import("..").Effect;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popper: import("vue").Ref<null>;
    popperPaneRef: import("vue").ComputedRef<any>;
    input: import("vue").Ref<null>;
    tagWrapper: import("vue").Ref<null>;
    panel: import("vue").Ref<null>;
    suggestionPanel: import("vue").Ref<null>;
    popperVisible: import("vue").Ref<boolean>;
    inputHover: import("vue").Ref<boolean>;
    inputPlaceholder: import("vue").ComputedRef<string>;
    filtering: import("vue").Ref<boolean>;
    presentText: import("vue").ComputedRef<string>;
    checkedValue: import("vue").ComputedRef<import("..").CascaderValue>;
    inputValue: import("vue").Ref<string>;
    searchInputValue: import("vue").Ref<string>;
    presentTags: import("vue").Ref<import("..").Tag[]>;
    suggestions: import("vue").Ref<import("../cascader-panel/src/node").default[]>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    isOnComposition: import("vue").Ref<boolean>;
    realSize: import("vue").ComputedRef<import("element-plus/es/utils/types").ComponentSize>;
    tagSize: import("vue").ComputedRef<"small" | "mini">;
    multiple: import("vue").ComputedRef<boolean>;
    readonly: import("vue").ComputedRef<boolean>;
    clearBtnVisible: import("vue").ComputedRef<boolean>;
    t: (...args: any[]) => string;
    togglePopperVisible: (visible?: boolean | undefined) => void;
    hideSuggestionPanel: () => void;
    deleteTag: (tag: import("..").Tag) => void;
    focusFirstNode: () => void;
    getCheckedNodes: (leafOnly: boolean) => any;
    handleExpandChange: (value: import("..").CascaderValue) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleComposition: (event: CompositionEvent) => void;
    handleClear: () => void;
    handleSuggestionClick: (node: import("../cascader-panel/src/node").default) => void;
    handleDelete: () => void;
    handleInput: (val: string, e?: KeyboardEvent | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "change" | "blur" | "expand-change" | "visible-change" | "remove-tag")[], "change" | "focus" | "update:modelValue" | "blur" | "expand-change" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    placeholder?: unknown;
    disabled?: unknown;
    clearable?: unknown;
    filterable?: unknown;
    filterMethod?: unknown;
    separator?: unknown;
    showAllLevels?: unknown;
    collapseTags?: unknown;
    debounce?: unknown;
    beforeFilter?: unknown;
    popperClass?: unknown;
    popperAppendToBody?: unknown;
    modelValue?: unknown;
    options?: unknown;
    props?: unknown;
} & {
    props: import("../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
} & {
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    modelValue?: import("../cascader-panel/src/node").CascaderValue | undefined;
    placeholder?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
}>>;
export default _Cascader;
export declare const ElCascader: SFCWithInstall<import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: {
        type: import("vue").PropType<(node: import("../cascader-panel/src/node").default, keyword: string) => boolean>;
        default: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
    showAllLevels: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapseTags: BooleanConstructor;
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    beforeFilter: {
        type: import("vue").PropType<(value: string) => boolean | Promise<any>>;
        default: () => boolean;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: import("vue").PropType<import("../cascader-panel/src/node").CascaderValue>;
    options: {
        type: import("vue").PropType<import("../cascader-panel/src/node").CascaderOption[]>;
        default: () => import("../cascader-panel/src/node").CascaderOption[];
    };
    props: {
        type: import("vue").PropType<import("../cascader-panel/src/node").CascaderProps>;
        default: () => import("../cascader-panel/src/node").CascaderProps;
    };
}, {
    Effect: typeof import("..").Effect;
    popperOptions: Partial<import("@popperjs/core").Options>;
    popper: import("vue").Ref<null>;
    popperPaneRef: import("vue").ComputedRef<any>;
    input: import("vue").Ref<null>;
    tagWrapper: import("vue").Ref<null>;
    panel: import("vue").Ref<null>;
    suggestionPanel: import("vue").Ref<null>;
    popperVisible: import("vue").Ref<boolean>;
    inputHover: import("vue").Ref<boolean>;
    inputPlaceholder: import("vue").ComputedRef<string>;
    filtering: import("vue").Ref<boolean>;
    presentText: import("vue").ComputedRef<string>;
    checkedValue: import("vue").ComputedRef<import("..").CascaderValue>;
    inputValue: import("vue").Ref<string>;
    searchInputValue: import("vue").Ref<string>;
    presentTags: import("vue").Ref<import("..").Tag[]>;
    suggestions: import("vue").Ref<import("../cascader-panel/src/node").default[]>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    isOnComposition: import("vue").Ref<boolean>;
    realSize: import("vue").ComputedRef<import("element-plus/es/utils/types").ComponentSize>;
    tagSize: import("vue").ComputedRef<"small" | "mini">;
    multiple: import("vue").ComputedRef<boolean>;
    readonly: import("vue").ComputedRef<boolean>;
    clearBtnVisible: import("vue").ComputedRef<boolean>;
    t: (...args: any[]) => string;
    togglePopperVisible: (visible?: boolean | undefined) => void;
    hideSuggestionPanel: () => void;
    deleteTag: (tag: import("..").Tag) => void;
    focusFirstNode: () => void;
    getCheckedNodes: (leafOnly: boolean) => any;
    handleExpandChange: (value: import("..").CascaderValue) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleComposition: (event: CompositionEvent) => void;
    handleClear: () => void;
    handleSuggestionClick: (node: import("../cascader-panel/src/node").default) => void;
    handleDelete: () => void;
    handleInput: (val: string, e?: KeyboardEvent | undefined) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "change" | "blur" | "expand-change" | "visible-change" | "remove-tag")[], "change" | "focus" | "update:modelValue" | "blur" | "expand-change" | "visible-change" | "remove-tag", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    size?: unknown;
    placeholder?: unknown;
    disabled?: unknown;
    clearable?: unknown;
    filterable?: unknown;
    filterMethod?: unknown;
    separator?: unknown;
    showAllLevels?: unknown;
    collapseTags?: unknown;
    debounce?: unknown;
    beforeFilter?: unknown;
    popperClass?: unknown;
    popperAppendToBody?: unknown;
    modelValue?: unknown;
    options?: unknown;
    props?: unknown;
} & {
    props: import("../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
} & {
    size?: import("element-plus/es/utils/types").ComponentSize | undefined;
    modelValue?: import("../cascader-panel/src/node").CascaderValue | undefined;
    placeholder?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    "onRemove-tag"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: import("../cascader-panel/src/node").default, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
}>>;
