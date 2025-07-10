/* 
    palindrome checker:
        - removes special characters, punctuation, spaces
        - checks if input is the same backwards
        - results displayed dynamically
*/

// DOM elements

const inputText = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result-container');
const result = document.getElementById('result');

// removes any character from input string that is not a letter or number and
// turns it all lowercase

const cleanText = (str) => {
    const regex = /[^a-zA-Z0-9]/g;
    return str.toLowerCase().replace(regex, '');
}

// takes clean text and reverses it to compare, displays answer in result

const checkText = () => {
    const text = cleanText(inputText.value);
    
    // alert if user has left input blank and check btn is clicked

    if (text === '') {
        resultDiv.style.display = 'none';
        alert('Please input a value');
        return;
    }

    // reverses the input text

    let backwardsText = '';
    
    for (let i = text.length - 1; i >= 0; i--) {
        backwardsText += text[i];
    }

    // displays hidden result div

    resultDiv.style.display = 'block';

    // compares input text to reversed text and displays result

    if (text === backwardsText) {
        result.innerText = `${inputText.value} is a palindrome!`;
    } else {
        result.innerText = `${inputText.value} is not a palindrome!`;
    }
}

// event listener for check btn

btn.addEventListener('click', checkText);