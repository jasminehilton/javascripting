const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving"
];

let joinList = function(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + ", ";
    }
  }
  return str;
};

// Test / Driver Code below...

const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

