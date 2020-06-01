function solve(input) {
    const gladiatorPool = {};

    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        } else if (line.includes(' vs ')) {
            let [gladiator1, gladiator2] = line.split(' vs ');

            if (hasBattle(gladiator1, gladiator2)) {
                const gladiator1TotalSkills = Object.values(gladiatorPool[gladiator1])
                    .reduce((a, b) => a + b, 0);
                const gladiator2TotalSkills = Object.values(gladiatorPool[gladiator2])
                    .reduce((a, b) => a + b, 0);
                if (gladiator1TotalSkills > gladiator2TotalSkills) {
                    delete gladiatorPool[gladiator2];
                } else if (gladiator1TotalSkills < gladiator2TotalSkills) {
                    delete gladiatorPool[gladiator1];
                }
            }
        } else {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = +skill;

            if (!gladiatorPool.hasOwnProperty(gladiator)) {
                gladiatorPool[gladiator] = {};
            }

            if (!gladiatorPool[gladiator].hasOwnProperty(technique)) {
                gladiatorPool[gladiator][technique] = skill;
            }

            if (gladiatorPool[gladiator][technique] < skill) {
                gladiatorPool[gladiator][technique] = skill;
            }
        }
    }

    const orderedGladiators = Array
                                .from(Object.keys(gladiatorPool))
                                .sort((g1, g2) => 
                                                sumSkills(g2) - sumSkills(g1) || 
                                                g1.localeCompare(g2));

    for (const gladiator of orderedGladiators) {
        const totalSkill = sumSkills(gladiator);
        console.log(`${gladiator}: ${totalSkill} skill`);

        const orderedTechniques = Object
                                    .keys(gladiatorPool[gladiator])
                                    .sort((t1, t2) => 
                                        gladiatorPool[gladiator][t2] - gladiatorPool[gladiator][t1] ||
                                        t1.localeCompare(t2));

        for (const technique of orderedTechniques) {
            console.log(`- ${technique} <!> ${gladiatorPool[gladiator][technique]}`);
        }
    }

    function hasBattle(gladiator1, gladiator2) {
        return gladiatorPool.hasOwnProperty(gladiator1) &&
            gladiatorPool.hasOwnProperty(gladiator2) &&
            hasSameProperty(gladiator1, gladiator2);
    }

    function hasSameProperty(gladiator1, gladiator2) {
        return Object
            .keys(gladiatorPool[gladiator1])
            .some(x => gladiatorPool[gladiator2]
                .hasOwnProperty(x));
    }

    function sumSkills(gladiator) {
        return Object.values(gladiatorPool[gladiator]).reduce((a, b) => a + b, 0);
    }
}

solve([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log();
solve([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);