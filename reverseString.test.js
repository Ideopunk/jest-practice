const reverseString = require("./reverseString");
const { reverseString } = require("jest");

test("Converts but to tub", () => {
	expect(reverseString("but")).toBe("tub");
});
