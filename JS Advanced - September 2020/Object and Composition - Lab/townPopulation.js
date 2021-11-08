function solve(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' <-> ');
        let city = current[0];
        let populationCount = Number(current[1]);

        let isCityAlreadyExist = output.find(x => x.name === city);

        if (isCityAlreadyExist!==undefined) {
            isCityAlreadyExist.population += populationCount;
        } else {
            output.push({ name: city, population: populationCount });
        }

    }

    printResult();

    function printResult() {
        output.forEach(element => {
            console.log(`${element.name} : ${element.population}`)
        });
    }
}


solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);