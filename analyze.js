function analyze(array) {
	let length = array.length;

	let min = Math.min(...array)

	let max = Math.max(...array);

	let sum = array.reduce((sum, current) => sum + current, 0);
	let average = sum / length

	let object = { average, min, max, length };
	return object;
}

module.exports = analyze;
