class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(number) {
        this.innerLength += number;
    }

    decrease(number) {
        this.innerLength = Math.max(this.innerLength - number, 0);
    }

    toString() {
        let result = this.innerString.slice(0, this.innerLength);

        result = result === this.innerString ? result : result + '...';

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test