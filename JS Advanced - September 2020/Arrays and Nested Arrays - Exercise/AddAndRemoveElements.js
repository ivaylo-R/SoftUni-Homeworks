function solve(commands) {
    let result = [];
    let startIndex = 1;
    let emptyResult='Empty';

    for (let i = 0; i < commands.length; i++) {
        let cmd = commands[i];
        if (cmd === 'remove') {
            result.pop();
            startIndex++;
        } else {
            result.push(startIndex++);
        }

    }

    result.length > 0 ? result.forEach(x => console.log(x)) : console.log(emptyResult);
}

solve(['remove', 
'remove', 
'remove']);

solve(['add',
    'add',
    'remove',
    'add',
    'add']);
solve(['add',
    'add',
    'add',
    'add']
);