export declare const ElDropdown: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    trigger: {
        type: import("vue").PropType<import("../../hooks/use-popper/use-target-events").TriggerType | "contextmenu">;
        default: string;
    };
    type: import("vue").PropType<any>;
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
        type: import("vue").PropType<import("@popperjs/core").Placement>;
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
        type: import("vue").PropType<import("..").Effect>;
        default: import("..").Effect;
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
    triggerVnode: import("vue").Ref<import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null>;
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
    effect: import("..").Effect;
    placement: import("@popperjs/core").Placement;
    trigger: import("../../hooks/use-popper/use-target-events").TriggerType | "contextmenu";
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
    effect: import("..").Effect;
    placement: import("@popperjs/core").Placement;
    trigger: import("../../hooks/use-popper/use-target-events").TriggerType | "contextmenu";
    maxHeight: string | number;
    size: string;
    tabindex: string | number;
    splitButton: boolean;
    hideOnClick: boolean;
    showTimeout: number;
    hideTimeout: number;
}>> & {
    DropdownItem: import("vue").DefineComponent<{
        command: {
            type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
            default: () => {};
        };
        disabled: BooleanConstructor;
        divided: BooleanConstructor;
        icon: StringConstructor;
    }, {
        handleClick: (e: UIEvent) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        command?: unknown;
        disabled?: unknown;
        divided?: unknown;
        icon?: unknown;
    } & {
        disabled: boolean;
        command: string | number | Record<string, any>;
        divided: boolean;
    } & {
        icon?: string | undefined;
    }>, {
        disabled: boolean;
        command: string | number | Record<string, any>;
        divided: boolean;
    }>;
    DropdownMenu: import("vue").DefineComponent<{}, {
        size: import("vue").ComputedRef<string> | undefined;
        show: () => void;
        hide: () => void;
        innerHide: () => void;
        triggerElm: import("vue").ComputedRef<import("../../utils/types").Nullable<HTMLButtonElement>> | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
};
export default ElDropdown;
export declare const ElDropdownItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    command: {
        type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
        default: () => {};
    };
    disabled: BooleanConstructor;
    divided: BooleanConstructor;
    icon: StringConstructor;
}, {
    handleClick: (e: UIEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    command?: unknown;
    disabled?: unknown;
    divided?: unknown;
    icon?: unknown;
} & {
    disabled: boolean;
    command: string | number | Record<string, any>;
    divided: boolean;
} & {
    icon?: string | undefined;
}>, {
    disabled: boolean;
    command: string | number | Record<string, any>;
    divided: boolean;
}>>;
export declare const ElDropdownMenu: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{}, {
    size: import("vue").ComputedRef<string> | undefined;
    show: () => void;
    hide: () => void;
    innerHide: () => void;
    triggerElm: import("vue").ComputedRef<import("../../utils/types").Nullable<HTMLButtonElement>> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
