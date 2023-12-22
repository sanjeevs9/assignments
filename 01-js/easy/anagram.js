/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
str1 = str1.toLowerCase();
str2 = str2.toLowerCase();
if(str1.length!==str2.length){
  return false;
}
for(let i=0;i<str1.length;i++){
   let char = str1.charAt(i);
   let index = str2.indexOf(char);

   if(index === -1){
    return false;
   }
   
   str2 = str2.slice(0,index) + str2.slice(index +1);

}
return true;

}

module.exports = isAnagram;
