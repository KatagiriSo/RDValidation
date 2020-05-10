"use strict";
exports.__esModule = true;
/* eslint-disable */
var Validation;
(function (Validation) {
    Validation.Non = function (f) {
        return function (txt) { return !f(txt); };
    };
    Validation.And = function (l, r) {
        return function (txt) { return l(txt) && r(txt); };
    };
    Validation.Prod = function (vs) {
        return function (txt) {
            var v = vs.reduce(function (a, b) { return Validation.And(a, b); });
            return v(txt);
        };
    };
    Validation.Or = function (l, r) {
        return function (txt) { return l(txt) || r(txt); };
    };
    Validation.empty = function (txt) {
        return (txt.length == 0);
    };
    Validation.isEqual = function (x) {
        var check = function (txt) {
            if (!Validation.isNumber(txt)) {
                return false;
            }
            var y = Number(txt);
            if (y == undefined) {
                return false;
            }
            return y == x;
        };
        return check;
    };
    Validation.isNonZero = function (txt) {
        return !(txt == "0");
    };
    /// 先頭が0でない
    Validation.firstCharIsNonZero = function (txt) {
        //        if txt.count > 1 {
        var c = txt.charAt(0);
        if (!c) {
            return false;
        }
        if (c == "0") {
            return false;
        }
        return true;
    };
    /// n桁まで
    Validation.digit = function (digit) {
        return function (txt) { return txt.length <= digit; };
    };
    /// n桁以上
    Validation.digitMin = function (digit) {
        return function (txt) { return txt.length >= digit; };
    };
    Validation.isNumber = function (txt) {
        /// 数字
        return /^[0-9]+$/.test(txt);
    };
    /// 英数字
    Validation.isAlphaNumeric = function (txt) {
        return (/^[a-zA-Z0-9]+$/).test(txt);
    };
    Validation.min = function (min, type) {
        return function (txt) {
            if (!Validation.isNumber(txt)) {
                return false;
            }
            var n = Number(txt);
            switch (type) {
                case "<":
                    return min < n;
                case "<=":
                    return min <= n;
            }
        };
    };
    Validation.max = function (max, type) {
        return function (txt) {
            if (!Validation.isNumber(txt)) {
                return false;
            }
            var n = Number(txt);
            switch (type) {
                case ">":
                    return max > n;
                case ">=":
                    return max >= n;
            }
        };
    };
    Validation.validHour = function (txt) {
        if (!Validation.isNumber(txt)) {
            return false;
        }
        var n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n > 23) {
            return false;
        }
        return true;
    };
    Validation.validMinute = function (txt) {
        if (!Validation.isNumber(txt)) {
            return false;
        }
        var n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n >= 60) {
            return false;
        }
        return true;
    };
    Validation.validSec = function (txt) {
        if (!Validation.isNumber(txt)) {
            return false;
        }
        var n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n >= 60) {
            return false;
        }
        return true;
    };
    Validation.validMonth = function (txt) {
        if (!Validation.isNumber(txt)) {
            return false;
        }
        var n = Number(txt);
        if (n < 1) {
            return false;
        }
        if (n > 12) {
            return false;
        }
        return true;
    };
    Validation.validMonthAndDay = function (month, day) {
        if (!Validation.validMonth(month)) {
            return false;
        }
        if (!Validation.isNumber(day)) {
            return false;
        }
        var monthnum = Number(month);
        var daynum = Number(day);
        if (daynum < 1) {
            return false;
        }
        switch (monthnum) {
            case 1: return daynum <= 31;
            case 2: return daynum <= 29;
            case 3: return daynum <= 31;
            case 4: return daynum <= 30;
            case 5: return daynum <= 31;
            case 6: return daynum <= 30;
            case 7: return daynum <= 31;
            case 8: return daynum <= 31;
            case 9: return daynum <= 30;
            case 10: return daynum <= 31;
            case 11: return daynum <= 30;
            case 12: return daynum <= 31;
            default: return false;
        }
        return true;
    };
})(Validation = exports.Validation || (exports.Validation = {}));
