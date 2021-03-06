"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refAttacher = exports.isEqualWithFunction = exports.addUnit = exports.$ = exports.deduplicate = exports.arrayFlat = exports.isEmpty = exports.useGlobalConfig = exports.isUndefined = exports.getRandomInt = exports.clearTimer = exports.rafThrottle = exports.isHTMLElement = exports.isNumber = exports.isBool = exports.extend = exports.looseEqual = exports.camelize = exports.capitalize = exports.isString = exports.isArray = exports.isObject = exports.hasOwn = exports.isVNode = exports.kebabCase = exports.autoprefixer = exports.isFirefox = exports.coerceTruthyValueToArray = exports.escapeRegexpString = exports.generateId = exports.getPropByPath = exports.getValueByPath = exports.toObject = exports.SCOPE = void 0;
const vue_1 = require("vue");
const shared_1 = require("@vue/shared");
Object.defineProperty(exports, "camelize", { enumerable: true, get: function () { return shared_1.camelize; } });
Object.defineProperty(exports, "capitalize", { enumerable: true, get: function () { return shared_1.capitalize; } });
Object.defineProperty(exports, "extend", { enumerable: true, get: function () { return shared_1.extend; } });
Object.defineProperty(exports, "hasOwn", { enumerable: true, get: function () { return shared_1.hasOwn; } });
Object.defineProperty(exports, "isArray", { enumerable: true, get: function () { return shared_1.isArray; } });
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return shared_1.isObject; } });
Object.defineProperty(exports, "isString", { enumerable: true, get: function () { return shared_1.isString; } });
Object.defineProperty(exports, "looseEqual", { enumerable: true, get: function () { return shared_1.looseEqual; } });
const isEqualWith_1 = __importDefault(require("lodash/isEqualWith"));
const isServer_1 = __importDefault(require("./isServer"));
const error_1 = require("./error");
exports.SCOPE = 'Util';
function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            (0, shared_1.extend)(res, arr[i]);
        }
    }
    return res;
}
exports.toObject = toObject;
const getValueByPath = (obj, paths = '') => {
    let ret = obj;
    paths.split('.').map((path) => {
        ret = ret === null || ret === void 0 ? void 0 : ret[path];
    });
    return ret;
};
exports.getValueByPath = getValueByPath;
function getPropByPath(obj, path, strict) {
    let tempObj = obj;
    let key, value;
    if (obj && (0, shared_1.hasOwn)(obj, path)) {
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
                    (0, error_1.throwError)(exports.SCOPE, 'Please transfer a valid prop path to form item!');
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
exports.getPropByPath = getPropByPath;
const generateId = () => Math.floor(Math.random() * 10000);
exports.generateId = generateId;
const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
exports.escapeRegexpString = escapeRegexpString;
const coerceTruthyValueToArray = (arr) => {
    if (!arr && arr !== 0) {
        return [];
    }
    return Array.isArray(arr) ? arr : [arr];
};
exports.coerceTruthyValueToArray = coerceTruthyValueToArray;
const isFirefox = function () {
    return !isServer_1.default && !!window.navigator.userAgent.match(/firefox/i);
};
exports.isFirefox = isFirefox;
const autoprefixer = function (style) {
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
exports.autoprefixer = autoprefixer;
exports.kebabCase = shared_1.hyphenate;
var vue_2 = require("vue");
Object.defineProperty(exports, "isVNode", { enumerable: true, get: function () { return vue_2.isVNode; } });
const isBool = (val) => typeof val === 'boolean';
exports.isBool = isBool;
const isNumber = (val) => typeof val === 'number';
exports.isNumber = isNumber;
const isHTMLElement = (val) => (0, shared_1.toRawType)(val).startsWith('HTML');
exports.isHTMLElement = isHTMLElement;
function rafThrottle(fn) {
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
exports.rafThrottle = rafThrottle;
const clearTimer = (timer) => {
    clearTimeout(timer.value);
    timer.value = null;
};
exports.clearTimer = clearTimer;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.getRandomInt = getRandomInt;
function isUndefined(val) {
    return val === undefined;
}
exports.isUndefined = isUndefined;
function useGlobalConfig() {
    const vm = (0, vue_1.getCurrentInstance)();
    if ('$ELEMENT' in vm.proxy) {
        return vm.proxy.$ELEMENT;
    }
    return {};
}
exports.useGlobalConfig = useGlobalConfig;
function isEmpty(val) {
    if ((!val && val !== 0) ||
        ((0, shared_1.isArray)(val) && !val.length) ||
        ((0, shared_1.isObject)(val) && !Object.keys(val).length))
        return true;
    return false;
}
exports.isEmpty = isEmpty;
function arrayFlat(arr) {
    return arr.reduce((acm, item) => {
        const val = Array.isArray(item) ? arrayFlat(item) : item;
        return acm.concat(val);
    }, []);
}
exports.arrayFlat = arrayFlat;
function deduplicate(arr) {
    return Array.from(new Set(arr));
}
exports.deduplicate = deduplicate;
function $(ref) {
    return ref.value;
}
exports.$ = $;
function addUnit(value) {
    if ((0, shared_1.isString)(value)) {
        return value;
    }
    else if ((0, exports.isNumber)(value)) {
        return `${value}px`;
    }
    (0, error_1.debugWarn)(exports.SCOPE, 'binding value must be a string or number');
    return '';
}
exports.addUnit = addUnit;
function isEqualWithFunction(obj, other) {
    return (0, isEqualWith_1.default)(obj, other, (objVal, otherVal) => {
        return (0, shared_1.isFunction)(objVal) && (0, shared_1.isFunction)(otherVal)
            ? `${objVal}` === `${otherVal}`
            : undefined;
    });
}
exports.isEqualWithFunction = isEqualWithFunction;
const refAttacher = (ref) => {
    return (val) => {
        ref.value = val;
    };
};
exports.refAttacher = refAttacher;
