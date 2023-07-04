const diceRoller = function(rolled) {
  let rolledValues = [];
  for (let i = 1; i <= rolled; i++) {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    rolledValues.push(diceValue);
  }
  return rolledValues.join(", ");
};


const args = process.argv.slice(2);
let rolls = args[0];
let numOfRolls = Number(rolls);
let diceRolls = diceRoller(numOfRolls);
console.log(`Rolled ${numOfRolls} dice: ${diceRolls}`);
