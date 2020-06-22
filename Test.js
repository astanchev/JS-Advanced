const sortMethods = {
    asc: (a, b) => a.id - b.id,
    desc: (a, b) => b.id - a.id,
    username: (a, b) => (a.username).localeCompare(b.username)
};

const arr = [{id: 1, username: 'Ivan'}, 
                {id: 3, username: 'Peter'},
                {id: 2, username: 'George'}];

const sortedArr = arr.sort(sortMethods['username']);

console.log(sortedArr);