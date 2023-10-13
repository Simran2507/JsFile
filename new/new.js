// for(let i=1;i<=100;i++){
//     if( i%3 === 0 && i%5===0){
//         console.log("FIZZ BUZZ")
//     }else if(i%3 === 0){
//         console.log("FIZZ")
//     }else if(i%5 === 0){
//         console.log("BUZZ")
//     }else{
//         console.log(i);
//     }
// }

// function reverse(str){
//     let res=[];
//     let a=str.split("");
//     for(let i=a.length-1;i>=0;i--){
//         let word= a[i];
//         res.push(word);
//     }
//     console.log(res.join(""));
// }

// reverse("SIMRAN")


// function palindrome(str){
//     let res=[];
//     let a= str.split('');
//     for(let i=a.length - 1 ;i>= 0;i--){
//         let word= a[i];
//         res.push(word);
//     }
//     if(str == res.join("")){
//         console.log("Palindrome")
//     }else{
//         console.log("Not Palindrome")
//     }
// }

// palindrome("sts");

// function longestWord(str){
//     let a= str.split(' ');
//     let maxi=0;
//     let res;
//     for(let i=0;i<a.length;i++){
//         let cnt= a[i].length;
//         if(maxi<cnt){
//             maxi=cnt;
//             res=a[i]
//         }
//     }
//     console.log(res);
// }
// longestWord("MY NAME IS SIMRAN Jaiswal")

// function factorial(num){
//     let ans= 1;
//     for(let i=1;i<=num;i++){
//         ans=i*ans;
//     }
//     console.log(ans);
// }

// factorial(5);

// function add(arr)
// {
//     let sum=arr.reduce((initial,currentValue) => initial+currentValue,0)
//     console.log(sum);
// }

// add([1, 2, 3, 4, 5])

// function anagramIs(str1,str2)
// {
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let charFreq1={};
//     let charFreq2={};
//     for(let i=0;i<str1.length;i++){
//         let word= str1[i];
//         charFreq1[word] = (charFreq1[word] || 0) +1;
//     }
    
    
//     for(let i=0;i<str2.length;i++){
//         let word=str2[i];
//         charFreq2[word] = (charFreq2[word] || 0) +1;
//     }
    
//     for (const char in charFreq1) {
//       if (charFreq1[char] !== charFreq2[char]) {
//         return false;
//       }
//     }

//     return true;
// }

// if(anagramIs("listen", "silent")){
//     console.log("ANAGRAM")
// }else{
//     console.log("NOT ANAGRAM")
// }


// // How to check if an array contains any element of another array?
// let arr1=["1","2","3"];
// let arr2=["3","4","5","6"];
// let ans = arr1.some( (a) => arr2.includes(a))
// if(ans){
//     // return true;
//     console.log("true");
// }else{
//     console.log("False")
//     return false;
// }

// // Given an array of strings, reverse each word in the sentence?

// function revi(str){
//     let a=str.split("").reverse().join("");
//     return a;
// }

// function spliti(str){
//     let a= str.split(" ");
//     let res=[];
//     for(let i=0;i<a.length;i++){
//         let word=revi(a[i]);
//         res.push(word);
//     }
//     console.log(res.join(" "));
// }
// spliti("MY NAME IS SIMRAN JAISWAL")
// revi("simi")


// function removeBlankSpaces(str){
//     let a= str.split(" ");
//     console.log(a);
//     let res=[];
//     for(let i =0;i<a.length;i++){
//         if(a[i] !== ""){
//             res.push(a[i])
//         }
//     }
//     return res.join(" ");
// }

// console.log(removeBlankSpaces("Hello    world!"));


// currying function

function sum(a){
    return function sumIs(b){
        return a+b;
    }
}

console.log(sum(2)(5));

//Count number of vowels

function cntVowel(str){
    let res=['a','e','i','o','u','A','E','I','O','U'];
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(res.includes(str[i])){
            console.log(str[i]);
            cnt++;
        }
    }
    return cnt;
}

console.log(cntVowel("SIMRan"));