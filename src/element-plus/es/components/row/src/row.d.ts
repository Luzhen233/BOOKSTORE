declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    tag?: unknown;
    gutter?: unknown;
    justify?: unknown;
    align?: unknown;
} & {
    justify: string;
    tag: string;
    gutter: number;
    align: string;
} & {}>, {
    justify: string;
    tag: string;
    gutter: number;
    align: string;
}>;
export default _default;
