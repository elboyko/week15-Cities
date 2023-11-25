const cities = ['Москва', 'Новосибирск', 'Екатеринбург', 'Казань'];
const temp = [];
let list = document.querySelector('.list');


for (let i = 0; i < cities.length; i++) {
   let tempCity = prompt(`Введите температуру для города ${cities[i]}`);
   tempCity = Number(tempCity);

   if (isNaN(tempCity)) {
      tempCity = +prompt(`Введите корректную температуру для города ${cities[i]}`)
   }
   temp.push(tempCity);
}


for (let i = 0; i < cities.length; i++) {
   let elemList = document.createElement('li');
   elemList.textContent = `Температура в городе ${cities[i]}: ${temp[i]}\xB0C`;
   list.append(elemList);
}


// находим максимальную температуру

let maxT = Math.max(...temp);
let maxTempOut = document.createElement('p');
maxTempOut.textContent = `Максимальная температура равна: ${maxT}\xB0C`;
list.append(maxTempOut);



// находим минимальную температуру
let minT = Math.min(...temp);
let minTempOut = document.createElement('p');
minTempOut.textContent = `Минимальная температура равна: ${minT}\xB0C`;
list.append(minTempOut);



