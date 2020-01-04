function solution(input) {
    return (x) => Number(input) + x;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log();
let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
