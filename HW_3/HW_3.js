const firstLetterBig = (anyname) => {
    return anyname.charAt(0).toUpperCase() + anyname.slice(1).toLowerCase
};

const getMaxDigit = (anynumber) => {
    if (number === 0){
        return 0
    } else {
        return Math.max(number % 10, getMaxDigit(Math.floor(number / 10)))
    };
};

const countLetterInWord = (letter, word) => {
    let count = 0
    for(let i = 0; i< word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        };
    };
};

const getRandomPassword = (number = 8) => {
    let password = "";
    for (let i = 1; i <= number; i++) {
        password += Math.round(Math.random() * 9);
    }
    return password;
}

const deleteLetter = (letter, word) => {
    let result = '';
    for(let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()) {
            continue;
        };
        result += word[i];
    };
    return result;
};

const deleteDoubleLetter = (str) => {
     let newString = str.toLowerCase();
     let result = '';
     for(let i = 0; i< newString.length; i++) {
         if (newString.replaceAll(newString[i], "").length === newString.length - 1) {
             result += newString[i];
         };
     };
     return result;
};



console.log('Функція №1: ${firstLetterBig ("rOmAn")}');
console.log('Функція №2: ${getMaxDigit ("1236, 6.987, 9.385, 8")}');
console.log('Функція №3: ${countLetterInWord ("а", "Абабагаламага")}');
console.log('Функція №4: ${getRandomPassword (7)}');
console.log('Функція №5: ${deleteLetter ("l", "blablabla")}');
console.log('Функція №6: ${deleteDoubleLetter ("Бісквіт був дуже ніжним")}');