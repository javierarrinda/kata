//anagrams

// An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

// my answer: (originally Nick's answer)

function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

  sortedWords.forEach((word, theIndex)=>{
    for(let i = theIndex+1; i < sortedWords.length; i++){
      if(word === sortedWords[i]){
        numberOfAnagrams++
      }
    }
  })
  return numberOfAnagrams
}

// good answer as well: 


function anagramCounter (wordsArray) {
  var counter = 0;
  var wordSorted = wordsArray.map(function(word){
    word = word.split("").sort().join("");
    return word;
  })
  for (var i = 0; i < wordSorted.length; i++){
    for (var j = i; j < wordSorted.length; j++) {
      if(wordSorted[i] === wordSorted[j+1]) counter++
    };
  };
  return counter;
}


//test 
We all love fridays, and even better if it is the last day of the month!

In this kata you should write a function that will receive 2 parameters. Both are years, and indicates a range.

Your work is to return the number of times a month ends with a Friday.

If there is only one year provided, return the number of times a month ends on Friday on that year. Range bounds are inclusive in every case!

For example, between 1901 and 2000, a month ends on Friday 171 times.


// my answer (or should i say Nick's answer)


//best answer: 
function lastDayIsFriday(initialYear, endYear = initialYear) {
  let fridays = 0
  for (let y = initialYear; y <= endYear; y++) {
    for (let month = 0; month < 12; month++) {
      if (new Date(y, month + 1, 0).getDay() === 5) fridays++
    } 
  }
  return fridays
}