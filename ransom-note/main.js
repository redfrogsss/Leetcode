// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
// https://leetcode.com/problems/ransom-note/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    var result = false;

    var a = ransomNote.split('').sort();
    var b = magazine.split('').sort();


    // if char a[i] === char b[j] then remove char from both array
    for(var i = a.length - 1; i >= 0; i--) {
        var f = false;
        for(var j = 0; j < b.length; j++) {
            if(f === false) {
                if(a[i] === b[j]) {
                    a.pop();
                    b[j] = null;
                    f = true;
                }
            }
        }
    }

    // if a.length === 0 then return true
    if (a.length === 0) {
        result = true;
    }
    
    return result;

};