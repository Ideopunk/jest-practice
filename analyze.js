function analyze(array) {
	const length = array.length;

	const min = Math.min(...array)

	const max = Math.max(...array);

	const sum = array.reduce((sum, current) => sum + current, 0);
	const average = sum / length;

	return { average, min, max, length};
}

module.exports = analyze;
