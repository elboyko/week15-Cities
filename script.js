const cities = ['Москва', 'Новосибирск', 'Екатеринбург', 'Казань'];
const temp = [];
let list = document.querySelector('.list');


for (let i = 0; i < cities.length; i++) {
   let tempCity = prompt(`Введите температуру для города ${cities[i]}`)
   tempCity = Number(tempCity);
   temp.push(tempCity);
}
for (let i = 0; i < cities.length; i++) {
   let elemList = document.createElement('li');
   elemList.textContent = `Температура в городе ${cities[i]}: ${temp[i]}\xB0C`;
   list.append(elemList);
}


// находим максимальную температуру

let maxTemp = temp[0];
for (let max of temp) {
   if (max > maxTemp) {
      maxTemp = max;
   }
}
let maxTempOut = document.createElement('p');
maxTempOut.textContent = `Максимальная температура равна: ${maxTemp}\xB0C`;
list.append(maxTempOut);

// находим минимальную температуру
let minTemp = temp[0];
for (let min of temp) {
   if (min < minTemp) {
      minTemp = min;
   }
}
let minTempOut = document.createElement('p');
minTempOut.textContent = `Минимальная температура равна: ${minTemp}\xB0C`;
list.append(minTempOut);



