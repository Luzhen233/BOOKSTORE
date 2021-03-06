import { Effect } from 'element-plus/es/components/popper';
import type { Placement } from 'element-plus/es/components/popper';
import type { PropType, ComponentPublicInstance } from 'vue';
import type { TriggerType } from 'element-plus/es/hooks/use-popper/use-target-events';
declare type Nullable<T> = null | T;
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: PropType<TriggerType | "contextmenu">;
        default: string;
    };
    type: PropType<any>;
    size: {
        type: StringConstructor;
        default: string;
    };
    splitButton: BooleanConstructor;
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: PropType<Placement>;
        default: string;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    effect: {
        type: PropType<Effect>;
        default: Effect;
    };
    maxHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, {
    visible: import("vue").Ref<boolean>;
    scrollbar: import("vue").Ref<null>;
    wrapStyle: import("vue").ComputedRef<string>;
    dropdownSize: import("vue").ComputedRef<any>;
    handlerMainButtonClick: (event: any) => void;
    triggerVnode: import("vue").Ref<Nullable<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "visible-change" | "command")[], "click" | "visible-change" | "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger?: unknown;
    type?: unknown;
    size?: unknown;
    splitButton?: unknown;
    hideOnClick?: unknown;
    placement?: unknown;
    showTimeout?: unknown;
    hideTimeout?: unknown;
    tabindex?: unknown;
    effect?: unknown;
    maxHeight?: unknown;
} & {
    effect: Effect;
    placement: Placement;
    trigger: TriggerType | "contextmenu";
    maxHeight: string | number;
    size: string;
    tabindex: string | number;
    splitButton: boolean;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
} & {
    type?: unknown;
}> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onVisible-change"?: ((...args: any[]) => any) | undefined;
    onCommand?: ((...args: any[]) => any) | undefined;
}, {
    effect: Effect;
    placement: Placement;
    trigger: TriggerType | "contextmenu";
    maxHeight: string | number;
    size: string;
    tabindex: string | number;
    splitButton: boolean;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
}>;
export default _default;
