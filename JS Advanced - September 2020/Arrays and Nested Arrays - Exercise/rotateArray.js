function solve(input, n) {

    for (let i = 0; i < n; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

solve(['1',
    '2',
    '3',
    '4'],
    2);

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);