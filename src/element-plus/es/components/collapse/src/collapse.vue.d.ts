import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    accordion: BooleanConstructor;
    modelValue: {
        type: PropType<string | number | (string | number)[]>;
        default: () => never[];
    };
}, {
    activeNames: import("vue").Ref<never[]>;
    setActiveNames: (_activeNames: any) => void;
    handleItemClick: (name: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    accordion?: unknown;
    modelValue?: unknown;
} & {
    modelValue: string | number | (string | number)[];
    accordion: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | (string | number)[];
    accordion: boolean;
}>;
export default _default;
