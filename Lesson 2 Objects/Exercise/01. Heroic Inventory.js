function solve(input) {
    let result = [];

    for (const line of input) {
        let [name, level, itemsInfo] = line.split(' / ');
        level = +level;
        let items = itemsInfo ? 
                        itemsInfo.split(', ') : 
                        [];

        let hero = {name, level, items};
        result.push(hero);
    }

    console.log(JSON.stringify(result));
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);