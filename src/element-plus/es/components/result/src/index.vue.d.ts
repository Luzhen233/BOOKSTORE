declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}, {
    iconElement: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    subTitle?: unknown;
    icon?: unknown;
} & {
    title: string;
    icon: string;
    subTitle: string;
} & {}>, {
    title: string;
    icon: string;
    subTitle: string;
}>;
export default _default;
