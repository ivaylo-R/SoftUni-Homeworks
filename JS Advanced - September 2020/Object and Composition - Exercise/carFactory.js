function carFactory(car) {
    let power = 1;
    let volume = 1;

    if (car.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (car.power >90 && car.power< 200) {
        power = 120;
        volume = 2400;
    } else if (car.power >= 200) {
        power = 200;
        volume = 3500;
    }

    delete car.power;
    car.engine = { power: power, volume: volume };

    let carriageType = car.carriage;
    delete car.carriage;
    car.carriage = { type:carriageType, color:car.color };
    delete car.color;

    let diameter = Math.floor(car.wheelsize);
    delete car.wheelsize;

    if(diameter%2===0){
        diameter--;
    }

    car.wheels= new Array(4).fill(diameter);
    
    return car;
}



carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});