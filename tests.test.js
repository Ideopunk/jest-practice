const capitalize = require('./capitalize')
const reverseString = require("./reverseString");
const {add, multiply, subtract, divide} = require("./calculator")

// Capitalize tests
test('Capitalize: "yo dawg" to "Yo dawg"', () => {
    expect(capitalize('yo dawg')).toBe("Yo dawg");
});

test('Capitalize: "SUP" to "SUP"', () => {
    expect(capitalize("SUP")).toBe("SUP");
})


// Reverse string tests
test("Reverse: but to tub", () => {
	expect(reverseString("but")).toBe("tub");
});

test("Reverse: 'in girum imus nocte et consumimur igni' to 'ingi rumimusnoc te etcon sumi murig ni'", () => {
	expect(reverseString("in girum imus nocte et consumimur igni")).toBe("ingi rumimusnoc te etcon sumi murig ni");
});

test("Reverse: ADA to ADA", () => {
	expect(reverseString("ADA")).toBe("ADA");
});


// Calculator operation tests

test("Calculator: Simple sum", () => {
    expect(add(2,2)).toBe(4)
})

test("Calculator: Sum negatives", () => {
    expect(add(-2,-2)).toBe(-4)
})

test("Calculator: Simple difference", () => {
    expect(subtract(6, 4)).toBe(2)
})

test("Calcuator: Negative difference", () => {
    expect(subtract(10, 100)).toBe(-90)
})

test("Calculator: Simple product", () => {
    expect(multiply(9, 3)).toBe(27)
})

test("Calculator: Negative product", () => {
    expect(multiply(9, -3)).toBe(-27)
})

test("Calculator: Simple quotient", () => {
    expect(divide(10, 2)).toBe(5)
})

test("Calculator: Negative quotient", () => {
    expect(divide(10, -2)).toBe(-5)
})