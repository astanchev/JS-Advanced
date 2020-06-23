const sortMethods = {
    asc: (a, b) => a.id - b.id,
    desc: (a, b) => b.id - a.id,
    username: (a, b) => (a.username).localeCompare(b.username)
};

const arr = [{id: 1, username: 'Ivan'}, 
                {id: 3, username: 'Peter'},
                {id: 2, username: 'George'}];

const sortedArr = arr.sort(sortMethods['username']);

//console.log(sortedArr);


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
const arr5 = [...arr1, ...arr2];

console.log(arr3);
console.log();
console.log(arr5);