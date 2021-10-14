function solve(input){
    function filtered(string){
        return string.replace(/[?.,!]/g, '');
    }
    
    let result = filtered(input).split(' ').map(function(x){return x.toUpperCase();});

    console.log(result.join(', '))
}

// function solve(text){
//     let words = text
//         .split(/[' .,!?-]/g)
//         .filter(x=> x != '')
//         .map(x=> x.toUpperCase());

//         console.log(words.join(', '));
// }

solve('Hi, how are you?');