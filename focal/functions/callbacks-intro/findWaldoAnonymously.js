// ============================ find waldos index with a for loop ============================ 

const findWaldo = function (names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(i); 
    }
  }
};
const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// ============================ find waldos index with a forEach  ============================ 

const findWaldo = function (names, found) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i);
    }
  });
};  
const actionWhenFound = function (index) {
  console.log(`Found Waldo at index ${index}!`);
};
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// ============================ find waldos index anonymously  ============================ 

const findWaldo = function (names, found) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i); 
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});
