import type { ExtractPropTypes } from 'vue';
import type { ObjectFitProperty } from 'csstype';
export declare const avatarProps: {
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<readonly [NumberConstructor, StringConstructor], "large", unknown, "small" | "large" | "medium", number>;
    readonly shape: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "circle", unknown, "circle" | "square", unknown>;
    readonly icon: StringConstructor;
    readonly src: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly alt: StringConstructor;
    readonly srcSet: StringConstructor;
    readonly fit: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<ObjectFitProperty>, "cover", unknown, unknown, unknown>;
};
export declare type AvatarProps = ExtractPropTypes<typeof avatarProps>;
export declare const avatarEmits: {
    error: (evt: Event) => boolean;
};
export declare type AvatarEmits = typeof avatarEmits;