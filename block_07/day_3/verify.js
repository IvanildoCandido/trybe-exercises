const verify = (password) => {
  if (password === undefined || password.length <= 8) {
    return false;
  }
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  return true;
};
const assert = require('assert');
assert.strictEqual(verify('123'), false);
assert.strictEqual(verify(), false);
assert.strictEqual(verify('12345678'), false);
assert.strictEqual(verify(''), false);
assert.strictEqual(verify('ag72qjh56'), false);
assert.strictEqual(verify('AG72QJH5A'), false);
assert.strictEqual(verify('aGsdQ2HaA'), true);
assert.strictEqual(verify('aGsdQ2Hadf'), true);
