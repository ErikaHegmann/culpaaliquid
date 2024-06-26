'use strict';

/**
 * trim()根据传参来去除空格
 *
 * @param string - 传入字符串
 * @param type - 可选，去除空格的类型l:去除开头空格 r:去除尾部空格 lr:去除两端空格，为空的话去除所有空格
 * @returns 返回新字符串
 */
function trim(string, type = '') {
    if (!type) {
        return string.replace(/\s/g, '');
    }
    else if (type === 'l' || type === 'left') {
        return string.replace(/^\s*/, '');
    }
    else if (type === 'r' || type === 'right') {
        return string.replace(/\s*$/, '');
    }
    else if (type === 'lr' || type === 'around') {
        return string.replace(/(^\s*)|(\s*$)/g, '');
    }
}

module.exports = trim;
