// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];

const weightOfAllCars = cars.reduce((accumulator, car) => {
    console.log(`
        accumulator: ${accumulator}, weight: ${car.weight}
    `);
    return accumulator + car.weight;
}, 0)

console.log(weightOfAllCars);

const weightOfElectricCars = cars.reduce((accumulator, electricCar) => {
    if (electricCar.isElectric === true){
        return accumulator + electricCar.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(weightOfElectricCars);