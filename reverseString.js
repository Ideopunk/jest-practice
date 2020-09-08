function reverseString(string) {
	let stringArray = string.split("")
	let stringArrayReversed = stringArray.reverse();
	let newString = stringArrayReversed.join('')
	return newString;
}

module.exports = reverseString;
