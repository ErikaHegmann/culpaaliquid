export type { AnyObject, AnyFunction, ArrayOneMore } from '../typings/common';
export type { WindowSizeObj } from './getWindowSize';
export type { SearchkeySet } from './searchTreeObject';
import client from './client';
import pattern from './pattern';
import trim from './trim';
import clearAttr from './clearAttr';
import clearBr from './clearBr';
import clearHtml from './clearHtml';
import clearHtmlExpSN from './clearHtmlExpSN';
import clearHtmlN from './clearHtmlN';
import clearHtmlNS from './clearHtmlNS';
import clearHtmlTag from './clearHtmlTag';
import getNumber from './getNumber';
import imgAdapt from './imgAdapt';
import imgChoose from './imgChoose';
import camel2Dash from './camel2Dash';
import dash2Camel from './dash2Camel';
import upperFirst from './upperFirst';
import getRandomNum from './getRandomNum';
import getRandomStr from './getRandomStr';
import getRandomStrWidthSpecialChar from './getRandomStrWidthSpecialChar';
import getCHSLength from './getCHSLength';
import cutCHSString from './cutCHSString';
import textareaInsertText from './textareaInsertText';
import textareaMoveToEnd from './textareaMoveToEnd';
import isDigitals from './isDigitals';
import isExitsFunction from './isExitsFunction';
import isExitsVariable from './isExitsVariable';
import getWindowSize from './getWindowSize';
import getAppVersion from './getAppVersion';
import getOsVersion from './getOsVersion';
import getIsAppVersionLastest from './getIsAppVersionLastest';
import getDirParam from './getDirParam';
import getParameter from './getParameter';
import getFileType from './getFileType';
import getUrlParam from './getUrlParam';
import formatTime from './formatTime';
import formatTimeStr from './formatTimeStr';
import setCookie from './setCookie';
import setCache from './setCache';
import setSession from './setSession';
import getCookie from './getCookie';
import getCache from './getCache';
import getSession from './getSession';
import delCookie from './delCookie';
import delCache from './delCache';
import delSession from './delSession';
import encodeBase64 from './encodeBase64';
import encodeUtf8 from './encodeUtf8';
import decodeBase64 from './decodeBase64';
import decodeUtf8 from './decodeUtf8';
import enWxJumpLink from './enWxJumpLink';
import enWxJumpLinkOld from './enWxJumpLinkOld';
import deWxJumpLink from './deWxJumpLink';
import deWxJumpLinkOld from './deWxJumpLinkOld';
import debounce from './debounce';
import throttle from './throttle';
import stopBubble from './stopBubble';
import stopDefault from './stopDefault';
import addEvent from './addEvent';
import removeEvent from './removeEvent';
import getScrollPosition from './getScrollPosition';
import nextIndex from './nextIndex';
import fixNumber from './fixNumber';
import extend from './extend';
import delay from './delay';
import getType from './getType';
import isArray from './isArray';
import cleanData from './cleanData';
import download from './download';
import searchTreeObject from './searchTreeObject';
import openUrl from './openUrl';
import splitThousand from './splitThousand';
import all from './all';
import any from './any';
import uuid from './uuid';
import arrayToCSV from './arrayToCSV';
import CSVToArray from './CSVToArray';
import CSVToJSON from './CSVToJSON';
import JSONToCSV from './JSONToCSV';
import RGBToHex from './RGBToHex';
export { client, pattern, trim, clearAttr, clearBr, clearHtml, clearHtmlExpSN, clearHtmlN, clearHtmlNS, clearHtmlTag, getNumber, imgAdapt, imgChoose, camel2Dash, dash2Camel, upperFirst, getRandomNum, getRandomStr, getRandomStrWidthSpecialChar, getCHSLength, cutCHSString, textareaInsertText, textareaMoveToEnd, isDigitals, isExitsFunction, isExitsVariable, getWindowSize, getAppVersion, getOsVersion, getIsAppVersionLastest, getDirParam, getParameter, getFileType, getUrlParam, formatTime, formatTimeStr, setCookie, setCache, setSession, getCookie, getCache, getSession, delCookie, delCache, delSession, encodeBase64, encodeUtf8, decodeBase64, decodeUtf8, enWxJumpLink, enWxJumpLinkOld, deWxJumpLink, deWxJumpLinkOld, debounce, throttle, stopBubble, stopDefault, addEvent, removeEvent, getScrollPosition, nextIndex, fixNumber, delay, extend, getType, isArray, cleanData, download, searchTreeObject, openUrl, splitThousand, all, any, uuid, arrayToCSV, CSVToArray, CSVToJSON, JSONToCSV, RGBToHex };
declare const _default: {
    client: (name?: string, userAgent?: string) => boolean | {
        IE: boolean;
        GECKO: boolean;
        WEBKIT: boolean;
        OPERA: boolean;
        TRIDENT: boolean;
        MOBILE: boolean;
        IOS: boolean;
        ANDROID: boolean;
        IPHONE: boolean;
        IPAD: boolean;
        QQBROWSER: boolean;
        WEIXIN: boolean;
        QQ: boolean;
    };
    pattern: {
        any: RegExp;
        number: RegExp;
        string: RegExp;
        postcode: RegExp;
        url: RegExp;
        username: RegExp;
        float: RegExp;
        email: RegExp;
        mobile: RegExp;
        chinese: RegExp;
        tel: RegExp;
        qq: RegExp;
        pass: RegExp;
        json: RegExp;
        arrjson: RegExp;
        array: RegExp;
        isjson: RegExp;
        textarea: RegExp;
    };
    trim: typeof trim;
    clearAttr: typeof clearAttr;
    clearBr: typeof clearBr;
    clearHtml: typeof clearHtml;
    clearHtmlExpSN: typeof clearHtmlExpSN;
    clearHtmlN: typeof clearHtmlN;
    clearHtmlNS: typeof clearHtmlNS;
    clearHtmlTag: typeof clearHtmlTag;
    getNumber: typeof getNumber;
    imgAdapt: typeof imgAdapt;
    imgChoose: typeof imgChoose;
    camel2Dash: typeof camel2Dash;
    dash2Camel: typeof dash2Camel;
    upperFirst: typeof upperFirst;
    getRandomNum: typeof getRandomNum;
    getRandomStr: typeof getRandomStr;
    getRandomStrWidthSpecialChar: typeof getRandomStrWidthSpecialChar;
    getCHSLength: typeof getCHSLength;
    cutCHSString: typeof cutCHSString;
    textareaInsertText: typeof textareaInsertText;
    textareaMoveToEnd: typeof textareaMoveToEnd;
    isDigitals: typeof isDigitals;
    isExitsFunction: typeof isExitsFunction;
    isExitsVariable: typeof isExitsVariable;
    getWindowSize: typeof getWindowSize;
    getAppVersion: typeof getAppVersion;
    getOsVersion: typeof getOsVersion;
    getIsAppVersionLastest: typeof getIsAppVersionLastest;
    getDirParam: typeof getDirParam;
    getParameter: typeof getParameter;
    getFileType: typeof getFileType;
    getUrlParam: typeof getUrlParam;
    formatTime: typeof formatTime;
    formatTimeStr: typeof formatTimeStr;
    setCookie: typeof setCookie;
    setCache: typeof setCache;
    setSession: typeof setSession;
    getCookie: typeof getCookie;
    getCache: typeof getCache;
    getSession: typeof getSession;
    delCookie: typeof delCookie;
    delCache: typeof delCache;
    delSession: typeof delSession;
    encodeBase64: typeof encodeBase64;
    encodeUtf8: typeof encodeUtf8;
    decodeBase64: typeof decodeBase64;
    decodeUtf8: typeof decodeUtf8;
    enWxJumpLink: typeof enWxJumpLink;
    enWxJumpLinkOld: typeof enWxJumpLinkOld;
    deWxJumpLink: typeof deWxJumpLink;
    deWxJumpLinkOld: typeof deWxJumpLinkOld;
    debounce: typeof debounce;
    throttle: typeof throttle;
    stopBubble: typeof stopBubble;
    stopDefault: typeof stopDefault;
    addEvent: typeof addEvent;
    removeEvent: typeof removeEvent;
    getScrollPosition: () => string | void;
    nextIndex: typeof nextIndex;
    fixNumber: typeof fixNumber;
    delay: typeof delay;
    extend: <T>(target: boolean | T, ...args: import("../typings/common").ArrayOneMore<any>) => boolean | T;
    getType: typeof getType;
    isArray: typeof isArray;
    cleanData: typeof cleanData;
    download: typeof download;
    searchTreeObject: typeof searchTreeObject;
    openUrl: typeof openUrl;
    splitThousand: typeof splitThousand;
    all: (arr: any[], fn: import("../typings/common").AnyFunction) => boolean;
    any: (arr: any[], fn: import("../typings/common").AnyFunction) => boolean;
    uuid: () => string;
    arrayToCSV: (arr: any[], delimiter?: string) => string;
    CSVToArray: (data: string, delimiter?: string, omitFirstRow?: boolean) => string[][];
    CSVToJSON: typeof CSVToJSON;
    JSONToCSV: (arr: any[], columns: any[], delimiter?: string) => string;
    RGBToHex: (r: number, g: number, b: number) => string;
};
export default _default;
