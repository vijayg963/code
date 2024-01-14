// var isAnagram = function (s, t) {
//     console.log(s.split("").sort().join("") === t.split("").sort().join(""))
//     return s.split("").sort().join("") === s.split("").sort().join("");
// };

// console.log(isAnagram('cat', 'rat'));


// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// const strsB = [""]
// const strsC = ["a"]

// var groupAnagrams = function (strs) {
//     const result = []

//     if (strs.length) {
//         if (strs.length == 1) {
//             return [strs]
//         }

//         for (const elm of strs) {
//             let word = ''

//             for (let i = strs.length - 1; i >= 0; i--) {

//                 word = strs[i].split("").sort().join("")
//                 if (elm.split("").sort().join("") === word) {
//                     result.push([elm, word])
//                 } else {

//                 }
//                 word = ''
//             }

//         }
//     }
//     return result
// };

// const groupAnagrams = (strs = []) => {
//     let obj = {};
//     for (const str of strs) {
//         const word = str.split("").sort().join("");
//         const resArr = obj[word] || [];
//         resArr.push(str);
//         obj[word] = resArr;
//         console.log("Object", obj)
//     }
//     return Object.values(obj);
// }
// console.log(groupAnagrams(strs))

// function checkAna(strs = []) {
//     let result = {}
//     for (const elm of strs) {
//         let word = elm.split("").sort().join("")
//         const key = result[word] || []
//         key.push(elm)
//         result[word] = key
//     }
//     return Object.values(result)
// }

// console.log(checkAna(strs))


// const nums = [1, 2, 2, 2, 2, 2, 3, 3, 3]
// let nums = [-1, -1]
// let nums = [5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5]

// var topKFrequent = function (nums, k = 7) {
//     const result = {};
//     const output = [];
//     if (nums.length < 0) {
//         return null
//     }
//     for (const num of nums) {
//         result[num] ? result[num] = result[num] + 1 : result[num] = 1
//     }
//     const values = Object.values(result).sort((a, b) => a - b).slice(-k)
//     for (const key in result) {
//         if (Object.hasOwnProperty.call(result, key)) {
//             if (values.includes(result[key])) {
//                 output.push(parseInt(key))
//             }
//         }
//     }
//     console.log(output)
//     return output
// };
// console.log(topKFrequent(nums))


// const nums = [1, 2, 3, 4]
// Output: [24,12,8,6]
//First
// if (!nums.length) return null
// return nums.map((_, i) => { return nums.reduce((acc, cv, j) => acc * (i === j ? 1 : cv), 1) })

// Second
// const result = []
// let product = 0
// for (let i = 0; i < nums.length; i++) {
//     product = 1
//     for (let j = 0; j < nums.length; j++) {
//         i === j ? 1 : (product *= nums[j])
//     }
//     result.push(product)
// }
// return result

// third
// let sum = 1
// for (let i = 1; i < nums.length; i++) {
//     sum *= nums[i];
// }
// nums[0] = sum
// for (let j = 1; j < nums.length; j++) {
//     nums[j] = sum / nums[j]
// }
// return nums

// function productExceptSelf(arr = [1, 2, 3, 4]) {
//     const n = arr.length;
//     const prefixProducts = Array(n).fill(1);
//     const suffixProducts = Array(n).fill(1);
//     let prefixProduct = 1;
//     let suffixProduct = 1;

//     for (let i = 0; i < n; i++) {
//         prefixProducts[i] = prefixProduct;
//         prefixProduct *= arr[i];
//     }

//     for (let i = n - 1; i >= 0; i--) {
//         suffixProducts[i] = suffixProduct;
//         suffixProduct *= arr[i];
//     }

//     return arr.map((_, i) => prefixProducts[i] * suffixProducts[i]);
// }


// console.log(productExceptSelf(nums))


// function revesStr(str) {
//     let result = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result
// }

// console.log(revesStr("World"))

// let str = "Hello"


// console.log(str.split("").reverse().join(""))

// const arr = [1, 2, 4, 5, 6]

// function popElm(arr) {
//     const value = arr.pop()
//     arr.unshift(value)
//     return arr
// }

// console.log(popElm(arr))
// let str1 = "mary"
// let str2 = "Army"


// function anagam(str1, str2) {
//     if (str1.length === str2.length) {
//         let firstElm = str1.split("").sort().join("").toLocaleLowerCase()
//         let secondElm = str1.split("").sort().join("").toLocaleLowerCase()
//         return firstElm === secondElm
//     }
// }

// console.log(anagam(str1, str2))

// multiply(5)(6)

// function multiply(a) {
//     return (b) => {
//         return a * b
//     }
// }

// console.log(multiply(5)(6))


// var k = 1;
// if (1) {
//     eval(function foo() { })
//     k += typeof foo
// }
// console.log(k)

// const arr = [1, 2, 4, 5, 6]

// function popElm(arr) {
//     let queue = [];
//     let i = 1;

//     queue.push(arr[0]);

//     while (queue.length != 0 && i <= arr.length) {
//         const out = queue.shift();
//         queue.push(arr[i++]);
//         if (queue.length === 0) break;
//     }

// }

// console.log(popElm(arr))
// console.log(arr)

// var isPalindrome = function (s) {
//     const arr = s.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").join("")
//     let rev = ""
//     for (let i = arr.length - 1; i >= 0; i--) {
//         rev += arr[i]
//     }
//     if (arr.toLowerCase() === rev.toLowerCase()) {
//         return true
//     }
//     return false

// };

// var isPalindrome = function (s) {
//     const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     let i = 0;
//     let j = cleanedString.length - 1;

//     while (i < j) {
//         if (cleanedString[i] !== cleanedString[j]) {
//             return false;
//         }
//         i++;
//         j--;
//     }

//     return true;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"))
