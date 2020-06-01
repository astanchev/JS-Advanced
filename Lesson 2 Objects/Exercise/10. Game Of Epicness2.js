function solve(a, b) {
    const realm = {};

    addKingdoms(a);

    battle(b);

    const winner = findWinner();

    printWinnerKingdom(winner);

    function printWinnerKingdom(winner) {
        console.log(`Winner: ${winner}`);
        const orderedGenerals = Array.from(Object.keys(realm[winner]))
                                    .sort((g1, g2) => realm[winner][g2].army - realm[winner][g1].army);

        for (const general of orderedGenerals) {
            console.log(`\/\\general: ${general}`);
            console.log(`---army: ${realm[winner][general].army}`);
            console.log(`---wins: ${realm[winner][general].wins}`);
            console.log(`---losses: ${realm[winner][general].losses}`);
        }
    }

    function findWinner() {
        const orderedKingdoms = Array
            .from(Object.keys(realm))
            .sort((k1, k2) => sumWins(k2) - sumWins(k1) ||
                sumLosses(k1) - sumLosses(k2) ||
                k1.localeCompare(k2));

        return orderedKingdoms[0];
    }

    function sumWins(kingdom) {
        return Array.from(Object.values(realm[kingdom]).map(x => x.wins))
            .reduce((a, b) => a + b, 0);
    }

    function sumLosses(kingdom) {
        return Array.from(Object.values(realm[kingdom]).map(x => x.losses))
            .reduce((a, b) => a + b, 0);
    }

    function battle(battles) {
        for (const line of battles) {
            const [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = line;

            if (attackingKingdom === defendingKingdom) {
                continue;
            }

            const attackingArmy = realm[attackingKingdom][attackingGeneral].army;
            const defendingArmy = realm[defendingKingdom][defendingGeneral].army;

            if (attackingArmy > defendingArmy) {
                realm[attackingKingdom][attackingGeneral].army += Math.floor(0.1 * attackingArmy);
                realm[attackingKingdom][attackingGeneral].wins += 1;
                realm[defendingKingdom][defendingGeneral].army = Math.floor(0.9 * defendingArmy);
                realm[defendingKingdom][defendingGeneral].losses += 1;

            } else if (attackingArmy < defendingArmy) {
                realm[defendingKingdom][defendingGeneral].army += Math.floor(0.1 * defendingArmy);
                realm[defendingKingdom][defendingGeneral].wins += 1;
                realm[attackingKingdom][attackingGeneral].army = Math.floor(0.9 * attackingArmy);
                realm[attackingKingdom][attackingGeneral].losses += 1;
            }
        }
    }

    function addKingdoms(kingdoms) {
        for (const line of kingdoms) {
            if (!realm.hasOwnProperty(line.kingdom)) {
                realm[line.kingdom] = {};
            }
            if (!realm[line.kingdom].hasOwnProperty(line.general)) {
                realm[line.kingdom][line.general] = {};
                realm[line.kingdom][line.general].wins = 0;
                realm[line.kingdom][line.general].losses = 0;
                realm[line.kingdom][line.general].army = 0;
            }
            realm[line.kingdom][line.general].army += +line.army;

        }
    }
}

solve(
    [{
            kingdom: "Maiden Way",
            general: "Merek",
            army: 5000
        },
        {
            kingdom: "Stonegate",
            general: "Ulric",
            army: 4900
        },
        {
            kingdom: "Stonegate",
            general: "Doran",
            army: 70000
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 0
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 2000
        },
        {
            kingdom: "Maiden Way",
            general: "Berinon",
            army: 100000
        }
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]
);
console.log();
console.log();
solve(
    [{
            kingdom: "Stonegate",
            general: "Ulric",
            army: 5000
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 5000
        },
        {
            kingdom: "Maiden Way",
            general: "Berinon",
            army: 1000
        }
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Maiden Way", "Berinon", "YorkenShire", "Quinn"]
    ]);
console.log();
console.log();
solve(
    [{
            kingdom: "Maiden Way",
            general: "Merek",
            army: 5000
        },
        {
            kingdom: "Stonegate",
            general: "Ulric",
            army: 4900
        },
        {
            kingdom: "Stonegate",
            general: "Doran",
            army: 70000
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 0
        },
        {
            kingdom: "YorkenShire",
            general: "Quinn",
            army: 2000
        }
    ],
    [
        ["YorkenShire", "Quinn", "Stonegate", "Doran"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"]
    ]);