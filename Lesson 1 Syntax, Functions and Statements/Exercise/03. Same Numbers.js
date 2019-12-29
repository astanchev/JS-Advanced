function solve(num) {
    let arr = num.toString().split('').map(Number);
    let sum = arr.reduce((a,b) => a + b, 0);
    let distinctArr = [...new Set(arr)];
    let result = distinctArr.length > 1 ? 'false' : 'true';

    console.log(result);
    console.log(sum);
}

solve(22222522);
solve(2222222);
