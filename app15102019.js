let sqrtNumber = 4;

const nearestSquare = num => {
  return Math.pow(Math.round(Math.sqrt(num)), 2);
};

// console.log(nearestSquare(sqrtNumber));

let c = 19;

let value = Math.floor((Math.sqrt(nearestSquare(8 * c + 1)) - 1) / 2);

console.log(
  value,
  `Number of consecutive natural numbers to be added to get ${c}*approx`
);
