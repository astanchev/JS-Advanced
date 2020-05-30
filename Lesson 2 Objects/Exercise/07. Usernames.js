function solve(input) {
    const result = Array.from(new Set(input));

    console.log(result
        .sort((a, b) =>
            a.length - b.length ||
            a.localeCompare(b))
        .join('\n'));
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