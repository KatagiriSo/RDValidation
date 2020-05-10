import { Validation } from '.';


function assert(name:string,result:any, exp:any) {
    console.log(".");
    console.assert(result === exp, "\n"+name+"\nresult:"+result+"\nexpected:"+exp);
}


assert("number",Validation.isNumber("2000"), true);
assert("number2",Validation.isNumber("20a00"), false);
assert("prod1",Validation.Prod([Validation.isAlphaNumeric, Validation.digit(5)])("a23b"), true);
assert("prod2",Validation.Prod([Validation.isNumber, Validation.digit(2)])("0123"), false);
