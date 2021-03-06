import { Effect } from 'element-plus/es/components/popper';
import type { Placement } from 'element-plus/es/components/popper';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        validator: (val: string) => boolean;
        default: string;
    };
    fetchSuggestions: {
        type: PropType<(queryString: string, cb: (data: any[]) => void) => void>;
        default: () => void;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    triggerOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectWhenUnmatched: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightFirstItem: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    Effect: typeof Effect;
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    suggestions: import("vue").Ref<never[]>;
    highlightedIndex: import("vue").Ref<number>;
    dropdownWidth: import("vue").Ref<string>;
    activated: import("vue").Ref<boolean>;
    suggestionDisabled: import("vue").Ref<boolean>;
    loading: import("vue").Ref<boolean>;
    inputRef: import("vue").Ref<null>;
    regionRef: import("vue").Ref<null>;
    popper: import("vue").Ref<null>;
    id: import("vue").ComputedRef<string>;
    suggestionVisible: import("vue").ComputedRef<boolean>;
    suggestionLoading: import("vue").ComputedRef<boolean>;
    getData: (queryString: any) => void;
    handleInput: (value: any) => void;
    handleChange: (value: any) => void;
    handleFocus: (e: any) => void;
    handleBlur: (e: any) => void;
    handleClear: () => void;
    handleKeyEnter: () => void;
    close: () => void;
    focus: () => void;
    select: (item: any) => void;
    highlight: (index: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "clear" | "input" | "change" | "blur" | "select")[], "change" | "focus" | "clear" | "update:modelValue" | "input" | "blur" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    valueKey?: unknown;
    modelValue?: unknown;
    debounce?: unknown;
    placement?: unknown;
    fetchSuggestions?: unknown;
    popperClass?: unknown;
    triggerOnFocus?: unknown;
    selectWhenUnmatched?: unknown;
    hideLoading?: unknown;
    popperAppendToBody?: unknown;
    highlightFirstItem?: unknown;
} & {
    placement: Placement;
    popperClass: string;
    modelValue: string | number;
    valueKey: string;
    debounce: number;
    fetchSuggestions: (queryString: string, cb: (data: any[]) => void) => void;
    triggerOnFocus: boolean;
    selectWhenUnmatched: boolean;
    hideLoading: boolean;
    popperAppendToBody: boolean;
    highlightFirstItem: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
}, {
    placement: Placement;
    popperClass: string;
    modelValue: string | number;
    valueKey: string;
    debounce: number;
    fetchSuggestions: (queryString: string, cb: (data: any[]) => void) => void;
    triggerOnFocus: boolean;
    selectWhenUnmatched: boolean;
    hideLoading: boolean;
    popperAppendToBody: boolean;
    highlightFirstItem: boolean;
}>;
export default _default;
