export declare const ElLink: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "default", unknown, "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly underline: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly disabled: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly href: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly icon: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
}, {
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type?: unknown;
    readonly underline?: unknown;
    readonly disabled?: unknown;
    readonly href?: unknown;
    readonly icon?: unknown;
} & {
    type: import("../../utils/props").BuildPropType<StringConstructor, "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    disabled: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    underline: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    icon: string;
    href: string;
} & {}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../utils/props").BuildPropType<StringConstructor, "default" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    disabled: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    underline: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    icon: string;
    href: string;
}>> & Record<string, any>;
export default ElLink;
export * from './src/link';
