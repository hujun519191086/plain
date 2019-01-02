
/**
 * 
 * 检测是否为可计算的数字
 * @param {*} data 
 * 可计算的数字：true
 *  123 -> true
 * '123'-> true
 */
function isCalcNumber(data) {
    return (typeof data === 'string' || typeof data === 'number') && (!isNaN(data) && data !== Infinity && data !== -Infinity)
}

/**
 * 检测是否为空对象
 * @param {*} data 
 * {} -> true
 * {a:1} -> false
 */
function isEmptyObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length === 0
}

/**
 * 检测是否为非空对象
 * @param {*} data 
 * {a:1} -> true
 * {} -> false
 */
function isNotEmptyObject(data) {
    return Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length !== 0
}

/**
* 检测是否为空数组
* @param {*} data 
* [] -> true
* [1,2] -> false
*/
function isEmptyArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]' && Object.keys(data).length === 0
}

/**
 * 检测是否为非空数组
 * @param {*} data 
 * [1,2] -> true
 * [] -> false
 */
function isNotEmptyArray(data) {
    return Object.prototype.toString.call(data) === '[object Array]' && Object.keys(data).length !== 0
}


/**
 * 返回类型
 * @param {*} data 
 * '123' -> string
 *  123 -> number
 * '123abc'->string
 */
function typeof_zsd(data) {
    var str = null;
    if (Object.prototype.toString.call(data) === '[object Null]') {
        str = 'null'
    }
    if (Object.prototype.toString.call(data) === '[object Undefined]') {
        str = 'undefined'
    }
    if (Object.prototype.toString.call(data) === '[object Boolean]') {
        str = 'boolean'
    }
    if (Object.prototype.toString.call(data) === '[object Number]') {
        str = 'number'
    }
    if (Object.prototype.toString.call(data) === '[object Function]') {
        str = 'function'
    }
    if (Object.prototype.toString.call(data) === '[object Array]') {
        str = 'array'
    }
    if (Object.prototype.toString.call(data) === '[object Date]') {
        str = 'date'
    }
    if (Object.prototype.toString.call(data) === '[object RegExp]') {
        str = 'regexp'
    }
    if (Object.prototype.toString.call(data) === '[object Object]') {
        str = 'object'
    }
    if (Object.prototype.toString.call(data) === '[object Error]') {
        str = 'error'
    }
    if (Object.prototype.toString.call(data) === '[object String]') {
        str = 'string'
    }
    return str;
}

/**
 * 判断字符串长度
 */
function strLength(str) {
    if (str == null) return 0;
    if (typeof str != "string") {
        str += "";
    }
    return str.replace(/[^\x00-\xff]/g, "01").length;
}

/**
 * 随机数
 * min ≤ r ≤ max
 */

function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}

/**
 * 随机数
 * min ≤ r < max
 */
function RandomNum2(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.floor(Rand * Range); //舍去
    return num;
}

/**
 * 随机数
 * min < r ≤ max
 */
function RandomNum3(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return Min + 1;
    }
    var num = Min + Math.round(Rand * Range);
    return num;
}

/**
 * 随机数
 * min < r < max 
 */
function RandomNum4(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return Min + 1;
    } else if (Math.round(Rand * Max) == Max) {
        index++;
        return Max - 1;
    } else {
        var num = Min + Math.round(Rand * Range) - 1;
        return num;
    }
}

/**
 * 
 * @param {*} dom 
 */
function getDomAllAttr(dom) {
    var obj = {},
    for (var i in dom) {
        obj[i] = jom[i]
    }
    return obj
}