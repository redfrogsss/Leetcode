/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var s = x + ''; //turn number to string
    var count = Math.round(s.length / 2);
    var ans = true; 

    for(var i = 0; i < count; i++) {
        if(s[i] !== s[s.length - 1 - i]){
            ans = false;
        }
    }

    return ans;
};
