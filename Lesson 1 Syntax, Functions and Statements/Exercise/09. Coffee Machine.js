function solve(paramsList) {
    let income = 0;

    for (const lineInfo of paramsList) {

        let sum = 0.80;
        const elements = lineInfo.split(', ');
        const coins = Number(elements[0]);
        const product = elements[1];
        const sugar = Number(elements[elements.length - 1]);

        if (elements.includes('decaf')) {
            sum += 0.10;
        }

        if (elements.includes('milk')) {
            sum += 0.10;
        }

        if (sugar >= 1 && sugar <= 5) {
            sum += 0.10;
        }

        const difference = Math.abs(coins - sum).toFixed(2);

        if (coins >= sum) {
            income += sum;
            console.log(`You ordered ${product}. Price: \$${sum.toFixed(2)} Change: \$${difference}`);
        } else if (coins < sum) {
            console.log(`Not enough money for ${product}. Need \$${difference} more.`);
        }
    }

    console.log(`Income Report: \$${income.toFixed(2)}`);
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);