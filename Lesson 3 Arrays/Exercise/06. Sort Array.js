function sortBy2Criteria(input) {
    let sortFunction = (a, b) => a.length - b.length || 
                                    a.localeCompare(b);

    let result = input.sort(sortFunction);

    return result.join('\n');
}

console.log(sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));