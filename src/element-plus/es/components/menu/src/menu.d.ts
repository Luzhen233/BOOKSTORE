import type { MenuItemClicked } from './types';
import type { NavigationFailure } from 'vue-router';
import type { VNode, ExtractPropTypes } from 'vue';
export declare const menuProps: {
    readonly mode: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "vertical", unknown, "horizontal" | "vertical", unknown>;
    readonly defaultActive: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly defaultOpeneds: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "hover", unknown, "click" | "hover", unknown>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly collapseTransition: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly ellipsis: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
};
export declare type MenuProps = ExtractPropTypes<typeof menuProps>;
export declare const menuEmits: {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => boolean;
};
export declare type MenuEmits = typeof menuEmits;
declare const _default: import("vue").DefineComponent<{
    readonly mode: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "vertical", unknown, "horizontal" | "vertical", unknown>;
    readonly defaultActive: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly defaultOpeneds: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly uniqueOpened: BooleanConstructor;
    readonly router: BooleanConstructor;
    readonly menuTrigger: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "hover", unknown, "click" | "hover", unknown>;
    readonly collapse: BooleanConstructor;
    readonly backgroundColor: StringConstructor;
    readonly textColor: StringConstructor;
    readonly activeTextColor: StringConstructor;
    readonly collapseTransition: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly ellipsis: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly mode?: unknown;
    readonly defaultActive?: unknown;
    readonly defaultOpeneds?: unknown;
    readonly uniqueOpened?: unknown;
    readonly router?: unknown;
    readonly menuTrigger?: unknown;
    readonly collapse?: unknown;
    readonly backgroundColor?: unknown;
    readonly textColor?: unknown;
    readonly activeTextColor?: unknown;
    readonly collapseTransition?: unknown;
    readonly ellipsis?: unknown;
} & {
    ellipsis: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    collapse: boolean;
    mode: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "click" | "hover", unknown>;
    collapseTransition: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
} & {
    backgroundColor?: string | undefined;
    textColor?: string | undefined;
    activeTextColor?: string | undefined;
}> & {
    onClose?: ((index: string, indexPath: string[]) => any) | undefined;
    onSelect?: ((index: string, indexPath: string[], item: MenuItemClicked, routerResult?: Promise<void | NavigationFailure> | undefined) => any) | undefined;
    onOpen?: ((index: string, indexPath: string[]) => any) | undefined;
}, {
    ellipsis: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    collapse: boolean;
    mode: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("element-plus/es/utils/props").BuildPropType<StringConstructor, "click" | "hover", unknown>;
    collapseTransition: import("element-plus/es/utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
}>;
export default _default;
