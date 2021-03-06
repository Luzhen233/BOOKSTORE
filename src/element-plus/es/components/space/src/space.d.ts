import type { VNode, StyleValue, ExtractPropTypes, VNodeChild } from 'vue';
export declare const spaceProps: {
    readonly direction: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly class: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, "", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<StyleValue>, "", unknown, unknown, unknown>;
    readonly alignment: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string>, "center", unknown, unknown, unknown>;
    readonly prefixCls: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly spacer: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<VNodeChild>, null, unknown, unknown, unknown>;
    readonly wrap: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fill: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fillRatio: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 100, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, NumberConstructor], unknown, unknown, "small" | "large" | "medium" | "mini", number | [number, number]>;
};
export declare type SpaceProps = ExtractPropTypes<typeof spaceProps>;
declare const _default: import("vue").DefineComponent<{
    readonly direction: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly class: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, "", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<StyleValue>, "", unknown, unknown, unknown>;
    readonly alignment: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string>, "center", unknown, unknown, unknown>;
    readonly prefixCls: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly spacer: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<VNodeChild>, null, unknown, unknown, unknown>;
    readonly wrap: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fill: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fillRatio: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 100, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, NumberConstructor], unknown, unknown, "small" | "large" | "medium" | "mini", number | [number, number]>;
}, () => string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | {
    [name: string]: unknown;
    $stable?: boolean | undefined;
} | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly direction?: unknown;
    readonly class?: unknown;
    readonly style?: unknown;
    readonly alignment?: unknown;
    readonly prefixCls?: unknown;
    readonly spacer?: unknown;
    readonly wrap?: unknown;
    readonly fill?: unknown;
    readonly fillRatio?: unknown;
    readonly size?: unknown;
} & {
    fill: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    class: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
    style: StyleValue;
    direction: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    wrap: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    alignment: string;
    spacer: VNodeChild;
    fillRatio: number;
} & {
    size?: import("element-plus/es/utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "small" | "large" | "medium" | "mini", number | [number, number]> | undefined;
    prefixCls?: string | undefined;
}>, {
    fill: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    class: import("element-plus/es/utils/props").BuildPropType<import("element-plus/es/utils/props").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
    style: StyleValue;
    direction: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    size: import("element-plus/es/utils/props").BuildPropType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "small" | "large" | "medium" | "mini", number | [number, number]>;
    wrap: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    alignment: string;
    prefixCls: string;
    spacer: VNodeChild;
    fillRatio: number;
}>;
export default _default;
