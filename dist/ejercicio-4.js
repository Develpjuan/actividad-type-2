"use strict";
function countWordOccurrences(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    return (text.match(regex) || []).length;
}
const text = "TypeScript is great. TypeScript is fun.";
console.log(countWordOccurrences(text, 'TypeScript'));
//# sourceMappingURL=ejercicio-4.js.map