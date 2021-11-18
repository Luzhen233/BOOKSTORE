import type Node from './model/node';
import type { ComponentInternalInstance, PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils/types';
import type { TreeNodeData, TreeKey, TreeData } from './tree.type';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    emptyText: {
        type: StringConstructor;
    };
    renderAfterExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeKey: StringConstructor;
    checkStrictly: BooleanConstructor;
    defaultExpandAll: BooleanConstructor;
    expandOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOnClickNode: BooleanConstructor;
    checkDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoExpandParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultCheckedKeys: PropType<TreeKey[]>;
    defaultExpandedKeys: PropType<TreeKey[]>;
    currentNodeKey: PropType<string | number>;
    renderContent: FunctionConstructor;
    showCheckbox: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDrag: FunctionConstructor;
    allowDrop: FunctionConstructor;
    props: {
        type: PropType<import("./tree.type").TreeOptionProps>;
        default: () => {
            children: string;
            label: string;
            disabled: string;
        };
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlightCurrent: BooleanConstructor;
    load: PropType<import("./tree.type").LoadFunction>;
    filterNodeMethod: PropType<import("./tree.type").FilterNodeMethodFunction>;
    accordion: BooleanConstructor;
    indent: {
        type: NumberConstructor;
        default: number;
    };
    iconClass: StringConstructor;
}, {
    store: import("vue").Ref<{
        currentNode: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: Node | import("./tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        currentNodeKey: TreeKey;
        nodesMap: {
            [x: string]: {
                id: number;
                text: string;
                checked: boolean;
                indeterminate: boolean;
                data: {
                    [x: string]: any;
                };
                expanded: boolean;
                parent: any;
                visible: boolean;
                isCurrent: boolean;
                store: any;
                isLeafByUser: boolean;
                isLeaf: boolean;
                canFocus: boolean;
                level: number;
                loaded: boolean;
                childNodes: any[];
                loading: boolean;
                initialize: () => void;
                setData: (data: TreeNodeData) => void;
                readonly label: string;
                readonly key: TreeKey;
                readonly disabled: boolean;
                readonly nextSibling: any | null;
                readonly previousSibling: any | null;
                contains: (target: Node, deep?: boolean) => boolean;
                remove: () => void;
                insertChild: (child?: Node | import("./tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
                insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
                insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
                removeChild: (child: Node) => void;
                removeChildByData: (data: TreeNodeData) => void;
                expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
                doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
                collapse: () => void;
                shouldLoadData: () => boolean;
                updateLeafState: () => void;
                setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
                getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
                updateChildren: () => void;
                loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            };
        };
        root: {
            id: number;
            text: string;
            checked: boolean;
            indeterminate: boolean;
            data: {
                [x: string]: any;
            };
            expanded: boolean;
            parent: any;
            visible: boolean;
            isCurrent: boolean;
            store: any;
            isLeafByUser: boolean;
            isLeaf: boolean;
            canFocus: boolean;
            level: number;
            loaded: boolean;
            childNodes: any[];
            loading: boolean;
            initialize: () => void;
            setData: (data: TreeNodeData) => void;
            readonly label: string;
            readonly key: TreeKey;
            readonly disabled: boolean;
            readonly nextSibling: any | null;
            readonly previousSibling: any | null;
            contains: (target: Node, deep?: boolean) => boolean;
            remove: () => void;
            insertChild: (child?: Node | import("./tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
            insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
            removeChild: (child: Node) => void;
            removeChildByData: (data: TreeNodeData) => void;
            expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
            doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
            collapse: () => void;
            shouldLoadData: () => boolean;
            updateLeafState: () => void;
            setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
            getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
            updateChildren: () => void;
            loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        };
        data: {
            [x: string]: any;
        }[];
        lazy: boolean;
        load: import("./tree.type").LoadFunction;
        filterNodeMethod: import("./tree.type").FilterNodeMethodFunction;
        key: TreeKey;
        defaultCheckedKeys: TreeKey[];
        checkStrictly: boolean;
        defaultExpandedKeys: TreeKey[];
        autoExpandParent: boolean;
        defaultExpandAll: boolean;
        checkDescendants: boolean;
        props: {
            children: string;
            label: string;
            disabled: string;
            isLeaf?: boolean | undefined;
        };
        initialize: () => void;
        filter: (value: any) => void;
        setData: (newVal: TreeData) => void;
        getNode: (data: TreeNodeData | TreeKey) => Node;
        insertBefore: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
        insertAfter: (data: TreeNodeData, refData: TreeNodeData | TreeKey) => void;
        remove: (data: Node | TreeNodeData) => void;
        append: (data: TreeNodeData, parentData: Node | TreeNodeData | TreeKey) => void;
        _initDefaultCheckedNodes: () => void;
        _initDefaultCheckedNode: (node: Node) => void;
        setDefaultCheckedKey: (newVal: TreeKey[]) => void;
        registerNode: (node: Node) => void;
        deregisterNode: (node: Node) => void;
        getCheckedNodes: (leafOnly?: boolean, includeHalfChecked?: boolean) => TreeNodeData[];
        getCheckedKeys: (leafOnly?: boolean) => TreeKey[];
        getHalfCheckedNodes: () => TreeNodeData[];
        getHalfCheckedKeys: () => TreeKey[];
        _getAllNodes: () => Node[];
        updateChildren: (key: TreeKey, data: TreeData) => void;
        _setCheckedKeys: (key: TreeKey, leafOnly: boolean | undefined, checkedKeys: {
            [key: string]: boolean;
        }) => void;
        setCheckedNodes: (array: Node[], leafOnly?: boolean) => void;
        setCheckedKeys: (keys: TreeKey[], leafOnly?: boolean) => void;
        setDefaultExpandedKeys: (keys: TreeKey[]) => void;
        setChecked: (data: TreeNodeData | TreeKey, checked: boolean, deep: boolean) => void;
        getCurrentNode: () => Node;
        setCurrentNode: (currentNode: Node) => void;
        setUserCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
        setCurrentNodeKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
    }>;
    root: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: Node | import("./tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    currentNode: import("vue").Ref<{
        id: number;
        text: string;
        checked: boolean;
        indeterminate: boolean;
        data: {
            [x: string]: any;
        };
        expanded: boolean;
        parent: any;
        visible: boolean;
        isCurrent: boolean;
        store: any;
        isLeafByUser: boolean;
        isLeaf: boolean;
        canFocus: boolean;
        level: number;
        loaded: boolean;
        childNodes: any[];
        loading: boolean;
        initialize: () => void;
        setData: (data: TreeNodeData) => void;
        readonly label: string;
        readonly key: TreeKey;
        readonly disabled: boolean;
        readonly nextSibling: any | null;
        readonly previousSibling: any | null;
        contains: (target: Node, deep?: boolean) => boolean;
        remove: () => void;
        insertChild: (child?: Node | import("./tree.type").FakeNode | undefined, index?: number | undefined, batch?: boolean | undefined) => void;
        insertBefore: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        insertAfter: (child: Node | import("./tree.type").FakeNode, ref: Node) => void;
        removeChild: (child: Node) => void;
        removeChildByData: (data: TreeNodeData) => void;
        expand: (callback?: (() => void) | undefined, expandParent?: boolean | undefined) => void;
        doCreateChildren: (array: TreeNodeData[], defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
        collapse: () => void;
        shouldLoadData: () => boolean;
        updateLeafState: () => void;
        setChecked: (value?: string | boolean | undefined, deep?: boolean | undefined, recursion?: boolean | undefined, passValue?: boolean | undefined) => void;
        getChildren: (forceInit?: boolean) => TreeNodeData | TreeNodeData[];
        updateChildren: () => void;
        loadData: (callback: (node: Node) => void, defaultProps?: import("./tree.type").TreeNodeLoadedDefaultProps) => void;
    }>;
    dragState: import("vue").Ref<{
        showDropIndicator: boolean;
        draggingNode: null;
        dropNode: null;
        allowDrop: boolean;
        dropType: null;
    }>;
    el$: import("vue").Ref<Nullable<HTMLElement>>;
    dropIndicator$: import("vue").Ref<Nullable<HTMLElement>>;
    isEmpty: import("vue").ComputedRef<boolean>;
    filter: (value: any) => void;
    getNodeKey: (node: Node) => any;
    getNodePath: (data: TreeKey | TreeNodeData) => TreeNodeData[];
    getCheckedNodes: (leafOnly: boolean, includeHalfChecked: boolean) => TreeNodeData[];
    getCheckedKeys: (leafOnly: boolean) => TreeKey[];
    getCurrentNode: () => TreeNodeData;
    getCurrentKey: () => any;
    setCheckedNodes: (nodes: Node[], leafOnly: boolean) => void;
    setCheckedKeys: (keys: any, leafOnly: boolean) => void;
    setChecked: (data: TreeKey | TreeNodeData, checked: boolean, deep: boolean) => void;
    getHalfCheckedNodes: () => TreeNodeData[];
    getHalfCheckedKeys: () => TreeKey[];
    setCurrentNode: (node: Node, shouldAutoExpandParent?: boolean) => void;
    setCurrentKey: (key: TreeKey, shouldAutoExpandParent?: boolean) => void;
    t: (...args: any[]) => string;
    getNode: (data: TreeKey | TreeNodeData) => Node;
    remove: (data: TreeNodeData | Node) => void;
    append: (data: TreeNodeData, parentNode: TreeNodeData | TreeKey | Node) => void;
    insertBefore: (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => void;
    insertAfter: (data: TreeNodeData, refNode: TreeKey | TreeNodeData) => void;
    handleNodeExpand: (nodeData: TreeNodeData, node: Node, instance: ComponentInternalInstance) => void;
    updateKeyChildren: (key: TreeKey, data: TreeData) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over")[], "current-change" | "node-expand" | "check-change" | "node-click" | "node-contextmenu" | "node-collapse" | "check" | "node-drag-start" | "node-drag-end" | "node-drop" | "node-drag-leave" | "node-drag-enter" | "node-drag-over", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    emptyText?: unknown;
    renderAfterExpand?: unknown;
    nodeKey?: unknown;
    checkStrictly?: unknown;
    defaultExpandAll?: unknown;
    expandOnClickNode?: unknown;
    checkOnClickNode?: unknown;
    checkDescendants?: unknown;
    autoExpandParent?: unknown;
    defaultCheckedKeys?: unknown;
    defaultExpandedKeys?: unknown;
    currentNodeKey?: unknown;
    renderContent?: unknown;
    showCheckbox?: unknown;
    draggable?: unknown;
    allowDrag?: unknown;
    allowDrop?: unknown;
    props?: unknown;
    lazy?: unknown;
    highlightCurrent?: unknown;
    load?: unknown;
    filterNodeMethod?: unknown;
    accordion?: unknown;
    indent?: unknown;
    iconClass?: unknown;
} & {
    props: import("./tree.type").TreeOptionProps;
    data: unknown[];
    checkStrictly: boolean;
    lazy: boolean;
    accordion: boolean;
    defaultExpandAll: boolean;
    indent: number;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    draggable: boolean;
    highlightCurrent: boolean;
} & {
    iconClass?: string | undefined;
    emptyText?: string | undefined;
    load?: import("./tree.type").LoadFunction | undefined;
    renderContent?: Function | undefined;
    defaultCheckedKeys?: TreeKey[] | undefined;
    defaultExpandedKeys?: TreeKey[] | undefined;
    filterNodeMethod?: import("./tree.type").FilterNodeMethodFunction | undefined;
    nodeKey?: string | undefined;
    allowDrag?: Function | undefined;
    allowDrop?: Function | undefined;
    currentNodeKey?: string | number | undefined;
}> & {
    "onCurrent-change"?: ((...args: any[]) => any) | undefined;
    "onNode-expand"?: ((...args: any[]) => any) | undefined;
    "onCheck-change"?: ((...args: any[]) => any) | undefined;
    "onNode-click"?: ((...args: any[]) => any) | undefined;
    "onNode-contextmenu"?: ((...args: any[]) => any) | undefined;
    "onNode-collapse"?: ((...args: any[]) => any) | undefined;
    onCheck?: ((...args: any[]) => any) | undefined;
    "onNode-drag-start"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-end"?: ((...args: any[]) => any) | undefined;
    "onNode-drop"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-leave"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-enter"?: ((...args: any[]) => any) | undefined;
    "onNode-drag-over"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("./tree.type").TreeOptionProps;
    data: unknown[];
    checkStrictly: boolean;
    lazy: boolean;
    accordion: boolean;
    defaultExpandAll: boolean;
    indent: number;
    renderAfterExpand: boolean;
    showCheckbox: boolean;
    expandOnClickNode: boolean;
    checkOnClickNode: boolean;
    checkDescendants: boolean;
    autoExpandParent: boolean;
    draggable: boolean;
    highlightCurrent: boolean;
}>;
export default _default;
