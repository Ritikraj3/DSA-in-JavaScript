// Ques 3- Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of 
// a different word or phrase, typically using all the original letters exactly once.

//discuss => https://leetcode.com/problems/valid-anagram/solutions/

// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

//* 1st Approach
const isAnagram = function (s , t) {
    return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log(isAnagram("anagram", "nagaram"));

//* 2nd Approach

const isAnagram2 = function (s , t) {
    if (s.length !== t.length) return false;   //edge case

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i < s.length; i++) {
        obj1[s[i]] = (obj1[s[i]] || 0) + 1
        obj2[t[i]] = (obj2[t[i]] || 0) + 1
    }
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true         
}

console.log(isAnagram2("rat", "tar"));