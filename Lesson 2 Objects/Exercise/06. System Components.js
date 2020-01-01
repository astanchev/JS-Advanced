function solve(input) {
    let catalogue = {};

    for (const line of input) {
        let [system, comp, subcomp] = line.split(" | ");

        if (!catalogue.hasOwnProperty(system)) {
            catalogue[system] = {};
        }

        if (!catalogue[system].hasOwnProperty(comp)) {
            catalogue[system][comp] = [];
        }

        catalogue[system][comp].push(subcomp);
    }

    let computeLength = function (obj) {
        return Object.entries(obj).length;
    };

    let sortedSystems = Object
        .entries(catalogue)
        .sort((systemA, systemB) => {
            return computeLength(systemB[1]) - computeLength(systemA[1]) || 
                    systemA[0].localeCompare(systemB[0]);
        });

    for (const [system, componentsObj] of sortedSystems) {
        console.log(system);

        let sortedComponents = Object.entries(componentsObj)
            .sort((componentA, componentB) => computeLength(componentB[1]) - computeLength(componentA[1]));

        for (const [component, subcomponentsArr] of sortedComponents) {
            console.log(`|||${component}`);
            subcomponentsArr.forEach(el => console.log(`||||||${el}`));
        }
    }
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);