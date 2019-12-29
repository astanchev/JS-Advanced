function solve(d) {
    let week = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    };

    let result = week[d] ? week[d] : 'error';

    console.log(result);
}

solve('Monday');