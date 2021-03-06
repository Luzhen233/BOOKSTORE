import { Effect } from 'element-plus/es/components/popper';
import type { Options } from 'element-plus/es/components/popper';
import type { ComputedRef, PropType, Ref } from 'vue';
import type { CascaderValue, CascaderNode, Tag } from 'element-plus/es/components/cascader-panel';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
    };
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    filterMethod: {
        type: PropType<(node: CascaderNode, keyword: string) => boolean>;
        default: (node: CascaderNode, keyword: string) => boolean;
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
        type: PropType<(value: string) => boolean | Promise<any>>;
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
    modelValue: PropType<import("../../cascader-panel/src/node").CascaderValue>;
    options: {
        type: PropType<import("../../cascader-panel/src/node").CascaderOption[]>;
        default: () => import("../../cascader-panel/src/node").CascaderOption[];
    };
    props: {
        type: PropType<import("../../cascader-panel/src/node").CascaderProps>;
        default: () => import("../../cascader-panel/src/node").CascaderProps;
    };
}, {
    Effect: typeof Effect;
    popperOptions: Partial<Options>;
    popper: Ref<null>;
    popperPaneRef: ComputedRef<any>;
    input: Ref<null>;
    tagWrapper: Ref<null>;
    panel: Ref<null>;
    suggestionPanel: Ref<null>;
    popperVisible: Ref<boolean>;
    inputHover: Ref<boolean>;
    inputPlaceholder: ComputedRef<string>;
    filtering: Ref<boolean>;
    presentText: ComputedRef<string>;
    checkedValue: ComputedRef<CascaderValue>;
    inputValue: Ref<string>;
    searchInputValue: Ref<string>;
    presentTags: Ref<Tag[]>;
    suggestions: Ref<CascaderNode[]>;
    isDisabled: ComputedRef<boolean | undefined>;
    isOnComposition: Ref<boolean>;
    realSize: ComputedRef<ComponentSize>;
    tagSize: ComputedRef<"small" | "mini">;
    multiple: ComputedRef<boolean>;
    readonly: ComputedRef<boolean>;
    clearBtnVisible: ComputedRef<boolean>;
    t: (...args: any[]) => string;
    togglePopperVisible: (visible?: boolean | undefined) => void;
    hideSuggestionPanel: () => void;
    deleteTag: (tag: Tag) => void;
    focusFirstNode: () => void;
    getCheckedNodes: (leafOnly: boolean) => any;
    handleExpandChange: (value: CascaderValue) => void;
    handleKeyDown: (e: KeyboardEvent) => void;
    handleComposition: (event: CompositionEvent) => void;
    handleClear: () => void;
    handleSuggestionClick: (node: CascaderNode) => void;
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
    props: import("../../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: CascaderNode, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
} & {
    size?: ComponentSize | undefined;
    modelValue?: import("../../cascader-panel/src/node").CascaderValue | undefined;
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
    props: import("../../cascader-panel/src/node").CascaderProps;
    disabled: boolean;
    popperClass: string;
    clearable: boolean;
    separator: string;
    debounce: number;
    popperAppendToBody: boolean;
    options: import("../../cascader-panel/src/node").CascaderOption[];
    filterable: boolean;
    filterMethod: (node: CascaderNode, keyword: string) => boolean;
    showAllLevels: boolean;
    collapseTags: boolean;
    beforeFilter: (value: string) => boolean | Promise<any>;
}>;
export default _default;
