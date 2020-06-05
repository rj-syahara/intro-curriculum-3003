'use strict';
const memo = new Map();
memo.set(0, 0);
memo.set(1, 0);
memo.set(2, 1);
function trib(n) {
    if (memo.has(n)) {
        return memo.get(n);
    }
    const value = trib(n - 1) + trib(n - 2) + trib(n - 3);
    memo.set(n, value);
    return value;
}
const length = 20;
for (let i = 0; i <= length; i++) {
    console.log(trib(i));
}
const assert = require('assert');
assert.equal(trib(0), 0, `n=0のトリボナは0ですが、実際は${trib(1) }でした`);
assert.equal(trib(1), 0, `n=1のトリボナは0ですが、実際は${trib(1) }でした`);
assert.equal(trib(2), 1, `n=2のトリボナは1ですが、実際は${trib(2) }でした`);
assert.equal(trib(3), 1, `n=3のトリボナは1ですが、実際は${trib(3) }でした`);
assert.equal(trib(6), 7, `n=6のトリボナは7ですが、実際は${trib(6) }でした`);
assert.equal(trib(16), 3136, `n=16のトリボナは3136ですが、実際は${trib(16) }でした`);
console.log('すべてのテストを通過しました');