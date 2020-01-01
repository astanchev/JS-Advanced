function solve(paramsObj, paramsArr) {
    let kingdomsObj = {};

    for (let tokensObj of paramsObj) {

        let kingdomName = tokensObj.kingdom;
        let generalName = tokensObj.general;
        let armyCount = tokensObj.army;

        if (!kingdomsObj[kingdomName]) {
            kingdomsObj[kingdomName] = {};
        }

        if (!kingdomsObj[kingdomName][generalName]) {
            kingdomsObj[kingdomName][generalName] = { army: 0, wins: 0, losses: 0 };
        }

        kingdomsObj[kingdomName][generalName].army += armyCount;
    }

    for (let tokensArr of paramsArr) {

        let [attackingKingdom, attackingGeneral, defendingKingdom, defendingGeneral] = tokensArr;

        if (attackingKingdom === defendingKingdom) {
            continue;
        }

        let attackingArmy = kingdomsObj[attackingKingdom][attackingGeneral];
        let defendingArmy = kingdomsObj[defendingKingdom][defendingGeneral];

        if (attackingArmy.army > defendingArmy.army) {
            attackingArmy.wins++;
            defendingArmy.losses++;

            attackingArmy.army = Math.trunc(attackingArmy.army * 1.1);
            defendingArmy.army = Math.trunc(defendingArmy.army * 0.9);
        }

        if (attackingArmy.army < defendingArmy.army) {
            defendingArmy.wins++;
            attackingArmy.losses++;

            defendingArmy.army = Math.trunc(defendingArmy.army * 1.1);
            attackingArmy.army = Math.trunc(attackingArmy.army * 0.9);

        }
    }

    let sortedKingdoms = Object
        .entries(kingdomsObj)
        .sort((kingdomA, kingdomB) => {
            let generalAWins = Object.entries(kingdomB[1]).map((generalB) => generalB[1].wins).reduce((x, y) => x + y, 0);
            let generalBWins = Object.entries(kingdomA[1]).map((generalA) => generalA[1].wins).reduce((x, y) => x + y, 0);
            let generalALosses = Object.entries(kingdomA[1]).map((generalA) => generalA[1].losses).reduce((x, y) => x + y, 0);
            let generalBLosses = Object.entries(kingdomB[1]).map((generalB) => generalB[1].losses).reduce((x, y) => x + y, 0);
            let kingdomAName = kingdomA[0];
            let kingdomBName = kingdomB[0];

            return generalAWins - generalBWins ||
                generalALosses - generalBLosses ||
                kingdomAName.localeCompare(kingdomBName);
        })[0];

    console.log(`Winner: ${sortedKingdoms[0]}`);

    let sortedGenerals = Object
        .entries(sortedKingdoms[1])
        .sort(
            (generalA, generalB) => generalB[1].army - generalA[1].army);

    for (let [generalName, generalsObj] of sortedGenerals) {
        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${generalsObj.army}`);
        console.log(`---wins: ${generalsObj.wins}`);
        console.log(`---losses: ${generalsObj.losses}`);
    }
}

solve([
    { kingdom: "Maiden Way", general: "Merek", army: 5000 },
    { kingdom: "Stonegate", general: "Ulric", army: 4900 },
    { kingdom: "Stonegate", general: "Doran", army: 70000 },
    { kingdom: "YorkenShire", general: "Quinn", army: 0 },
    { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
    { kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]
    ]);