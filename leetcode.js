/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let valueMap = {}
    nums.forEach((value,indx)=>{
        valueMap[value] = indx
    })
    for(let i = 0;i < nums.length;i++){
        let remainder = target - nums[i];
        console.log(valueMap,'hello')
        if(valueMap[remainder]){
            return [i,valueMap[remainder]]
        }
    }
};


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join() === x.toString();
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(romanNumeral) {

    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let romanString = 0
    for(let i = 0; i < romanNumeral.length;i++){
        let mapKey = romanNumeral[i]
        let nextKey = romanNumeral[i + 1]
        if(romanNumeral[i] < romanNumeral[i+1]){
            romanString+= sym[nextKey] - sym[mapKey]
        }else{
            romanString+= sym[mapKey]
        }
    }
    return romanString;
};

romanToInt("IV")


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const longest = strs.sort((a, b) => b.length - a.length)[0];
    let matchingSequence = "";
    for(let i = 0; i < longest[0].length; i++){
        let character = longest[0][i]
        if (strs.every(str => str[i] === char)) {
            prefix += char;
        } else {
            break;
        }
    }
};


var removeDuplicates = function (nums) {
    let set = new Set(nums);
    nums.length = 0;
    nums.push(...set.values())
    return set.size;
};