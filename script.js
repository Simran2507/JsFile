alert("You did it");

console.log("HELLO WORLD");

function add(a,b){
    return(a+b);
}

// console.log(add(3,4));

function findType(a){
    if(a%2 == 0){
        return true;
    }else
    return false;
}

// var ans= findType(8);
// if(ans){
//     console.log("Even")
// }else{
//     console.log("Odd")
// }

function counts(str){
    let cnt=0;
    for(characters in str){
        cnt++;
    }
    return cnt;
    
}

// let ans= counts("SI");
// console.log(ans);

function sumIs(arr){
    // let sum=0;
    // for(let i=0;i<arr.length;i++){
    //     sum=sum+arr[i];
    // }
    // return sum
    return arr.reduce((sum, currentElement) => sum * currentElement, 1);
}
// let arr=[1,2,3,4,8];
// console.log(sumIs(arr));
// console.log(sumIs([1,2,3,5,8]));

function primeIs(n){
    for(let i=2;i*i<=n;i++){
        if(n%i === 0){
            return true;
        }else{
            return false;
        }
    }
}

// if(primeIs(30)){
//     console.log("Not a prime num");
// }else{
//     console.log("IT IS PRIME");
// }

function largestNumber(n,a){
    // n.sort(function(a,b){
    //     // console.log(a,b);
    //     // console.log(b);
    //     return a-b;
    //     // console.log(a-b);
    // });
    // return (n);
    
    let max=arr[0];
    for(let i=1;i<a;i++){
        if(max<arr[i]){
            max= arr[i];
        }
    }
    return max;
}


// let arr=[200,4,56,1,33,39];
// let a= arr.length;
// console.log(largestNumber(arr,a))

// largestNumber(arr);
// let a= arr.length-1;
// console.log(arr[a]);
//for smallest element :- arr[0]
//console.log(arr[0]);

function reverseArr(arr){
    let n=arr.length;
    for(let i=0;i<=n/2;i++){
        [arr[i],arr[n-i-1]] = [arr[n-i-1],arr[i]];
    }
    return arr;
    //arr.reverse()- inbuilt function.
}

// let a = [1,2,3,4,5,6];
// console.log(reverseArr(a))

function reverseString(str){
    // return str.split("").reverse().join("");
    let strNew="";
    for(let i=str.length-1;i>=0;i--){
        strNew= strNew+str[i];
    }
    return strNew;
    
}

// console.log(reverseString("simixgh"));


function factorial(n){
    if(n === 0 || n=== 1){
        return 1;
    }
    return n*factorial(n-1);
}

// console.log(factorial(15));


function palindrome(n){
    let a= n.length;
    let check= true;
    for(let i=0;i<a;i++){
        if(n[i] != n[a-i-1]){
            check=false;
            break;
        }
    }
    return check;
}

let str=[2,3,4,3,2,1]
let answer=palindrome(str);
if(answer){
    console.log("yes")
}else
console.log("no")


// let arr=[1,2,3,4,5,3,2];
// let res=[];
// arr.forEach((ele)=>{
//     if(arr.indexOf(ele)!=arr.lastIndexOf(ele) && !res.includes(ele))
//     res.push(ele);
// })
// console.log(res);


// let arr=[1,2,3,4,5,3,2];
// let res=[];
// arr.forEach((ele)=>{
//     if(arr.indexOf(ele) == arr.lastIndexOf(ele))
//     res.push(ele);
// })
// console.log(res);

// Implement a method which generates 5 random numbers?

function randomNumber(){
    for(let i=0;i<5;i++){
        let r=Math.random();
        let temp= r*(0-10)+10;
        console.log(Math.floor(temp));
    }
    
}

randomNumber();


function randomNumber(a,b){
    var temp=Math.random();
    var range=temp*(a-b)+b;
    return Math.floor(range);
}
console.log(randomNumber(19,100));


var str="vivek kumar hi ,this"
var arr=str.split(" ");
console.log(arr);
function longestWord(str){
    var maxlen=0;
    var res="";
  for(let i=0;i<str.length;i++){
      if(str[i].length>maxlen){
          maxlen=Math.max(maxlen,str[i].length);
          res=str[i];
      }
  }
  return res;
}

console.log(longestWord(arr));

function longestWord(str){
    let arr=str.split(" ");
    // console.log(arr);
    let maxi=0;
    let res="";
    for(let i=0;i<arr.length;i++){
        let cnt=arr[i].length;
        if(cnt>maxi){
            maxi=cnt;
            res=arr[i];
        }
    }
    return res;
}
// console.log(longestWord("I AM THE oliymh BEST "));

// Find the average of the numbers in the numbered array?
function average(arr){
    let a= arr.reduce((acc,cum) => acc+cum,0);
    // console.log(a);
    return a/(arr.length);
}

console.log(average([1,2,3,4,5,6]));

// How can you uppercase the first character in a string array?
function upperCase(str){
    let a = str.charAt(0).toUpperCase();
    let b= str.slice(1);
    return a+b;
}
// console.log(upperCase("simran"));


// How to make a sentence out of the given string array?

function wordsToSentences(str){
    const a = str.join("1233");
    return a;
}

// let str1=["This","is","my","name"];
// console.log(wordsToSentences(str1));

// Given two strings, how can you check if the strings are anagram for each other?
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charFrequency1 = {};
    const charFrequency2 = {};
  
    // Count the frequency of each character in the first string
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charFrequency1[char] = (charFrequency1[char] || 0) + 1;
    }
  
    // Count the frequency of each character in the second string
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      charFrequency2[char] = (charFrequency2[char] || 0) + 1;
    }
  
    // Compare the frequency counters
    for (const char in charFrequency1) {
      if (charFrequency1[char] !== charFrequency2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  let str = "simran";
  let str1 = "anirms";
  
  if (isAnagram(str, str1)) {
    console.log("It is an anagram.");
  } else {
    console.log("It's not an anagram.");
  }


  // How to check if an array contains any element of another array?
function exsistenceOfNum(arr1,arr2){
    let ans = arr1.some((a) => arr2.includes(a));
    
    return ans;
}

let arr1=["1","2","3"];
let arr2=["4","5","6"];

if(exsistenceOfNum(arr1,arr2)){
    console.log("EXSIST");
}else{
    console.log("Not EXSIST");
}
  


// Given an array of strings, reverse each word in the sentence?
function reverseWord(arr){
    for(let i=0;i<arr.length;i++){
        let word= arr[i];
        let a= word.charAt(0).toUpperCase();
        let b= word.slice(1);
        console.log(a+b);
    }
}
let arr=["this","is","my","nameis"];
reverseWord(arr);



// remove blank spaces

function removeSpaces(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            res += str[i]; 
            // Concatenate non-whitespace characters to the result string
        }
    }
    return res;
}
// let str = "THIS IS ME   DUDE";
// console.log(removeSpaces(str)); 



// For a given function, count the number of parameters expected by a function?

function name(res){
    let sum= res.reduce((acc,result) => (acc+result),0);
    console.log(sum)
}
let arr=[1,2,3,4,5,6,7];
name(arr);
console.log(name.length);


// Implement a method which generates 5 random numbers?