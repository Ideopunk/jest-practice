const capitalize = require('./capitalize')
const reverseString = require("./reverseString");

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
