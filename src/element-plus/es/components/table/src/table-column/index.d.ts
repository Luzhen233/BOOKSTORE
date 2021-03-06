import type { TableColumnCtx } from './defaults';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    label: StringConstructor;
    className: StringConstructor;
    labelClassName: StringConstructor;
    property: StringConstructor;
    prop: StringConstructor;
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    renderHeader: import("vue").PropType<(data: {
        column: TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    sortable: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    sortMethod: import("vue").PropType<(a: any, b: any) => number>;
    sortBy: import("vue").PropType<string | string[] | ((row: any, index: number) => string)>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    columnKey: StringConstructor;
    align: StringConstructor;
    headerAlign: StringConstructor;
    showTooltipWhenOverflow: BooleanConstructor;
    showOverflowTooltip: BooleanConstructor;
    fixed: (BooleanConstructor | StringConstructor)[];
    formatter: import("vue").PropType<(row: any, column: TableColumnCtx<any>, cellValue: any, index: number) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    selectable: import("vue").PropType<(row: any, index: number) => boolean>;
    reserveSelection: BooleanConstructor;
    filterMethod: import("vue").PropType<import("./defaults").FilterMethods<any>>;
    filteredValue: import("vue").PropType<string[]>;
    filters: import("vue").PropType<import("./defaults").Filters>;
    filterPlacement: StringConstructor;
    filterMultiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    index: import("vue").PropType<number | ((index: number) => number)>;
    sortOrders: {
        type: import("vue").PropType<("ascending" | "descending" | null)[]>;
        default: () => (string | null)[];
        validator: (val: ("ascending" | "descending" | null)[]) => boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    label?: unknown;
    className?: unknown;
    labelClassName?: unknown;
    property?: unknown;
    prop?: unknown;
    width?: unknown;
    minWidth?: unknown;
    renderHeader?: unknown;
    sortable?: unknown;
    sortMethod?: unknown;
    sortBy?: unknown;
    resizable?: unknown;
    columnKey?: unknown;
    align?: unknown;
    headerAlign?: unknown;
    showTooltipWhenOverflow?: unknown;
    showOverflowTooltip?: unknown;
    fixed?: unknown;
    formatter?: unknown;
    selectable?: unknown;
    reserveSelection?: unknown;
    filterMethod?: unknown;
    filteredValue?: unknown;
    filters?: unknown;
    filterPlacement?: unknown;
    filterMultiple?: unknown;
    index?: unknown;
    sortOrders?: unknown;
} & {
    type: string;
    width: string | number;
    minWidth: string | number;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    showTooltipWhenOverflow: boolean;
    showOverflowTooltip: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
} & {
    fixed?: string | boolean | undefined;
    label?: string | undefined;
    filters?: import("./defaults").Filters | undefined;
    index?: number | ((index: number) => number) | undefined;
    filterMethod?: import("./defaults").FilterMethods<any> | undefined;
    align?: string | undefined;
    className?: string | undefined;
    labelClassName?: string | undefined;
    prop?: string | undefined;
    renderHeader?: ((data: {
        column: TableColumnCtx<any>;
        $index: number;
    }) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    sortMethod?: ((a: any, b: any) => number) | undefined;
    sortBy?: string | string[] | ((row: any, index: number) => string) | undefined;
    formatter?: ((row: any, column: TableColumnCtx<any>, cellValue: any, index: number) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>) | undefined;
    selectable?: ((row: any, index: number) => boolean) | undefined;
    filteredValue?: string[] | undefined;
    property?: string | undefined;
    columnKey?: string | undefined;
    headerAlign?: string | undefined;
    filterPlacement?: string | undefined;
}>, {
    type: string;
    width: string | number;
    minWidth: string | number;
    sortOrders: ("ascending" | "descending" | null)[];
    sortable: string | boolean;
    resizable: boolean;
    showTooltipWhenOverflow: boolean;
    showOverflowTooltip: boolean;
    reserveSelection: boolean;
    filterMultiple: boolean;
}>;
export default _default;
