const capitalize = require('./capitalize')
const reverseString = require("./reverseString");

// Capitalize tests
test('converts "yo dawg" to "Yo dawg"', () => {
    expect(capitalize('yo dawg')).toBe("Yo dawg");
});

test('Converts "SUP" to "SUP"', () => {
    expect(capitalize("SUP")).toBe("SUP");
})

// Reverse string tests
test("Converts but to tub", () => {
	expect(reverseString("but")).toBe("tub");
});
