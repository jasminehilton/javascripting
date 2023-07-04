const findWaldo = function(names, found) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      found(i);
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);