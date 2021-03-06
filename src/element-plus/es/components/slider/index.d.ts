import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _Slider: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        default: string;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
}, {
    firstValue: import("vue").Ref<number>;
    secondValue: import("vue").Ref<number>;
    oldValue: import("vue").Ref<number>;
    dragging: import("vue").Ref<boolean>;
    sliderSize: import("vue").Ref<number>;
    slider: import("vue").Ref<import("element-plus/es/utils/types").Nullable<HTMLElement>>;
    firstButton: import("vue").Ref<null>;
    secondButton: import("vue").Ref<null>;
    sliderDisabled: import("vue").ComputedRef<boolean>;
    runwayStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent) => void;
    getStopStyle: (position: number) => import("vue").CSSProperties;
    setFirstValue: (firstValue: number) => void;
    setSecondValue: (secondValue: number) => void;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./src/slider.type").Mark[]>;
    sliderWrapper: import("vue").Ref<import("element-plus/es/utils/types").Nullable<HTMLElement>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "change" | "update:modelValue" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    showInput?: unknown;
    showInputControls?: unknown;
    inputSize?: unknown;
    showStops?: unknown;
    showTooltip?: unknown;
    formatTooltip?: unknown;
    disabled?: unknown;
    range?: unknown;
    vertical?: unknown;
    height?: unknown;
    debounce?: unknown;
    label?: unknown;
    tooltipClass?: unknown;
    marks?: unknown;
} & {
    height: string;
    disabled: boolean;
    modelValue: number | number[];
    vertical: boolean;
    inputSize: import("element-plus/es/utils/types").ComponentSize;
    range: boolean;
    debounce: number;
    max: number;
    min: number;
    step: number;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
} & {
    label?: string | undefined;
    tooltipClass?: string | undefined;
    formatTooltip?: ((val: number) => string | number) | undefined;
    marks?: Record<string, any> | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    height: string;
    disabled: boolean;
    modelValue: number | number[];
    vertical: boolean;
    label: string;
    inputSize: import("element-plus/es/utils/types").ComponentSize;
    range: boolean;
    debounce: number;
    max: number;
    min: number;
    step: number;
    tooltipClass: string;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
    formatTooltip: (val: number) => string | number;
}>>;
export default _Slider;
export declare const ElSlider: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | number[]>;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    showInput: {
        type: BooleanConstructor;
        default: boolean;
    };
    showInputControls: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputSize: {
        type: import("vue").PropType<import("element-plus/es/utils/types").ComponentSize>;
        default: string;
    };
    showStops: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTooltip: {
        type: import("vue").PropType<(val: number) => string | number>;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    range: {
        type: BooleanConstructor;
        default: boolean;
    };
    vertical: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    debounce: {
        type: NumberConstructor;
        default: number;
    };
    label: {
        type: StringConstructor;
        default: undefined;
    };
    tooltipClass: {
        type: StringConstructor;
        default: undefined;
    };
    marks: ObjectConstructor;
}, {
    firstValue: import("vue").Ref<number>;
    secondValue: import("vue").Ref<number>;
    oldValue: import("vue").Ref<number>;
    dragging: import("vue").Ref<boolean>;
    sliderSize: import("vue").Ref<number>;
    slider: import("vue").Ref<import("element-plus/es/utils/types").Nullable<HTMLElement>>;
    firstButton: import("vue").Ref<null>;
    secondButton: import("vue").Ref<null>;
    sliderDisabled: import("vue").ComputedRef<boolean>;
    runwayStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    emitChange: () => Promise<void>;
    onSliderClick: (event: MouseEvent) => void;
    getStopStyle: (position: number) => import("vue").CSSProperties;
    setFirstValue: (firstValue: number) => void;
    setSecondValue: (secondValue: number) => void;
    stops: import("vue").ComputedRef<number[]>;
    markList: import("vue").ComputedRef<import("./src/slider.type").Mark[]>;
    sliderWrapper: import("vue").Ref<import("element-plus/es/utils/types").Nullable<HTMLElement>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change")[], "change" | "update:modelValue" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    min?: unknown;
    max?: unknown;
    step?: unknown;
    showInput?: unknown;
    showInputControls?: unknown;
    inputSize?: unknown;
    showStops?: unknown;
    showTooltip?: unknown;
    formatTooltip?: unknown;
    disabled?: unknown;
    range?: unknown;
    vertical?: unknown;
    height?: unknown;
    debounce?: unknown;
    label?: unknown;
    tooltipClass?: unknown;
    marks?: unknown;
} & {
    height: string;
    disabled: boolean;
    modelValue: number | number[];
    vertical: boolean;
    inputSize: import("element-plus/es/utils/types").ComponentSize;
    range: boolean;
    debounce: number;
    max: number;
    min: number;
    step: number;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
} & {
    label?: string | undefined;
    tooltipClass?: string | undefined;
    formatTooltip?: ((val: number) => string | number) | undefined;
    marks?: Record<string, any> | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
}, {
    height: string;
    disabled: boolean;
    modelValue: number | number[];
    vertical: boolean;
    label: string;
    inputSize: import("element-plus/es/utils/types").ComponentSize;
    range: boolean;
    debounce: number;
    max: number;
    min: number;
    step: number;
    tooltipClass: string;
    showTooltip: boolean;
    showInput: boolean;
    showInputControls: boolean;
    showStops: boolean;
    formatTooltip: (val: number) => string | number;
}>>;
export * from './src/slider.type';
