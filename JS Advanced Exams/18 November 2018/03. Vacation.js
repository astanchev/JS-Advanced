class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }

    get numberOfChildren() {
        return [...Object.values(this.kids)].flat().length;
    }

    registerChild(name, grade, budget) {
        if (budget < this.budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
        
        if (this.kids[grade].some(k => k.name === name)) {
            return `${name} is already in the list for this ${this.destination} vacation.`;
        }

        this.kids[grade].push({name, budget});
        return this.kids[grade].map(k => k.name + '-' + k.budget);
    }

    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade) || this.kids[grade].every(k => k.name !== name)) {
            return `We couldn't find ${name} in ${grade} grade.`;
        }

        const indexKid = this.kids[grade].findIndex(k => k.name === name);
        this.kids[grade].splice(indexKid, 1);

        return this.kids[grade].map(k => k.name + '-' + k.budget);
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        const orderedGrades = Array.from(Object.entries(this.kids))
                                .filter(g => g[1].length > 0)
                                .sort((g1, g2) => Number(g1[0]) < Number(g2[0]));

        const result = [`${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`];

        orderedGrades.forEach(g => {
            result.push(`Grade: ${g[0]}`);
            g[1].forEach((k, i) => {
                result.push(`${i+1}. ${k.name}-${k.budget}`);
            });
            res.push('');
        });

        return result.join('\n');
    }
}

// let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Lilly', 6, 2100));
// console.log(vacation.registerChild('Pesho', 6, 2400));
// console.log(vacation.registerChild('Gosho', 5, 2000));
// console.log(vacation.registerChild('Tanya', 5, 6000));
// console.log(vacation.registerChild('Mitko', 10, 1590));

// [ 'Gosho-2000' ]
// [ 'Lilly-2100' ]
// [ 'Lilly-2100', 'Pesho-2400' ]
// Gosho is already in the list for this San diego vacation.
// [ 'Gosho-2000', 'Tanya-6000' ]
// Mitko's money is not enough to go on vacation to San diego.

// let vacation2 = new Vacation('Mr Pesho', 'San diego', 2000);
// vacation2.registerChild('Gosho', 5, 2000);
// vacation2.registerChild('Lilly', 6, 2100);

// console.log(vacation2.removeChild('Gosho', 9));

// vacation2.registerChild('Pesho', 6, 2400);
// vacation2.registerChild('Gosho', 5, 2000);

// console.log(vacation2.removeChild('Lilly', 6));
// console.log(vacation2.registerChild('Tanya', 5, 6000));

// We couldn't find Gosho in 9 grade.
// [ 'Pesho-2400' ]
// [ 'Gosho-2000', 'Tanya-6000' ]

let vacation3 = new Vacation('Miss Elizabeth', 'Dubai', 2000);

vacation3.registerChild('Gosho', 5, 3000);
vacation3.registerChild('Lilly', 6, 1500);
vacation3.registerChild('Pesho', 7, 4000);
vacation3.registerChild('Tanya', 5, 5000);
vacation3.registerChild('Mitko', 10, 5500);

console.log(vacation3.toString());

// Miss Elizabeth will take 4 children on trip to Dubai
// Grade: 5
// 1. Gosho-3000
// 2. Tanya-5000

// Grade: 7
// 1. Pesho-4000

// Grade: 10
// 1. Mitko-5500
