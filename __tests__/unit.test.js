// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Phone number
test('phone number is correct', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('phone number 2 is correct', () => {
    expect(functions.isPhoneNumber('098-765-4321')).toBe(true);
});

test('phone number 3 is incorrect', () => {
expect(functions.isPhoneNumber('911')).toBe(true);
});

test('phone number 4 is incorrect', () => {
expect(functions.isPhoneNumber('1234-213-532')).toBe(true);
});

// Valid email
test('email is correct', () => {
expect(functions.isEmail('a5phan@ucsd.edu')).toBe(true);
});
test('email 2 is correct', () => {
    expect(functions.isEmail('a@p.com')).toBe(true);
});
test('email 3 is incorrect', () => {
    expect(functions.isEmail('a@pcom')).toBe(true);
});
test('email 4 is incorrect', () => {
    expect(functions.isEmail('AnniePhan')).toBe(true);
});

// Strong Password
test('strong password is correct', () => {
expect(functions.isStrongPassword('a12345')).toBe(true);
});
test('strong password 2 is correct', () => {
    expect(functions.isStrongPassword('ucsd123')).toBe(true);
});
test('strong password 3 is incorrect', () => {
    expect(functions.isStrongPassword('1234567890ucsd')).toBe(true);
});
test('strong password 4 is incorrect', () => {
    expect(functions.isStrongPassword('abc')).toBe(true);
});

// is Date
test('Date 1 is correct', () => {
    expect(functions.isDate('12/16/2002')).toBe(true);
});
test('Date 2 is correct', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});
test('Date 3 is correct', () => {
    expect(functions.isDate('22/22/22')).toBe(true);
});
test('Date 4 is correct', () => {
    expect(functions.isDate('05/21')).toBe(true);
});

// is HexColor
test('HexColor 1 is correct', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
});
test('HexColor 2 is correct', () => {
    expect(functions.isHexColor('0AC')).toBe(true);
});
test('HexColor 1 is correct', () => {
    expect(functions.isHexColor('zzz')).toBe(true);
});
test('HexColor 1 is correct', () => {
    expect(functions.isHexColor('#ffff')).toBe(true);
});




