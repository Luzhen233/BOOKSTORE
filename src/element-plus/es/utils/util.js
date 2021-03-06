import { getCurrentInstance } from 'vue';
import { camelize, capitalize, extend, hasOwn, hyphenate, isArray, isObject, isString, isFunction, looseEqual, toRawType, } from '@vue/shared';
import isEqualWith from 'lodash/isEqualWith';
import isServer from './isServer';
import { debugWarn, throwError } from './error';
export const SCOPE = 'Util';
export function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}
export const getValueByPath = (obj, paths = '') => {
    let ret = obj;
    paths.split('.').map((path) => {
        ret = ret === null || ret === void 0 ? void 0 : ret[path];
    });
    return ret;
};
export function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    let key, value;
    if (obj && hasOwn(obj, path)) {
        key = path;
        value = tempObj === null || tempObj === void 0 ? void 0 : tempObj[path];
    }
    else {
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');
        const keyArr = path.split('.');
        let i = 0;
        for (i; i < keyArr.length - 1; i++) {
            if (!tempObj && !strict)
                break;
            const key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            }
            else {
                if (strict) {
                    throwError(SCOPE, 'Please transfer a valid prop path to form item!');
                }
                break;
            }
        }
        key = keyArr[i];
        value = tempObj === null || tempObj === void 0 ? void 0 : tempObj[keyArr[i]];
    }
    return {
        o: tempObj,
        k: key,
        v: value,
    };
}
export const generateId = () => Math.floor(Math.random() * 10000);
export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
export const coerceTruthyValueToArray = (arr) => {
    if (!arr && arr !== 0) {
        return [];
    }
    return Array.isArray(arr) ? arr : [arr];
};
export const isFirefox = function () {
    return !isServer && !!window.navigator.userAgent.match(/firefox/i);
};
export const autoprefixer = function (style) {
    const rules = ['transform', 'transition', 'animation'];
    const prefixes = ['ms-', 'webkit-'];
    rules.forEach((rule) => {
        const value = style[rule];
        if (rule && value) {
            prefixes.forEach((prefix) => {
                style[prefix + rule] = value;
            });
        }
    });
    return style;
};
export const kebabCase = hyphenate;
export { isVNode } from 'vue';
export { hasOwn, isObject, isArray, isString, capitalize, camelize, looseEqual, extend, };
export const isBool = (val) => typeof val === 'boolean';
export const isNumber = (val) => typeof val === 'number';
export const isHTMLElement = (val) => toRawType(val).startsWith('HTML');
export function rafThrottle(fn) {
    let locked = false;
    return function (...args) {
        if (locked)
            return;
        locked = true;
        window.requestAnimationFrame(() => {
            Reflect.apply(fn, this, args);
            locked = false;
        });
    };
}
export const clearTimer = (timer) => {
    clearTimeout(timer.value);
    timer.value = null;
};
export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export function isUndefined(val) {
    return val === undefined;
}
export function useGlobalConfig() {
    const vm = getCurrentInstance();
    if ('$ELEMENT' in vm.proxy) {
        return vm.proxy.$ELEMENT;
    }
    return {};
}
export function isEmpty(val) {
    if ((!val && val !== 0) ||
        (isArray(val) && !val.length) ||
        (isObject(val) && !Object.keys(val).length))
        return true;
    return false;
}
export function arrayFlat(arr) {
    return arr.reduce((acm, item) => {
        const val = Array.isArray(item) ? arrayFlat(item) : item;
        return acm.concat(val);
    }, []);
}
export function deduplicate(arr) {
    return Array.from(new Set(arr));
}
export function $(ref) {
    return ref.value;
}
export function addUnit(value) {
    if (isString(value)) {
        return value;
    }
    else if (isNumber(value)) {
        return `${value}px`;
    }
    debugWarn(SCOPE, 'binding value must be a string or number');
    return '';
}
export function isEqualWithFunction(obj, other) {
    return isEqualWith(obj, other, (objVal, otherVal) => {
        return isFunction(objVal) && isFunction(otherVal)
            ? `${objVal}` === `${otherVal}`
            : undefined;
    });
}
export const refAttacher = (ref) => {
    return (val) => {
        ref.value = val;
    };
};
