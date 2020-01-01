function solve(input) {
    let result = new Set(input);
    result = Array.from(result
        .keys())
        .sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(result.join('\n'));
}

solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);