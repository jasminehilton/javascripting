let input = process.argv[2];

const reverseList = function(original) {
  if (original) {
    return original.split("").reverse().join("");
  }
};

<<<<<<< HEAD
console.log(reverseList(input));
=======
function reverse(original) {
  return orignal.split('').reverseList().join('');
}

// working code below

let input = process.argv[2]; // this is the input from the terminal

const reverseList = function(original) { 
  if (original) { // if original is true this will pass
    return original.split("").reverse().join(""); // returns the changed original string
  }
};

console.log(reverseList(input)); // console logs the result
>>>>>>> 234a0ca9353ab7b73998b7a322bb050f23c7935b
