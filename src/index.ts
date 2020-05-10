/* eslint-disable */
export namespace Validation {

    export type ValidFunc = (txt: string) => boolean

    export type Rule = { rule: ValidFunc, error: Error }
    export type Rules = Rule[]

    export const Non = (f: ValidFunc): ValidFunc => {
        return (txt: string) => !f(txt)
    }
    export const And = (l: ValidFunc, r: ValidFunc): ValidFunc => {
        return (txt: string) => l(txt) && r(txt)
    }

    export const Prod = (vs: ValidFunc[]): ValidFunc => {
        return (txt: string) => {
            let v = vs.reduce((a, b) => Validation.And(a, b));
            return v(txt);
        }
    }

    export const Or = (l: ValidFunc, r: ValidFunc): ValidFunc => {
        return (txt: string) => l(txt) || r(txt)
    }

    export const empty: ValidFunc = (txt: String): boolean => {
        return (txt.length == 0)
    }

    export const isEqual = (x: number): ValidFunc => {
        let check = (txt: string): boolean => {
            if (!Validation.isNumber(txt)) {
                return false
            }

            const y = Number(txt);
            if (y == undefined) {
                return false;
            }

            return y == x
        }
        return check
    }

    export const isNonZero: ValidFunc = (txt: String): boolean => {
        return !(txt == "0")
    }

    /// 先頭が0でない
    export const firstCharIsNonZero: ValidFunc = (txt: string): boolean => {
        //        if txt.count > 1 {
        const c = txt.charAt(0)
        if (!c) {
            return false
        }

        if (c == "0") {
            return false
        }
        return true
    }

    /// n桁まで
    export const digit = (digit: number): ValidFunc => {
        return (txt: string) => { return txt.length <= digit }
    }

    /// n桁以上
    export const digitMin = (digit: number): ValidFunc => {
        return (txt: string) => { return txt.length >= digit }
    }

    export const isNumber: ValidFunc = (txt: string): boolean => {
        /// 数字
        return /^[0-9]+$/.test(txt)
    }

    /// 英数字
    export const isAlphaNumeric = (txt: string): boolean => {
        return (/^[a-zA-Z0-9]+$/).test(txt)
    }

    export const min = (min: number, type: "<" | "<="): ValidFunc => {
        return (txt: string) => {
            if (!isNumber(txt)) {
                return false;
            }
            const n = Number(txt);
            switch (type) {
                case "<":
                    return min < n;
                case "<=":
                    return min <= n;
            }
        }
    }

    export const max = (max: number, type: ">" | ">="): ValidFunc => {
        return (txt: string) => {
            if (!isNumber(txt)) {
                return false;
            }
            const n = Number(txt);
            switch (type) {
                case ">":
                    return max > n;
                case ">=":
                    return max >= n;
            }
        }
    }

    export const validHour: ValidFunc = (txt: string) => {
        if (!isNumber(txt)) {
            return false;
        }
        const n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n > 23) {
            return false;
        }
        return true;
    }


    export const validMinute: ValidFunc = (txt: string) => {

        if (!isNumber(txt)) {
            return false;
        }
        const n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n >= 60) {
            return false;
        }
        return true;
    }

    export const validSec: ValidFunc = (txt: string) => {
        if (!isNumber(txt)) {
            return false;
        }
        const n = Number(txt);
        if (n < 0) {
            return false;
        }
        if (n >= 60) {
            return false;
        }
        return true;
    }


    export const validMonth: ValidFunc = (txt: string) => {
        if (!isNumber(txt)) {
            return false;
        }
        const n = Number(txt);
        if (n < 1) {
            return false;
        }
        if (n > 12) {
            return false;
        }
        return true;
    }


    export const validMonthAndDay = (month: string, day: string): boolean => {
        if (!Validation.validMonth(month)) {
            return false;
        }
        if (!Validation.isNumber(day)) {
            return false;
        }
        const monthnum = Number(month);
        const daynum = Number(day);
        if (daynum < 1) {
            return false;
        }


        switch (monthnum) {
            case 1: return daynum <= 31
            case 2: return daynum <= 29
            case 3: return daynum <= 31
            case 4: return daynum <= 30
            case 5: return daynum <= 31
            case 6: return daynum <= 30
            case 7: return daynum <= 31
            case 8: return daynum <= 31
            case 9: return daynum <= 30
            case 10: return daynum <= 31
            case 11: return daynum <= 30
            case 12: return daynum <= 31
            default: return false;
        }
        return true;
    }
}