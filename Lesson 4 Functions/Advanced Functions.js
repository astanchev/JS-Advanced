
function curry(fn) {
  return function helper(...args) {
    if (args.length === fn.length) { return fn(...args); }
    return function (...newArgs) {
      return helper(...args.concat(newArgs));
    };
  };
}

function sum(a, b, c) {
  return a + b + c;
}

const cSum = curry(sum);

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

console.log(cSum(1)(2)(3));
console.log(cSum(1, 2)(3));
console.log(cSum(1, 2, 3));
console.log(cSum(1)(2, 3));

const addThree = cSum(1)(2);
const addFour = cSum(2)(2);

function compose(...fns) {
  return function (val) {
    return fns.reduceRight(function (acc, currFn) {
      return currFn(acc);
    }, val);
  };
}

function getProp(name, obj) {
  return obj[name];
}

function map(fn, arr) {
  return arr.map(i => fn(i));
}

function filter(pred, arr) {
  return arr.filter(pred);
}

const cGetProp = curry(getProp);
const cMap = curry(map);
const cFilter = curry(filter);

const getName = cGetProp('name');
const mapUserNames = cMap(getName);
const lengthLargerThan3 = cFilter(x => x.length > 3);

const arr = [
  { name: 'a', age: 1 },
  { name: 'ab', age: 2 },
  { name: 'abc', age: 1 },
  { name: 'abcd', age: 2 },
  { name: 'abcde', age: 2 }
];

const processUsers = compose(lengthLargerThan3, mapUserNames);
console.log(processUsers(arr));


function numGenenator() {
  let a = 0;
  return function () {
    return {
      value: ++a,
      done: false
    };
  };
}

function* num() {
  let n = 0;
  let done = false;
  while (!done) {
    done = yield n++;
  }
}

let numGen = num();

console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next());
console.log(numGen.next(true));
console.log(numGen.next());