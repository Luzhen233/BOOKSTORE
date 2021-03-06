import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly image: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly imageSize: NumberConstructor;
    readonly description: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, {
    emptyDescription: import("vue").ComputedRef<string>;
    imageStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly image?: unknown;
    readonly imageSize?: unknown;
    readonly description?: unknown;
} & {
    description: string;
    image: string;
} & {
    imageSize?: number | undefined;
}>, {
    description: string;
    image: string;
}>;
export default _default;
