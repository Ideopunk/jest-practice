function caesar(string, shiftAmount) {
	newArray = [];
	for (let char of string) {
		let unic = char.charCodeAt(0);
		if (64 < unic && unic < 91) {
			unic += shiftAmount;

			// Wrap
			while (90 < unic || unic < 65) {
				if (90 < unic) {
					unic -= 26;
				} else if (65 > unic) {
					unic += 26;
				}
			}
		} else if (96 < unic && unic < 123) {
			unic += shiftAmount;

			// Wrap
			while (122 < unic || unic < 97) {
				if (122 < unic) {
					unic -= 26;
				} else if (97 > unic) {
					unic += 26;
				}
			}
		}
		newChar = String.fromCharCode(unic);
		newArray.push(newChar);
	}
	newString = newArray.join("");
	return newString;
}

module.exports = caesar;
