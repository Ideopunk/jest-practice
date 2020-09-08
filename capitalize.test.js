const capitalize = require('./capitalize')

test('converts "yo dawg" to "Yo dawg"', () => {
    expect(capitalize('yo dawg')).toBe("Yo dawg");
});

test('Converts "SUP" to "SUP"', () => {
    expect(capitalize("SUP")).toBe("SUP");
})