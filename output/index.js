"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
function test() {
    var n1 = BigInt(Number.MAX_SAFE_INTEGER) + BigInt("1");
    var n2 = BigInt(Number.MAX_SAFE_INTEGER);
    var nr = n1 + n2;
    console.log(n1.toString());
    console.log(n2.toString());
    console.log(nr.toString());
}
exports.test = test;
test();
