function capitalize(word) {
    wordArray = word.split('') 
	let firstLetter = wordArray[0];
    let newFirstLetter = firstLetter.toUpperCase();
    wordArray.splice(0, 1, newFirstLetter)
    newWord = wordArray.join('')
	return newWord;
}

module.exports = capitalize;
