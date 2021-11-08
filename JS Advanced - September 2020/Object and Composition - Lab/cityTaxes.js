function createCityRecord(name, population, treasury) {

  let record =
  {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += Math.floor(population * this.taxRate);
    },
    applyGrowth(percentage) {
      this.population += Math.floor(population * (percentage/100));
    },
    applyRecession(percentage) {
      this.treasury -= Math.ceil(this.treasury*(percentage/100));
    }

  };

  return record;
}

const city =
  createCityRecord('Tortuga',
    7000,
    15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);