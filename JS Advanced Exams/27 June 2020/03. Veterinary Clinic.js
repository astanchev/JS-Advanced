class VeterinaryClinic {
    constructor (clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.workload = 0;
    }
    
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.workload === this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let client = this.clients.find(c => c.name === ownerName);
        if (client === undefined) {
            client = {
                name: ownerName,
                pets: []
            };

            this.clients.push(client);
        }

        let pet = client.pets.find(p => p.name === petName);

        if (client !== undefined && pet !== undefined && pet.procedures.length > 0) {
            throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.procedures.join(', ')}.`);
        }

        if (pet === undefined) {
            pet = {
                name: petName,
                kind: kind,
                procedures: []
            };

            client.pets.push(pet);
        }

        if (pet.procedures.length === 0) {
            procedures.forEach(p => pet.procedures.push(p));
        }
        
        this.workload++;
        return `Welcome ${petName}!`;
    }

    onLeaving (ownerName, petName) {
        let client = this.clients.find(c => c.name === ownerName);
        if (client === undefined) {
            throw new Error('Sorry, there is no such client!');
        }

        let pet = client.pets.find(p => p.name === petName);
        if (pet === undefined || pet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }

        let profit = pet.procedures.length * 500;
        this.totalProfit += profit;
        pet.procedures = [];
        this.workload--;

        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const percentage = Math.floor((this.workload / this.capacity) * 100);

        const result = [
            `${this.clinicName} is ${percentage}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`,
        ];

        const orderedOwners = this.clients.slice().sort((o1, o2) => (o1.name).localeCompare(o2.name));

        for (const owner of orderedOwners) {
            result.push(`${owner.name} with:`);

            const orderedPets = owner.pets
                                        .slice()
                                        .sort((p1, p2) => (p1.name).localeCompare(p2.name));
            for (const pet of orderedPets) {
                result.push(`---${pet.name } - a ${pet.kind.toLowerCase()} that needs: ${pet.procedures.join(', ')}`);
            }
        }

        return result.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());

// Welcome Tom!
// Welcome Max!
// Welcome Tiny!
// Goodbye Tiny. Stay safe!
// SoftCare is 20% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
// SoftCare is 30% busy today!
// Total profit: 500.00$
// Anna Morgan with:
// ---Max - a dog that needs: SK456, DFG45, KS456
// Jim Jones with:
// ---Sara - a dog that needs: A154B
// ---Tiny - a cat that needs: 
// ---Tom - a cat that needs: A154B, 2C32B, 12CDB
