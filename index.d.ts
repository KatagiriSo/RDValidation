export declare namespace Validation {
    type ValidFunc = (txt: string) => boolean;
    type Rule = {
        rule: ValidFunc;
        error: Error;
    };
    type Rules = Rule[];
    const Non: (f: ValidFunc) => ValidFunc;
    const And: (l: ValidFunc, r: ValidFunc) => ValidFunc;
    const Prod: (vs: ValidFunc[]) => ValidFunc;
    const Or: (l: ValidFunc, r: ValidFunc) => ValidFunc;
    const empty: ValidFunc;
    const isEqual: (x: number) => ValidFunc;
    const isNonZero: ValidFunc;
    const firstCharIsNonZero: ValidFunc;
    const digit: (digit: number) => ValidFunc;
    const digitMin: (digit: number) => ValidFunc;
    const isNumber: ValidFunc;
    const isAlphaNumeric: (txt: string) => boolean;
    const min: (min: number, type: "<" | "<=") => ValidFunc;
    const max: (max: number, type: ">" | ">=") => ValidFunc;
    const validHour: ValidFunc;
    const validMinute: ValidFunc;
    const validSec: ValidFunc;
    const validMonth: ValidFunc;
    const validMonthAndDay: (month: string, day: string) => boolean;
}
