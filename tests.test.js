const capitalize = require("./capitalize");
const reverseString = require("./reverseString");
const { add, multiply, subtract, divide } = require("./calculator");
const caesar = require("./caesar");
const analyze = require('./analyze');

// Capitalize tests
test('Capitalize: "yo dawg" to "Yo dawg"', () => {
	expect(capitalize("yo dawg")).toBe("Yo dawg");
});

test('Capitalize: "SUP" to "SUP"', () => {
	expect(capitalize("SUP")).toBe("SUP");
});

// Reverse string tests
test("Reverse: but to tub", () => {
	expect(reverseString("but")).toBe("tub");
});

test("Reverse: 'in girum imus nocte et consumimur igni' to 'ingi rumimusnoc te etcon sumi murig ni'", () => {
	expect(reverseString("in girum imus nocte et consumimur igni")).toBe(
		"ingi rumimusnoc te etcon sumi murig ni"
	);
});

test("Reverse: ADA to ADA", () => {
	expect(reverseString("ADA")).toBe("ADA");
});

// Calculator operation tests

test("Calculator: Simple sum", () => {
	expect(add(2, 2)).toBe(4);
});

test("Calculator: Sum negatives", () => {
	expect(add(-2, -2)).toBe(-4);
});

test("Calculator: Simple difference", () => {
	expect(subtract(6, 4)).toBe(2);
});

test("Calcuator: Negative difference", () => {
	expect(subtract(10, 100)).toBe(-90);
});

test("Calculator: Simple product", () => {
	expect(multiply(9, 3)).toBe(27);
});

test("Calculator: Negative product", () => {
	expect(multiply(9, -3)).toBe(-27);
});

test("Calculator: Simple quotient", () => {
	expect(divide(10, 2)).toBe(5);
});

test("Calculator: Negative quotient", () => {
	expect(divide(10, -2)).toBe(-5);
});

// Caesar tests

test("Caesar: simple shift", () => {
	expect(caesar("dab", 1)).toBe("ebc");
});

test("Caesar: wrap-around shift", () => {
	expect(caesar("dab", 27)).toBe("ebc");
});

test("Caesar: negative shift", () => {
	expect(caesar("dab", -5)).toBe("yvw");
});

test("Caesar: don't shift non-alphabet characters", () => {
	expect(caesar("woah, what!", 1)).toBe("xpbi, xibu!");
});

test("Caesar: capitals shift", () => {
	expect(caesar("TvT", 1)).toBe("UwU");
});

// Array Analysis tests

test("Analyze: does the object have all its properties?", () => {
    expect(analyze([1,2,3])).toStrictEqual({
        average: 2,
        min: 1,
        max: 3,
        length: 3
    })
})