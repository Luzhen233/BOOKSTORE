import type { VNode } from 'vue';
import type { StyleValue } from 'element-plus/es/utils/types';
import type { GridConstructorProps } from '../types';
import type { VirtualizedGridProps } from '../props';
declare const createGrid: ({ name, clearCache, getColumnPosition, getColumnStartIndexForOffset, getColumnStopIndexForStartIndex, getEstimatedTotalHeight, getEstimatedTotalWidth, getColumnOffset, getRowOffset, getRowPosition, getRowStartIndexForOffset, getRowStopIndexForStartIndex, initCache, validateProps, }: GridConstructorProps<VirtualizedGridProps>) => import("vue").DefineComponent<{
    readonly className: import("../../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("../../../../utils/props").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("../../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("../../../../utils/props").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("../../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("../../../../utils/props").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, true, unknown, unknown>;
    readonly perfMode: import("../../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly columnCache: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly columnWidth: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, true, never, never>;
    readonly estimatedColumnWidth: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly estimatedRowHeight: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly initScrollLeft: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly initScrollTop: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly rowCache: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly rowHeight: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, true, never, never>;
    readonly totalColumn: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly totalRow: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, true, never, never>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "item-rendered")[], "scroll" | "item-rendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly className?: unknown;
    readonly containerElement?: unknown;
    readonly data?: unknown;
    readonly direction?: unknown;
    readonly height?: unknown;
    readonly innerElement?: unknown;
    readonly style?: unknown;
    readonly useIsScrolling?: unknown;
    readonly width?: unknown;
    readonly perfMode?: unknown;
    readonly columnCache?: unknown;
    readonly columnWidth?: unknown;
    readonly estimatedColumnWidth?: unknown;
    readonly estimatedRowHeight?: unknown;
    readonly initScrollLeft?: unknown;
    readonly initScrollTop?: unknown;
    readonly rowCache?: unknown;
    readonly rowHeight?: unknown;
    readonly totalColumn?: unknown;
    readonly totalRow?: unknown;
} & {
    height: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    width: import("../../../../utils/props").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    columnWidth: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, never>;
    direction: import("../../../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    data: any[];
    className: string;
    perfMode: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    columnCache: number;
    initScrollLeft: number;
    initScrollTop: number;
    rowCache: number;
    rowHeight: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, never>;
    totalColumn: number;
    totalRow: number;
} & {
    style?: StyleValue | undefined;
    estimatedColumnWidth?: number | undefined;
    estimatedRowHeight?: number | undefined;
}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onItem-rendered"?: ((...args: any[]) => any) | undefined;
}, {
    style: StyleValue;
    direction: import("../../../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    data: any[];
    className: string;
    perfMode: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    columnCache: number;
    estimatedColumnWidth: number;
    estimatedRowHeight: number;
    initScrollLeft: number;
    initScrollTop: number;
    rowCache: number;
}>;
export default createGrid;
