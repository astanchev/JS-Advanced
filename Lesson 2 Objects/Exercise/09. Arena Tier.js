function solve(input) {
    input.pop();

    let tier = new Map();

    for (const commandArgs of input) {

        if (commandArgs.includes(' -> ')) {
            addGladiator(commandArgs);
        } else {
            let [firstGladiatorName, secondGladiatorName] = commandArgs.split(' vs ');

            if (tier.has(firstGladiatorName) &&
                tier.has(secondGladiatorName)) {

                battle(firstGladiatorName, secondGladiatorName);
            }
        }
    }

    let orderedTier = Array.from(tier.entries())
        .sort((g1, g2) => {
            let firstSum = Array.from(g1[1].values())
                .reduce((sum, next) => sum + next, 0);
            let secondSum = Array.from(g2[1].values())
                .reduce((sum, next) => sum + next, 0);

            return secondSum - firstSum || g1[0].localeCompare(g2[0]);
        });

    orderedTier.forEach(g => {
        let sum = Array.from(g[1].values())
        .reduce((sum, next) => sum + next, 0);

        console.log(`${g[0]}: ${sum} skill`);

        let techniques = Array.from(g[1].entries())
                                .sort((t1,t2) => t2[1] -t1[1] || 
                                t1[0].localeCompare(t2[0]));

        techniques.forEach(t => console.log(`- ${t[0]} <!> ${t[1]}`));
    });

    function addGladiator(commandArgs) {
        let [gladiator, technique, skill] = commandArgs.split(' -> ');

        if (!tier.has(gladiator)) {
            tier.set(gladiator, new Map());
        }

        let allTechniques = tier.get(gladiator);

        if (!allTechniques.has(technique)) {
            allTechniques.set(technique, Number(skill));
        } else {
            let newSkill = allTechniques.get(technique) < Number(skill) ?
                Number(skill) :
                allTechniques.get(technique);

            allTechniques.set(technique, newSkill);
        }

        tier.set(gladiator, allTechniques);
    }

    function battle(firstGladiatorName, secondGladiatorName) {

        let firstGladiator = tier.get(firstGladiatorName);
        let secondGladiator = tier.get(secondGladiatorName);

        let hasBattle = false;

        firstTechniquesKeys = Array.from(firstGladiator.keys());
        secondTechniquesKeys = Array.from(secondGladiator.keys());

        for (const t of firstTechniquesKeys) {
            if (secondTechniquesKeys.includes(t)) {
                hasBattle = true;
                break;
            }
        }

        if (hasBattle) {
            let firstPoints = 0;
            firstTechniquesKeys.forEach(t => firstPoints += firstGladiator.get(t));

            let secondPoints = 0;
            secondTechniquesKeys.forEach(t => secondPoints += secondGladiator.get(t));

            if (firstPoints > secondPoints) {
                tier.delete(secondGladiatorName);
            } else if (firstPoints < secondPoints) {
                tier.delete(firstGladiatorName);
            } else {
                return;
            }
        }
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