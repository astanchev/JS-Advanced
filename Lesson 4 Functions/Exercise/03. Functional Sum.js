let add2 = (function () {
    let sum = 0;

    return function add() {
        sum += arguments[0];

        add.toString = function () {
            return sum;
        };

        return add;
    };
})();

function add(n) {
    let num = n;

    function sum(a) {
        num += a;
        return sum;
    }

    sum.toString = () => num;

    return sum;
}

console.log(add(1)(6)(78)(-3).toString()); 