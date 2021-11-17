function lowestPricesInCities(input) {
    let products = [];

    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(" | ");
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }

        products[product][town] = price;
    }

    let result = [];

    for (const product in products) {
        let townsWithProducts = Object.entries(products[product])
            .sort((a, b) => a[1] - b[1]);
        let cheapestTown = townsWithProducts[0];
        
        result.push(`${product} -> ${cheapestTown[1]} (${cheapestTown[0]})`);
    }

    return result.join('\n');
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);