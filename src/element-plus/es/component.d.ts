declare const _default: (({
    new (...args: any[]): any;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{} & {} & {}>, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): any;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{} & {} & {}>, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        }> & Omit<Readonly<{
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
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        } & {
            backgroundColor?: string;
            textColor?: string;
            activeTextColor?: string;
        }> & {
            onClose?: (index: string, indexPath: string[]) => any;
            onOpen?: (index: string, indexPath: string[]) => any;
            onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "mode" | "defaultActive" | "defaultOpeneds" | "menuTrigger" | "collapseTransition" | "ellipsis" | "uniqueOpened" | "router" | "collapse">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: ((event: "close", index: string, indexPath: string[]) => void) & ((event: "open", index: string, indexPath: string[]) => void) & ((event: "select", index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        } & {
            backgroundColor?: string;
            textColor?: string;
            activeTextColor?: string;
        }> & {
            onClose?: (index: string, indexPath: string[]) => any;
            onOpen?: (index: string, indexPath: string[]) => any;
            onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            close: (index: string, indexPath: string[]) => boolean;
            open: (index: string, indexPath: string[]) => boolean;
            select: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
        }, string, {
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
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
        mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
        defaultActive: string;
        defaultOpeneds: string[];
        menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
        collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        uniqueOpened: boolean;
        router: boolean;
        collapse: boolean;
    } & {
        backgroundColor?: string;
        textColor?: string;
        activeTextColor?: string;
    }> & {
        onClose?: (index: string, indexPath: string[]) => any;
        onOpen?: (index: string, indexPath: string[]) => any;
        onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
    collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
    collapse: boolean;
} & {
    backgroundColor?: string;
    textColor?: string;
    activeTextColor?: string;
}> & {
    onClose?: (index: string, indexPath: string[]) => any;
    onOpen?: (index: string, indexPath: string[]) => any;
    onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
}, string, {
    mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
    collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
    collapse: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
} & {
    MenuItem: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    MenuItemGroup: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    SubMenu: import("vue").DefineComponent<{
        readonly index: import("./utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
        readonly showTimeout: import("./utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly hideTimeout: import("./utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly popperClass: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly popperAppendToBody: import("./utils/props").BuildPropReturn<BooleanConstructor, any, unknown, unknown, unknown>;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly index?: unknown;
        readonly showTimeout?: unknown;
        readonly hideTimeout?: unknown;
        readonly popperClass?: unknown;
        readonly disabled?: unknown;
        readonly popperAppendToBody?: unknown;
    } & {
        disabled: boolean;
        index: string;
        showTimeout: number;
        hideTimeout: number;
    } & {
        popperClass?: string;
        popperAppendToBody?: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>, {
        disabled: boolean;
        showTimeout: number;
        hideTimeout: number;
        popperAppendToBody: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        }> & Omit<Readonly<{
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
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        } & {
            backgroundColor?: string;
            textColor?: string;
            activeTextColor?: string;
        }> & {
            onClose?: (index: string, indexPath: string[]) => any;
            onOpen?: (index: string, indexPath: string[]) => any;
            onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "mode" | "defaultActive" | "defaultOpeneds" | "menuTrigger" | "collapseTransition" | "ellipsis" | "uniqueOpened" | "router" | "collapse">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: ((event: "close", index: string, indexPath: string[]) => void) & ((event: "open", index: string, indexPath: string[]) => void) & ((event: "select", index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
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
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        } & {
            backgroundColor?: string;
            textColor?: string;
            activeTextColor?: string;
        }> & {
            onClose?: (index: string, indexPath: string[]) => any;
            onOpen?: (index: string, indexPath: string[]) => any;
            onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            close: (index: string, indexPath: string[]) => boolean;
            open: (index: string, indexPath: string[]) => boolean;
            select: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
        }, string, {
            mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
            defaultActive: string;
            defaultOpeneds: string[];
            menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
            collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
            uniqueOpened: boolean;
            router: boolean;
            collapse: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
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
        mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
        defaultActive: string;
        defaultOpeneds: string[];
        menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
        collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
        uniqueOpened: boolean;
        router: boolean;
        collapse: boolean;
    } & {
        backgroundColor?: string;
        textColor?: string;
        activeTextColor?: string;
    }> & {
        onClose?: (index: string, indexPath: string[]) => any;
        onOpen?: (index: string, indexPath: string[]) => any;
        onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
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
    mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
    collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
    collapse: boolean;
} & {
    backgroundColor?: string;
    textColor?: string;
    activeTextColor?: string;
}> & {
    onClose?: (index: string, indexPath: string[]) => any;
    onOpen?: (index: string, indexPath: string[]) => any;
    onSelect?: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (index: string, indexPath: string[]) => boolean;
    open: (index: string, indexPath: string[]) => boolean;
    select: (index: string, indexPath: string[], item: import("./components/menu").MenuItemClicked, routerResult?: Promise<void | import("vue-router").NavigationFailure>) => boolean;
}, string, {
    mode: import("./utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    defaultActive: string;
    defaultOpeneds: string[];
    menuTrigger: import("./utils/props").BuildPropType<StringConstructor, "hover" | "click", unknown>;
    collapseTransition: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    ellipsis: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    uniqueOpened: boolean;
    router: boolean;
    collapse: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
} & {
    MenuItem: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    MenuItemGroup: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
    SubMenu: import("vue").DefineComponent<{
        readonly index: import("./utils/props").BuildPropReturn<StringConstructor, unknown, true, unknown, unknown>;
        readonly showTimeout: import("./utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly hideTimeout: import("./utils/props").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly popperClass: StringConstructor;
        readonly disabled: BooleanConstructor;
        readonly popperAppendToBody: import("./utils/props").BuildPropReturn<BooleanConstructor, any, unknown, unknown, unknown>;
    }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        readonly index?: unknown;
        readonly showTimeout?: unknown;
        readonly hideTimeout?: unknown;
        readonly popperClass?: unknown;
        readonly disabled?: unknown;
        readonly popperAppendToBody?: unknown;
    } & {
        disabled: boolean;
        index: string;
        showTimeout: number;
        hideTimeout: number;
    } & {
        popperClass?: string;
        popperAppendToBody?: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>, {
        disabled: boolean;
        showTimeout: number;
        hideTimeout: number;
        popperAppendToBody: import("./utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        }> & Omit<Readonly<{
            readonly total?: unknown;
            readonly pageSize?: unknown;
            readonly defaultPageSize?: unknown;
            readonly currentPage?: unknown;
            readonly defaultCurrentPage?: unknown;
            readonly pageCount?: unknown;
            readonly pagerCount?: unknown;
            readonly layout?: unknown;
            readonly pageSizes?: unknown;
            readonly popperClass?: unknown;
            readonly prevText?: unknown;
            readonly nextText?: unknown;
            readonly small?: unknown;
            readonly background?: unknown;
            readonly disabled?: unknown;
            readonly hideOnSinglePage?: unknown;
        } & {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        } & {
            total?: number;
            pageSize?: number;
            defaultPageSize?: number;
            currentPage?: number;
            defaultCurrentPage?: number;
            pageCount?: number;
        }> & {
            "onUpdate:current-page"?: (val: number) => any;
            "onUpdate:page-size"?: (val: number) => any;
            "onSize-change"?: (val: number) => any;
            "onCurrent-change"?: (val: number) => any;
            "onPrev-click"?: (val: number) => any;
            "onNext-click"?: (val: number) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "small" | "popperClass" | "disabled" | "layout" | "pagerCount" | "pageSizes" | "prevText" | "nextText" | "background" | "hideOnSinglePage">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: ((event: "update:current-page", val: number) => void) & ((event: "update:page-size", val: number) => void) & ((event: "size-change", val: number) => void) & ((event: "current-change", val: number) => void) & ((event: "prev-click", val: number) => void) & ((event: "next-click", val: number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            readonly total?: unknown;
            readonly pageSize?: unknown;
            readonly defaultPageSize?: unknown;
            readonly currentPage?: unknown;
            readonly defaultCurrentPage?: unknown;
            readonly pageCount?: unknown;
            readonly pagerCount?: unknown;
            readonly layout?: unknown;
            readonly pageSizes?: unknown;
            readonly popperClass?: unknown;
            readonly prevText?: unknown;
            readonly nextText?: unknown;
            readonly small?: unknown;
            readonly background?: unknown;
            readonly disabled?: unknown;
            readonly hideOnSinglePage?: unknown;
        } & {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        } & {
            total?: number;
            pageSize?: number;
            defaultPageSize?: number;
            currentPage?: number;
            defaultCurrentPage?: number;
            pageCount?: number;
        }> & {
            "onUpdate:current-page"?: (val: number) => any;
            "onUpdate:page-size"?: (val: number) => any;
            "onSize-change"?: (val: number) => any;
            "onCurrent-change"?: (val: number) => any;
            "onPrev-click"?: (val: number) => any;
            "onNext-click"?: (val: number) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:current-page': (val: number) => boolean;
            'update:page-size': (val: number) => boolean;
            'size-change': (val: number) => boolean;
            'current-change': (val: number) => boolean;
            'prev-click': (val: number) => boolean;
            'next-click': (val: number) => boolean;
        }, string, {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        readonly total?: unknown;
        readonly pageSize?: unknown;
        readonly defaultPageSize?: unknown;
        readonly currentPage?: unknown;
        readonly defaultCurrentPage?: unknown;
        readonly pageCount?: unknown;
        readonly pagerCount?: unknown;
        readonly layout?: unknown;
        readonly pageSizes?: unknown;
        readonly popperClass?: unknown;
        readonly prevText?: unknown;
        readonly nextText?: unknown;
        readonly small?: unknown;
        readonly background?: unknown;
        readonly disabled?: unknown;
        readonly hideOnSinglePage?: unknown;
    } & {
        small: boolean;
        popperClass: string;
        disabled: boolean;
        layout: string;
        pagerCount: number;
        pageSizes: number[];
        prevText: string;
        nextText: string;
        background: boolean;
        hideOnSinglePage: boolean;
    } & {
        total?: number;
        pageSize?: number;
        defaultPageSize?: number;
        currentPage?: number;
        defaultCurrentPage?: number;
        pageCount?: number;
    }> & {
        "onUpdate:current-page"?: (val: number) => any;
        "onUpdate:page-size"?: (val: number) => any;
        "onSize-change"?: (val: number) => any;
        "onCurrent-change"?: (val: number) => any;
        "onPrev-click"?: (val: number) => any;
        "onNext-click"?: (val: number) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    readonly total?: unknown;
    readonly pageSize?: unknown;
    readonly defaultPageSize?: unknown;
    readonly currentPage?: unknown;
    readonly defaultCurrentPage?: unknown;
    readonly pageCount?: unknown;
    readonly pagerCount?: unknown;
    readonly layout?: unknown;
    readonly pageSizes?: unknown;
    readonly popperClass?: unknown;
    readonly prevText?: unknown;
    readonly nextText?: unknown;
    readonly small?: unknown;
    readonly background?: unknown;
    readonly disabled?: unknown;
    readonly hideOnSinglePage?: unknown;
} & {
    small: boolean;
    popperClass: string;
    disabled: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    background: boolean;
    hideOnSinglePage: boolean;
} & {
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    currentPage?: number;
    defaultCurrentPage?: number;
    pageCount?: number;
}> & {
    "onUpdate:current-page"?: (val: number) => any;
    "onUpdate:page-size"?: (val: number) => any;
    "onSize-change"?: (val: number) => any;
    "onCurrent-change"?: (val: number) => any;
    "onPrev-click"?: (val: number) => any;
    "onNext-click"?: (val: number) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
}, string, {
    small: boolean;
    popperClass: string;
    disabled: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    background: boolean;
    hideOnSinglePage: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
} & Record<string, any>) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        }> & Omit<Readonly<{
            readonly total?: unknown;
            readonly pageSize?: unknown;
            readonly defaultPageSize?: unknown;
            readonly currentPage?: unknown;
            readonly defaultCurrentPage?: unknown;
            readonly pageCount?: unknown;
            readonly pagerCount?: unknown;
            readonly layout?: unknown;
            readonly pageSizes?: unknown;
            readonly popperClass?: unknown;
            readonly prevText?: unknown;
            readonly nextText?: unknown;
            readonly small?: unknown;
            readonly background?: unknown;
            readonly disabled?: unknown;
            readonly hideOnSinglePage?: unknown;
        } & {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        } & {
            total?: number;
            pageSize?: number;
            defaultPageSize?: number;
            currentPage?: number;
            defaultCurrentPage?: number;
            pageCount?: number;
        }> & {
            "onUpdate:current-page"?: (val: number) => any;
            "onUpdate:page-size"?: (val: number) => any;
            "onSize-change"?: (val: number) => any;
            "onCurrent-change"?: (val: number) => any;
            "onPrev-click"?: (val: number) => any;
            "onNext-click"?: (val: number) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "small" | "popperClass" | "disabled" | "layout" | "pagerCount" | "pageSizes" | "prevText" | "nextText" | "background" | "hideOnSinglePage">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: ((event: "update:current-page", val: number) => void) & ((event: "update:page-size", val: number) => void) & ((event: "size-change", val: number) => void) & ((event: "current-change", val: number) => void) & ((event: "prev-click", val: number) => void) & ((event: "next-click", val: number) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            readonly total?: unknown;
            readonly pageSize?: unknown;
            readonly defaultPageSize?: unknown;
            readonly currentPage?: unknown;
            readonly defaultCurrentPage?: unknown;
            readonly pageCount?: unknown;
            readonly pagerCount?: unknown;
            readonly layout?: unknown;
            readonly pageSizes?: unknown;
            readonly popperClass?: unknown;
            readonly prevText?: unknown;
            readonly nextText?: unknown;
            readonly small?: unknown;
            readonly background?: unknown;
            readonly disabled?: unknown;
            readonly hideOnSinglePage?: unknown;
        } & {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        } & {
            total?: number;
            pageSize?: number;
            defaultPageSize?: number;
            currentPage?: number;
            defaultCurrentPage?: number;
            pageCount?: number;
        }> & {
            "onUpdate:current-page"?: (val: number) => any;
            "onUpdate:page-size"?: (val: number) => any;
            "onSize-change"?: (val: number) => any;
            "onCurrent-change"?: (val: number) => any;
            "onPrev-click"?: (val: number) => any;
            "onNext-click"?: (val: number) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            'update:current-page': (val: number) => boolean;
            'update:page-size': (val: number) => boolean;
            'size-change': (val: number) => boolean;
            'current-change': (val: number) => boolean;
            'prev-click': (val: number) => boolean;
            'next-click': (val: number) => boolean;
        }, string, {
            small: boolean;
            popperClass: string;
            disabled: boolean;
            layout: string;
            pagerCount: number;
            pageSizes: number[];
            prevText: string;
            nextText: string;
            background: boolean;
            hideOnSinglePage: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        readonly total?: unknown;
        readonly pageSize?: unknown;
        readonly defaultPageSize?: unknown;
        readonly currentPage?: unknown;
        readonly defaultCurrentPage?: unknown;
        readonly pageCount?: unknown;
        readonly pagerCount?: unknown;
        readonly layout?: unknown;
        readonly pageSizes?: unknown;
        readonly popperClass?: unknown;
        readonly prevText?: unknown;
        readonly nextText?: unknown;
        readonly small?: unknown;
        readonly background?: unknown;
        readonly disabled?: unknown;
        readonly hideOnSinglePage?: unknown;
    } & {
        small: boolean;
        popperClass: string;
        disabled: boolean;
        layout: string;
        pagerCount: number;
        pageSizes: number[];
        prevText: string;
        nextText: string;
        background: boolean;
        hideOnSinglePage: boolean;
    } & {
        total?: number;
        pageSize?: number;
        defaultPageSize?: number;
        currentPage?: number;
        defaultCurrentPage?: number;
        pageCount?: number;
    }> & {
        "onUpdate:current-page"?: (val: number) => any;
        "onUpdate:page-size"?: (val: number) => any;
        "onSize-change"?: (val: number) => any;
        "onCurrent-change"?: (val: number) => any;
        "onPrev-click"?: (val: number) => any;
        "onNext-click"?: (val: number) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    readonly total?: unknown;
    readonly pageSize?: unknown;
    readonly defaultPageSize?: unknown;
    readonly currentPage?: unknown;
    readonly defaultCurrentPage?: unknown;
    readonly pageCount?: unknown;
    readonly pagerCount?: unknown;
    readonly layout?: unknown;
    readonly pageSizes?: unknown;
    readonly popperClass?: unknown;
    readonly prevText?: unknown;
    readonly nextText?: unknown;
    readonly small?: unknown;
    readonly background?: unknown;
    readonly disabled?: unknown;
    readonly hideOnSinglePage?: unknown;
} & {
    small: boolean;
    popperClass: string;
    disabled: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    background: boolean;
    hideOnSinglePage: boolean;
} & {
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    currentPage?: number;
    defaultCurrentPage?: number;
    pageCount?: number;
}> & {
    "onUpdate:current-page"?: (val: number) => any;
    "onUpdate:page-size"?: (val: number) => any;
    "onSize-change"?: (val: number) => any;
    "onCurrent-change"?: (val: number) => any;
    "onPrev-click"?: (val: number) => any;
    "onNext-click"?: (val: number) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:current-page': (val: number) => boolean;
    'update:page-size': (val: number) => boolean;
    'size-change': (val: number) => boolean;
    'current-change': (val: number) => boolean;
    'prev-click': (val: number) => boolean;
    'next-click': (val: number) => boolean;
}, string, {
    small: boolean;
    popperClass: string;
    disabled: boolean;
    layout: string;
    pagerCount: number;
    pageSizes: number[];
    prevText: string;
    nextText: string;
    background: boolean;
    hideOnSinglePage: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
} & Record<string, any>) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
            beforeLeave: import("./components/tabs/src/token").BeforeLeave;
        }> & Omit<Readonly<{
            type?: unknown;
            activeName?: unknown;
            closable?: unknown;
            addable?: unknown;
            modelValue?: unknown;
            editable?: unknown;
            tabPosition?: unknown;
            beforeLeave?: unknown;
            stretch?: unknown;
        } & {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
        } & {
            beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onTab-click"?: (...args: any[]) => any;
            onEdit?: (...args: any[]) => any;
            "onTab-remove"?: (...args: any[]) => any;
            "onTab-add"?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "editable" | "modelValue" | "stretch" | "activeName" | "closable" | "addable" | "tabPosition" | "beforeLeave">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            activeName?: unknown;
            closable?: unknown;
            addable?: unknown;
            modelValue?: unknown;
            editable?: unknown;
            tabPosition?: unknown;
            beforeLeave?: unknown;
            stretch?: unknown;
        } & {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
        } & {
            beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onTab-click"?: (...args: any[]) => any;
            onEdit?: (...args: any[]) => any;
            "onTab-remove"?: (...args: any[]) => any;
            "onTab-add"?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
        }, {
            nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
            handleTabClick: (tab: any, tabName: any, event: any) => void;
            handleTabRemove: (pane: any, ev: any) => void;
            handleTabAdd: () => void;
            currentName: import("vue").Ref<string>;
            panes: import("vue").Ref<any[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input")[], string, {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
            beforeLeave: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        type?: unknown;
        activeName?: unknown;
        closable?: unknown;
        addable?: unknown;
        modelValue?: unknown;
        editable?: unknown;
        tabPosition?: unknown;
        beforeLeave?: unknown;
        stretch?: unknown;
    } & {
        type: import("./components/tabs/src/token").ITabType;
        editable: boolean;
        modelValue: string;
        stretch: boolean;
        activeName: string;
        closable: boolean;
        addable: boolean;
        tabPosition: import("./components/tabs/src/token").ITabPosition;
    } & {
        beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onTab-click"?: (...args: any[]) => any;
        onEdit?: (...args: any[]) => any;
        "onTab-remove"?: (...args: any[]) => any;
        "onTab-add"?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
        handleTabClick: (tab: any, tabName: any, event: any) => void;
        handleTabRemove: (pane: any, ev: any) => void;
        handleTabAdd: () => void;
        currentName: import("vue").Ref<string>;
        panes: import("vue").Ref<any[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    activeName?: unknown;
    closable?: unknown;
    addable?: unknown;
    modelValue?: unknown;
    editable?: unknown;
    tabPosition?: unknown;
    beforeLeave?: unknown;
    stretch?: unknown;
} & {
    type: import("./components/tabs/src/token").ITabType;
    editable: boolean;
    modelValue: string;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    tabPosition: import("./components/tabs/src/token").ITabPosition;
} & {
    beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onTab-click"?: (...args: any[]) => any;
    onEdit?: (...args: any[]) => any;
    "onTab-remove"?: (...args: any[]) => any;
    "onTab-add"?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
}, {
    nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
    handleTabClick: (tab: any, tabName: any, event: any) => void;
    handleTabRemove: (pane: any, ev: any) => void;
    handleTabAdd: () => void;
    currentName: import("vue").Ref<string>;
    panes: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input")[], "update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input", {
    type: import("./components/tabs/src/token").ITabType;
    editable: boolean;
    modelValue: string;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    tabPosition: import("./components/tabs/src/token").ITabPosition;
    beforeLeave: import("./components/tabs/src/token").BeforeLeave;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
} & {
    TabPane: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
            beforeLeave: import("./components/tabs/src/token").BeforeLeave;
        }> & Omit<Readonly<{
            type?: unknown;
            activeName?: unknown;
            closable?: unknown;
            addable?: unknown;
            modelValue?: unknown;
            editable?: unknown;
            tabPosition?: unknown;
            beforeLeave?: unknown;
            stretch?: unknown;
        } & {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
        } & {
            beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onTab-click"?: (...args: any[]) => any;
            onEdit?: (...args: any[]) => any;
            "onTab-remove"?: (...args: any[]) => any;
            "onTab-add"?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "editable" | "modelValue" | "stretch" | "activeName" | "closable" | "addable" | "tabPosition" | "beforeLeave">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            type?: unknown;
            activeName?: unknown;
            closable?: unknown;
            addable?: unknown;
            modelValue?: unknown;
            editable?: unknown;
            tabPosition?: unknown;
            beforeLeave?: unknown;
            stretch?: unknown;
        } & {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
        } & {
            beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
            "onTab-click"?: (...args: any[]) => any;
            onEdit?: (...args: any[]) => any;
            "onTab-remove"?: (...args: any[]) => any;
            "onTab-add"?: (...args: any[]) => any;
            onInput?: (...args: any[]) => any;
        }, {
            nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
            handleTabClick: (tab: any, tabName: any, event: any) => void;
            handleTabRemove: (pane: any, ev: any) => void;
            handleTabAdd: () => void;
            currentName: import("vue").Ref<string>;
            panes: import("vue").Ref<any[]>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input")[], string, {
            type: import("./components/tabs/src/token").ITabType;
            editable: boolean;
            modelValue: string;
            stretch: boolean;
            activeName: string;
            closable: boolean;
            addable: boolean;
            tabPosition: import("./components/tabs/src/token").ITabPosition;
            beforeLeave: import("./components/tabs/src/token").BeforeLeave;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        type?: unknown;
        activeName?: unknown;
        closable?: unknown;
        addable?: unknown;
        modelValue?: unknown;
        editable?: unknown;
        tabPosition?: unknown;
        beforeLeave?: unknown;
        stretch?: unknown;
    } & {
        type: import("./components/tabs/src/token").ITabType;
        editable: boolean;
        modelValue: string;
        stretch: boolean;
        activeName: string;
        closable: boolean;
        addable: boolean;
        tabPosition: import("./components/tabs/src/token").ITabPosition;
    } & {
        beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onTab-click"?: (...args: any[]) => any;
        onEdit?: (...args: any[]) => any;
        "onTab-remove"?: (...args: any[]) => any;
        "onTab-add"?: (...args: any[]) => any;
        onInput?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
        handleTabClick: (tab: any, tabName: any, event: any) => void;
        handleTabRemove: (pane: any, ev: any) => void;
        handleTabAdd: () => void;
        currentName: import("vue").Ref<string>;
        panes: import("vue").Ref<any[]>;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    type?: unknown;
    activeName?: unknown;
    closable?: unknown;
    addable?: unknown;
    modelValue?: unknown;
    editable?: unknown;
    tabPosition?: unknown;
    beforeLeave?: unknown;
    stretch?: unknown;
} & {
    type: import("./components/tabs/src/token").ITabType;
    editable: boolean;
    modelValue: string;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    tabPosition: import("./components/tabs/src/token").ITabPosition;
} & {
    beforeLeave?: import("./components/tabs/src/token").BeforeLeave;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onTab-click"?: (...args: any[]) => any;
    onEdit?: (...args: any[]) => any;
    "onTab-remove"?: (...args: any[]) => any;
    "onTab-add"?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
}, {
    nav$: import("vue").Ref<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>>;
    handleTabClick: (tab: any, tabName: any, event: any) => void;
    handleTabRemove: (pane: any, ev: any) => void;
    handleTabAdd: () => void;
    currentName: import("vue").Ref<string>;
    panes: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input")[], "update:modelValue" | "tab-click" | "edit" | "tab-remove" | "tab-add" | "input", {
    type: import("./components/tabs/src/token").ITabType;
    editable: boolean;
    modelValue: string;
    stretch: boolean;
    activeName: string;
    closable: boolean;
    addable: boolean;
    tabPosition: import("./components/tabs/src/token").ITabPosition;
    beforeLeave: import("./components/tabs/src/token").BeforeLeave;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
} & {
    TabPane: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        }> & Omit<Readonly<{
            isRange?: unknown;
            name?: unknown;
            popperClass?: unknown;
            format?: unknown;
            valueFormat?: unknown;
            type?: unknown;
            clearable?: unknown;
            clearIcon?: unknown;
            editable?: unknown;
            prefixIcon?: unknown;
            size?: unknown;
            readonly?: unknown;
            disabled?: unknown;
            placeholder?: unknown;
            popperOptions?: unknown;
            modelValue?: unknown;
            rangeSeparator?: unknown;
            startPlaceholder?: unknown;
            endPlaceholder?: unknown;
            defaultValue?: unknown;
            defaultTime?: unknown;
            disabledHours?: unknown;
            disabledMinutes?: unknown;
            disabledSeconds?: unknown;
            disabledDate?: unknown;
            cellClassName?: unknown;
            shortcuts?: unknown;
            arrowControl?: unknown;
            validateEvent?: unknown;
            unlinkPanels?: unknown;
        } & {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        } & {
            format?: string;
            valueFormat?: string;
            size?: import("./utils/types").ComponentSize;
            startPlaceholder?: string;
            endPlaceholder?: string;
            defaultValue?: Date | Date[];
            defaultTime?: Date | Date[];
            disabledHours?: Function;
            disabledMinutes?: Function;
            disabledSeconds?: Function;
            disabledDate?: Function;
            cellClassName?: Function;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "name" | "popperClass" | "clearable" | "clearIcon" | "editable" | "prefixIcon" | "readonly" | "disabled" | "placeholder" | "popperOptions" | "modelValue" | "rangeSeparator" | "isRange" | "shortcuts" | "arrowControl" | "validateEvent" | "unlinkPanels">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            isRange?: unknown;
            name?: unknown;
            popperClass?: unknown;
            format?: unknown;
            valueFormat?: unknown;
            type?: unknown;
            clearable?: unknown;
            clearIcon?: unknown;
            editable?: unknown;
            prefixIcon?: unknown;
            size?: unknown;
            readonly?: unknown;
            disabled?: unknown;
            placeholder?: unknown;
            popperOptions?: unknown;
            modelValue?: unknown;
            rangeSeparator?: unknown;
            startPlaceholder?: unknown;
            endPlaceholder?: unknown;
            defaultValue?: unknown;
            defaultTime?: unknown;
            disabledHours?: unknown;
            disabledMinutes?: unknown;
            disabledSeconds?: unknown;
            disabledDate?: unknown;
            cellClassName?: unknown;
            shortcuts?: unknown;
            arrowControl?: unknown;
            validateEvent?: unknown;
            unlinkPanels?: unknown;
        } & {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        } & {
            format?: string;
            valueFormat?: string;
            size?: import("./utils/types").ComponentSize;
            startPlaceholder?: string;
            endPlaceholder?: string;
            defaultValue?: Date | Date[];
            defaultTime?: Date | Date[];
            disabledHours?: Function;
            disabledMinutes?: Function;
            disabledSeconds?: Function;
            disabledDate?: Function;
            cellClassName?: Function;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        isRange?: unknown;
        name?: unknown;
        popperClass?: unknown;
        format?: unknown;
        valueFormat?: unknown;
        type?: unknown;
        clearable?: unknown;
        clearIcon?: unknown;
        editable?: unknown;
        prefixIcon?: unknown;
        size?: unknown;
        readonly?: unknown;
        disabled?: unknown;
        placeholder?: unknown;
        popperOptions?: unknown;
        modelValue?: unknown;
        rangeSeparator?: unknown;
        startPlaceholder?: unknown;
        endPlaceholder?: unknown;
        defaultValue?: unknown;
        defaultTime?: unknown;
        disabledHours?: unknown;
        disabledMinutes?: unknown;
        disabledSeconds?: unknown;
        disabledDate?: unknown;
        cellClassName?: unknown;
        shortcuts?: unknown;
        arrowControl?: unknown;
        validateEvent?: unknown;
        unlinkPanels?: unknown;
    } & {
        type: string;
        name: string | unknown[];
        popperClass: string;
        clearable: boolean;
        clearIcon: string;
        editable: boolean;
        prefixIcon: string;
        readonly: boolean;
        disabled: boolean;
        placeholder: string;
        popperOptions: {};
        modelValue: string | Date | Date[];
        rangeSeparator: string;
        isRange: boolean;
        shortcuts: unknown[];
        arrowControl: boolean;
        validateEvent: boolean;
        unlinkPanels: boolean;
    } & {
        format?: string;
        valueFormat?: string;
        size?: import("./utils/types").ComponentSize;
        startPlaceholder?: string;
        endPlaceholder?: string;
        defaultValue?: Date | Date[];
        defaultTime?: Date | Date[];
        disabledHours?: Function;
        disabledMinutes?: Function;
        disabledSeconds?: Function;
        disabledDate?: Function;
        cellClassName?: Function;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    isRange?: unknown;
    name?: unknown;
    popperClass?: unknown;
    format?: unknown;
    valueFormat?: unknown;
    type?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    editable?: unknown;
    prefixIcon?: unknown;
    size?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    placeholder?: unknown;
    popperOptions?: unknown;
    modelValue?: unknown;
    rangeSeparator?: unknown;
    startPlaceholder?: unknown;
    endPlaceholder?: unknown;
    defaultValue?: unknown;
    defaultTime?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
    disabledDate?: unknown;
    cellClassName?: unknown;
    shortcuts?: unknown;
    arrowControl?: unknown;
    validateEvent?: unknown;
    unlinkPanels?: unknown;
} & {
    type: string;
    name: string | unknown[];
    popperClass: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: {};
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
} & {
    format?: string;
    valueFormat?: string;
    size?: import("./utils/types").ComponentSize;
    startPlaceholder?: string;
    endPlaceholder?: string;
    defaultValue?: Date | Date[];
    defaultTime?: Date | Date[];
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
    disabledDate?: Function;
    cellClassName?: Function;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    type: string;
    name: string | unknown[];
    popperClass: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: {};
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        }> & Omit<Readonly<{
            isRange?: unknown;
            name?: unknown;
            popperClass?: unknown;
            format?: unknown;
            valueFormat?: unknown;
            type?: unknown;
            clearable?: unknown;
            clearIcon?: unknown;
            editable?: unknown;
            prefixIcon?: unknown;
            size?: unknown;
            readonly?: unknown;
            disabled?: unknown;
            placeholder?: unknown;
            popperOptions?: unknown;
            modelValue?: unknown;
            rangeSeparator?: unknown;
            startPlaceholder?: unknown;
            endPlaceholder?: unknown;
            defaultValue?: unknown;
            defaultTime?: unknown;
            disabledHours?: unknown;
            disabledMinutes?: unknown;
            disabledSeconds?: unknown;
            disabledDate?: unknown;
            cellClassName?: unknown;
            shortcuts?: unknown;
            arrowControl?: unknown;
            validateEvent?: unknown;
            unlinkPanels?: unknown;
        } & {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        } & {
            format?: string;
            valueFormat?: string;
            size?: import("./utils/types").ComponentSize;
            startPlaceholder?: string;
            endPlaceholder?: string;
            defaultValue?: Date | Date[];
            defaultTime?: Date | Date[];
            disabledHours?: Function;
            disabledMinutes?: Function;
            disabledSeconds?: Function;
            disabledDate?: Function;
            cellClassName?: Function;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "type" | "name" | "popperClass" | "clearable" | "clearIcon" | "editable" | "prefixIcon" | "readonly" | "disabled" | "placeholder" | "popperOptions" | "modelValue" | "rangeSeparator" | "isRange" | "shortcuts" | "arrowControl" | "validateEvent" | "unlinkPanels">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            isRange?: unknown;
            name?: unknown;
            popperClass?: unknown;
            format?: unknown;
            valueFormat?: unknown;
            type?: unknown;
            clearable?: unknown;
            clearIcon?: unknown;
            editable?: unknown;
            prefixIcon?: unknown;
            size?: unknown;
            readonly?: unknown;
            disabled?: unknown;
            placeholder?: unknown;
            popperOptions?: unknown;
            modelValue?: unknown;
            rangeSeparator?: unknown;
            startPlaceholder?: unknown;
            endPlaceholder?: unknown;
            defaultValue?: unknown;
            defaultTime?: unknown;
            disabledHours?: unknown;
            disabledMinutes?: unknown;
            disabledSeconds?: unknown;
            disabledDate?: unknown;
            cellClassName?: unknown;
            shortcuts?: unknown;
            arrowControl?: unknown;
            validateEvent?: unknown;
            unlinkPanels?: unknown;
        } & {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        } & {
            format?: string;
            valueFormat?: string;
            size?: import("./utils/types").ComponentSize;
            startPlaceholder?: string;
            endPlaceholder?: string;
            defaultValue?: Date | Date[];
            defaultTime?: Date | Date[];
            disabledHours?: Function;
            disabledMinutes?: Function;
            disabledSeconds?: Function;
            disabledDate?: Function;
            cellClassName?: Function;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            type: string;
            name: string | unknown[];
            popperClass: string;
            clearable: boolean;
            clearIcon: string;
            editable: boolean;
            prefixIcon: string;
            readonly: boolean;
            disabled: boolean;
            placeholder: string;
            popperOptions: {};
            modelValue: string | Date | Date[];
            rangeSeparator: string;
            isRange: boolean;
            shortcuts: unknown[];
            arrowControl: boolean;
            validateEvent: boolean;
            unlinkPanels: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        isRange?: unknown;
        name?: unknown;
        popperClass?: unknown;
        format?: unknown;
        valueFormat?: unknown;
        type?: unknown;
        clearable?: unknown;
        clearIcon?: unknown;
        editable?: unknown;
        prefixIcon?: unknown;
        size?: unknown;
        readonly?: unknown;
        disabled?: unknown;
        placeholder?: unknown;
        popperOptions?: unknown;
        modelValue?: unknown;
        rangeSeparator?: unknown;
        startPlaceholder?: unknown;
        endPlaceholder?: unknown;
        defaultValue?: unknown;
        defaultTime?: unknown;
        disabledHours?: unknown;
        disabledMinutes?: unknown;
        disabledSeconds?: unknown;
        disabledDate?: unknown;
        cellClassName?: unknown;
        shortcuts?: unknown;
        arrowControl?: unknown;
        validateEvent?: unknown;
        unlinkPanels?: unknown;
    } & {
        type: string;
        name: string | unknown[];
        popperClass: string;
        clearable: boolean;
        clearIcon: string;
        editable: boolean;
        prefixIcon: string;
        readonly: boolean;
        disabled: boolean;
        placeholder: string;
        popperOptions: {};
        modelValue: string | Date | Date[];
        rangeSeparator: string;
        isRange: boolean;
        shortcuts: unknown[];
        arrowControl: boolean;
        validateEvent: boolean;
        unlinkPanels: boolean;
    } & {
        format?: string;
        valueFormat?: string;
        size?: import("./utils/types").ComponentSize;
        startPlaceholder?: string;
        endPlaceholder?: string;
        defaultValue?: Date | Date[];
        defaultTime?: Date | Date[];
        disabledHours?: Function;
        disabledMinutes?: Function;
        disabledSeconds?: Function;
        disabledDate?: Function;
        cellClassName?: Function;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<() => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    isRange?: unknown;
    name?: unknown;
    popperClass?: unknown;
    format?: unknown;
    valueFormat?: unknown;
    type?: unknown;
    clearable?: unknown;
    clearIcon?: unknown;
    editable?: unknown;
    prefixIcon?: unknown;
    size?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    placeholder?: unknown;
    popperOptions?: unknown;
    modelValue?: unknown;
    rangeSeparator?: unknown;
    startPlaceholder?: unknown;
    endPlaceholder?: unknown;
    defaultValue?: unknown;
    defaultTime?: unknown;
    disabledHours?: unknown;
    disabledMinutes?: unknown;
    disabledSeconds?: unknown;
    disabledDate?: unknown;
    cellClassName?: unknown;
    shortcuts?: unknown;
    arrowControl?: unknown;
    validateEvent?: unknown;
    unlinkPanels?: unknown;
} & {
    type: string;
    name: string | unknown[];
    popperClass: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: {};
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
} & {
    format?: string;
    valueFormat?: string;
    size?: import("./utils/types").ComponentSize;
    startPlaceholder?: string;
    endPlaceholder?: string;
    defaultValue?: Date | Date[];
    defaultTime?: Date | Date[];
    disabledHours?: Function;
    disabledMinutes?: Function;
    disabledSeconds?: Function;
    disabledDate?: Function;
    cellClassName?: Function;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    type: string;
    name: string | unknown[];
    popperClass: string;
    clearable: boolean;
    clearIcon: string;
    editable: boolean;
    prefixIcon: string;
    readonly: boolean;
    disabled: boolean;
    placeholder: string;
    popperOptions: {};
    modelValue: string | Date | Date[];
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    validateEvent: boolean;
    unlinkPanels: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            popperOptions: any;
            modelValue: boolean;
            manualMode: boolean;
            visible: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        }> & Omit<Readonly<{
            manual?: unknown;
            modelValue?: unknown;
            openDelay?: unknown;
            visibleArrow?: unknown;
            tabindex?: unknown;
            arrowOffset?: unknown;
            appendToBody?: unknown;
            autoClose?: unknown;
            boundariesPadding?: unknown;
            content?: unknown;
            class?: unknown;
            style?: unknown;
            hideAfter?: unknown;
            cutoff?: unknown;
            disabled?: unknown;
            effect?: unknown;
            enterable?: unknown;
            manualMode?: unknown;
            showAfter?: unknown;
            offset?: unknown;
            placement?: unknown;
            popperClass?: unknown;
            pure?: unknown;
            popperOptions?: unknown;
            showArrow?: unknown;
            strategy?: unknown;
            transition?: unknown;
            trigger?: unknown;
            visible?: unknown;
            stopPopperMouseEvent?: unknown;
            gpuAcceleration?: unknown;
            fallbackPlacements?: unknown;
        } & {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            manualMode: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        } & {
            style?: Record<string, any>;
            popperOptions?: any;
            modelValue?: boolean;
            visible?: boolean;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "offset" | "class" | "placement" | "strategy" | "popperClass" | "disabled" | "popperOptions" | "modelValue" | "manualMode" | "visible" | "effect" | "pure" | "showArrow" | "appendToBody" | "fallbackPlacements" | "transition" | "gpuAcceleration" | "trigger" | "content" | "manual" | "openDelay" | "visibleArrow" | "tabindex" | "arrowOffset" | "autoClose" | "boundariesPadding" | "hideAfter" | "cutoff" | "enterable" | "showAfter" | "stopPopperMouseEvent">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            manual?: unknown;
            modelValue?: unknown;
            openDelay?: unknown;
            visibleArrow?: unknown;
            tabindex?: unknown;
            arrowOffset?: unknown;
            appendToBody?: unknown;
            autoClose?: unknown;
            boundariesPadding?: unknown;
            content?: unknown;
            class?: unknown;
            style?: unknown;
            hideAfter?: unknown;
            cutoff?: unknown;
            disabled?: unknown;
            effect?: unknown;
            enterable?: unknown;
            manualMode?: unknown;
            showAfter?: unknown;
            offset?: unknown;
            placement?: unknown;
            popperClass?: unknown;
            pure?: unknown;
            popperOptions?: unknown;
            showArrow?: unknown;
            strategy?: unknown;
            transition?: unknown;
            trigger?: unknown;
            visible?: unknown;
            stopPopperMouseEvent?: unknown;
            gpuAcceleration?: unknown;
            fallbackPlacements?: unknown;
        } & {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            manualMode: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        } & {
            style?: Record<string, any>;
            popperOptions?: any;
            modelValue?: boolean;
            visible?: boolean;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            popper: any;
            onUpdateVisible: (val: any) => void;
            updatePopper: () => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            popperOptions: any;
            modelValue: boolean;
            manualMode: boolean;
            visible: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        manual?: unknown;
        modelValue?: unknown;
        openDelay?: unknown;
        visibleArrow?: unknown;
        tabindex?: unknown;
        arrowOffset?: unknown;
        appendToBody?: unknown;
        autoClose?: unknown;
        boundariesPadding?: unknown;
        content?: unknown;
        class?: unknown;
        style?: unknown;
        hideAfter?: unknown;
        cutoff?: unknown;
        disabled?: unknown;
        effect?: unknown;
        enterable?: unknown;
        manualMode?: unknown;
        showAfter?: unknown;
        offset?: unknown;
        placement?: unknown;
        popperClass?: unknown;
        pure?: unknown;
        popperOptions?: unknown;
        showArrow?: unknown;
        strategy?: unknown;
        transition?: unknown;
        trigger?: unknown;
        visible?: unknown;
        stopPopperMouseEvent?: unknown;
        gpuAcceleration?: unknown;
        fallbackPlacements?: unknown;
    } & {
        offset: number;
        class: string;
        placement: import("./components/popper").Placement;
        strategy: import("@popperjs/core").PositioningStrategy;
        popperClass: string;
        disabled: boolean;
        manualMode: boolean;
        effect: import("./components/popper").Effect;
        pure: boolean;
        showArrow: boolean;
        appendToBody: boolean;
        fallbackPlacements: import("./components/popper").Placement[];
        transition: string;
        gpuAcceleration: boolean;
        trigger: import("./components/popper/src/use-popper").Trigger;
        content: string;
        manual: boolean;
        openDelay: number;
        visibleArrow: boolean;
        tabindex: string | number;
        arrowOffset: number;
        autoClose: number;
        boundariesPadding: number;
        hideAfter: number;
        cutoff: boolean;
        enterable: boolean;
        showAfter: number;
        stopPopperMouseEvent: boolean;
    } & {
        style?: Record<string, any>;
        popperOptions?: any;
        modelValue?: boolean;
        visible?: boolean;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        popper: any;
        onUpdateVisible: (val: any) => void;
        updatePopper: () => any;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    manual?: unknown;
    modelValue?: unknown;
    openDelay?: unknown;
    visibleArrow?: unknown;
    tabindex?: unknown;
    arrowOffset?: unknown;
    appendToBody?: unknown;
    autoClose?: unknown;
    boundariesPadding?: unknown;
    content?: unknown;
    class?: unknown;
    style?: unknown;
    hideAfter?: unknown;
    cutoff?: unknown;
    disabled?: unknown;
    effect?: unknown;
    enterable?: unknown;
    manualMode?: unknown;
    showAfter?: unknown;
    offset?: unknown;
    placement?: unknown;
    popperClass?: unknown;
    pure?: unknown;
    popperOptions?: unknown;
    showArrow?: unknown;
    strategy?: unknown;
    transition?: unknown;
    trigger?: unknown;
    visible?: unknown;
    stopPopperMouseEvent?: unknown;
    gpuAcceleration?: unknown;
    fallbackPlacements?: unknown;
} & {
    offset: number;
    class: string;
    placement: import("./components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    popperClass: string;
    disabled: boolean;
    manualMode: boolean;
    effect: import("./components/popper").Effect;
    pure: boolean;
    showArrow: boolean;
    appendToBody: boolean;
    fallbackPlacements: import("./components/popper").Placement[];
    transition: string;
    gpuAcceleration: boolean;
    trigger: import("./components/popper/src/use-popper").Trigger;
    content: string;
    manual: boolean;
    openDelay: number;
    visibleArrow: boolean;
    tabindex: string | number;
    arrowOffset: number;
    autoClose: number;
    boundariesPadding: number;
    hideAfter: number;
    cutoff: boolean;
    enterable: boolean;
    showAfter: number;
    stopPopperMouseEvent: boolean;
} & {
    style?: Record<string, any>;
    popperOptions?: any;
    modelValue?: boolean;
    visible?: boolean;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    popper: any;
    onUpdateVisible: (val: any) => void;
    updatePopper: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    offset: number;
    class: string;
    placement: import("./components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    popperClass: string;
    disabled: boolean;
    popperOptions: any;
    modelValue: boolean;
    manualMode: boolean;
    visible: boolean;
    effect: import("./components/popper").Effect;
    pure: boolean;
    showArrow: boolean;
    appendToBody: boolean;
    fallbackPlacements: import("./components/popper").Placement[];
    transition: string;
    gpuAcceleration: boolean;
    trigger: import("./components/popper/src/use-popper").Trigger;
    content: string;
    manual: boolean;
    openDelay: number;
    visibleArrow: boolean;
    tabindex: string | number;
    arrowOffset: number;
    autoClose: number;
    boundariesPadding: number;
    hideAfter: number;
    cutoff: boolean;
    enterable: boolean;
    showAfter: number;
    stopPopperMouseEvent: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: (app: import("vue").App<any>, ...options: any[]) => any;
}) | ({
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            popperOptions: any;
            modelValue: boolean;
            manualMode: boolean;
            visible: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        }> & Omit<Readonly<{
            manual?: unknown;
            modelValue?: unknown;
            openDelay?: unknown;
            visibleArrow?: unknown;
            tabindex?: unknown;
            arrowOffset?: unknown;
            appendToBody?: unknown;
            autoClose?: unknown;
            boundariesPadding?: unknown;
            content?: unknown;
            class?: unknown;
            style?: unknown;
            hideAfter?: unknown;
            cutoff?: unknown;
            disabled?: unknown;
            effect?: unknown;
            enterable?: unknown;
            manualMode?: unknown;
            showAfter?: unknown;
            offset?: unknown;
            placement?: unknown;
            popperClass?: unknown;
            pure?: unknown;
            popperOptions?: unknown;
            showArrow?: unknown;
            strategy?: unknown;
            transition?: unknown;
            trigger?: unknown;
            visible?: unknown;
            stopPopperMouseEvent?: unknown;
            gpuAcceleration?: unknown;
            fallbackPlacements?: unknown;
        } & {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            manualMode: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        } & {
            style?: Record<string, any>;
            popperOptions?: any;
            modelValue?: boolean;
            visible?: boolean;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "offset" | "class" | "placement" | "strategy" | "popperClass" | "disabled" | "popperOptions" | "modelValue" | "manualMode" | "visible" | "effect" | "pure" | "showArrow" | "appendToBody" | "fallbackPlacements" | "transition" | "gpuAcceleration" | "trigger" | "content" | "manual" | "openDelay" | "visibleArrow" | "tabindex" | "arrowOffset" | "autoClose" | "boundariesPadding" | "hideAfter" | "cutoff" | "enterable" | "showAfter" | "stopPopperMouseEvent">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<{
            manual?: unknown;
            modelValue?: unknown;
            openDelay?: unknown;
            visibleArrow?: unknown;
            tabindex?: unknown;
            arrowOffset?: unknown;
            appendToBody?: unknown;
            autoClose?: unknown;
            boundariesPadding?: unknown;
            content?: unknown;
            class?: unknown;
            style?: unknown;
            hideAfter?: unknown;
            cutoff?: unknown;
            disabled?: unknown;
            effect?: unknown;
            enterable?: unknown;
            manualMode?: unknown;
            showAfter?: unknown;
            offset?: unknown;
            placement?: unknown;
            popperClass?: unknown;
            pure?: unknown;
            popperOptions?: unknown;
            showArrow?: unknown;
            strategy?: unknown;
            transition?: unknown;
            trigger?: unknown;
            visible?: unknown;
            stopPopperMouseEvent?: unknown;
            gpuAcceleration?: unknown;
            fallbackPlacements?: unknown;
        } & {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            manualMode: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        } & {
            style?: Record<string, any>;
            popperOptions?: any;
            modelValue?: boolean;
            visible?: boolean;
        }> & {
            "onUpdate:modelValue"?: (...args: any[]) => any;
        }, {
            popper: any;
            onUpdateVisible: (val: any) => void;
            updatePopper: () => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], string, {
            offset: number;
            class: string;
            placement: import("./components/popper").Placement;
            strategy: import("@popperjs/core").PositioningStrategy;
            popperClass: string;
            disabled: boolean;
            popperOptions: any;
            modelValue: boolean;
            manualMode: boolean;
            visible: boolean;
            effect: import("./components/popper").Effect;
            pure: boolean;
            showArrow: boolean;
            appendToBody: boolean;
            fallbackPlacements: import("./components/popper").Placement[];
            transition: string;
            gpuAcceleration: boolean;
            trigger: import("./components/popper/src/use-popper").Trigger;
            content: string;
            manual: boolean;
            openDelay: number;
            visibleArrow: boolean;
            tabindex: string | number;
            arrowOffset: number;
            autoClose: number;
            boundariesPadding: number;
            hideAfter: number;
            cutoff: boolean;
            enterable: boolean;
            showAfter: number;
            stopPopperMouseEvent: boolean;
        }> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    } & Readonly<{
        manual?: unknown;
        modelValue?: unknown;
        openDelay?: unknown;
        visibleArrow?: unknown;
        tabindex?: unknown;
        arrowOffset?: unknown;
        appendToBody?: unknown;
        autoClose?: unknown;
        boundariesPadding?: unknown;
        content?: unknown;
        class?: unknown;
        style?: unknown;
        hideAfter?: unknown;
        cutoff?: unknown;
        disabled?: unknown;
        effect?: unknown;
        enterable?: unknown;
        manualMode?: unknown;
        showAfter?: unknown;
        offset?: unknown;
        placement?: unknown;
        popperClass?: unknown;
        pure?: unknown;
        popperOptions?: unknown;
        showArrow?: unknown;
        strategy?: unknown;
        transition?: unknown;
        trigger?: unknown;
        visible?: unknown;
        stopPopperMouseEvent?: unknown;
        gpuAcceleration?: unknown;
        fallbackPlacements?: unknown;
    } & {
        offset: number;
        class: string;
        placement: import("./components/popper").Placement;
        strategy: import("@popperjs/core").PositioningStrategy;
        popperClass: string;
        disabled: boolean;
        manualMode: boolean;
        effect: import("./components/popper").Effect;
        pure: boolean;
        showArrow: boolean;
        appendToBody: boolean;
        fallbackPlacements: import("./components/popper").Placement[];
        transition: string;
        gpuAcceleration: boolean;
        trigger: import("./components/popper/src/use-popper").Trigger;
        content: string;
        manual: boolean;
        openDelay: number;
        visibleArrow: boolean;
        tabindex: string | number;
        arrowOffset: number;
        autoClose: number;
        boundariesPadding: number;
        hideAfter: number;
        cutoff: boolean;
        enterable: boolean;
        showAfter: number;
        stopPopperMouseEvent: boolean;
    } & {
        style?: Record<string, any>;
        popperOptions?: any;
        modelValue?: boolean;
        visible?: boolean;
    }> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
    } & import("vue").ShallowUnwrapRef<{
        popper: any;
        onUpdateVisible: (val: any) => void;
        updatePopper: () => any;
    }> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    manual?: unknown;
    modelValue?: unknown;
    openDelay?: unknown;
    visibleArrow?: unknown;
    tabindex?: unknown;
    arrowOffset?: unknown;
    appendToBody?: unknown;
    autoClose?: unknown;
    boundariesPadding?: unknown;
    content?: unknown;
    class?: unknown;
    style?: unknown;
    hideAfter?: unknown;
    cutoff?: unknown;
    disabled?: unknown;
    effect?: unknown;
    enterable?: unknown;
    manualMode?: unknown;
    showAfter?: unknown;
    offset?: unknown;
    placement?: unknown;
    popperClass?: unknown;
    pure?: unknown;
    popperOptions?: unknown;
    showArrow?: unknown;
    strategy?: unknown;
    transition?: unknown;
    trigger?: unknown;
    visible?: unknown;
    stopPopperMouseEvent?: unknown;
    gpuAcceleration?: unknown;
    fallbackPlacements?: unknown;
} & {
    offset: number;
    class: string;
    placement: import("./components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    popperClass: string;
    disabled: boolean;
    manualMode: boolean;
    effect: import("./components/popper").Effect;
    pure: boolean;
    showArrow: boolean;
    appendToBody: boolean;
    fallbackPlacements: import("./components/popper").Placement[];
    transition: string;
    gpuAcceleration: boolean;
    trigger: import("./components/popper/src/use-popper").Trigger;
    content: string;
    manual: boolean;
    openDelay: number;
    visibleArrow: boolean;
    tabindex: string | number;
    arrowOffset: number;
    autoClose: number;
    boundariesPadding: number;
    hideAfter: number;
    cutoff: boolean;
    enterable: boolean;
    showAfter: number;
    stopPopperMouseEvent: boolean;
} & {
    style?: Record<string, any>;
    popperOptions?: any;
    modelValue?: boolean;
    visible?: boolean;
}> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    popper: any;
    onUpdateVisible: (val: any) => void;
    updatePopper: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", {
    offset: number;
    class: string;
    placement: import("./components/popper").Placement;
    strategy: import("@popperjs/core").PositioningStrategy;
    popperClass: string;
    disabled: boolean;
    popperOptions: any;
    modelValue: boolean;
    manualMode: boolean;
    visible: boolean;
    effect: import("./components/popper").Effect;
    pure: boolean;
    showArrow: boolean;
    appendToBody: boolean;
    fallbackPlacements: import("./components/popper").Placement[];
    transition: string;
    gpuAcceleration: boolean;
    trigger: import("./components/popper/src/use-popper").Trigger;
    content: string;
    manual: boolean;
    openDelay: number;
    visibleArrow: boolean;
    tabindex: string | number;
    arrowOffset: number;
    autoClose: number;
    boundariesPadding: number;
    hideAfter: number;
    cutoff: boolean;
    enterable: boolean;
    showAfter: number;
    stopPopperMouseEvent: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}))[];
export default _default;
