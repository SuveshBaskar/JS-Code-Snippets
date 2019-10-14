let value = 7;

let count = (value * (value + 1)) / 2;

console.log(count, `Sum of ${value} natural numbers`);

let result = count;

let roots = (Math.sqrt(8 * count + 1) - 1) / 2;

console.log(roots, 'Root found');
