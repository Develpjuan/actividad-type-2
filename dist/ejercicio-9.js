"use strict";
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
console.log(countVowels('TypeScript'));
//# sourceMappingURL=ejercicio-9.js.map