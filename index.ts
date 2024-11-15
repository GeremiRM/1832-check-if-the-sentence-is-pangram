

const ENGLISH_ALPHABET_LENGTH = 26; 

function checkIfPangram(sentence: string): boolean {

    const uniqueLettersInSentence = new Set(); 
    for(let i = 0; i < sentence.length; i++) {

        const letter = sentence[i]

        if(!uniqueLettersInSentence.has(letter)) {
            uniqueLettersInSentence.add(letter)
        }
    }

    return uniqueLettersInSentence.size === ENGLISH_ALPHABET_LENGTH; 
};

checkIfPangram('thequickbrownfoxjumpsoverthelazydog')