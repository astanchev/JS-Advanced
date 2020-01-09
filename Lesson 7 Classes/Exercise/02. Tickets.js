function solve(inputTickets, sortCriteria) {
    result = [];

    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination; 
            this.price = +price;
            this.status = status;
        }
    }

    for (const arg of inputTickets) {
        let [destination, price, status] = arg.split('|');
        price = price;

        let ticket = new Ticket(destination, price, status);

        result.push(ticket);
    }

    result = result
        .filter(Boolean)
        .sort((a, b) => {
            if (typeof(a[sortCriteria]) === 'number') {
                return a[sortCriteria] - b[sortCriteria];
            } else {
                return a[sortCriteria].localeCompare(b[sortCriteria]);
            }            
        });

    return result;
}

console.log(solve([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
    ));