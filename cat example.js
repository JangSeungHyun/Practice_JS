const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  var json_cats = JSON.parse(catString);
  var cats = json_cats['members'];
  for (let i = 0; i < cats.length;i++){
    if (i!==cats.length) motherinfo += cats[i].name + ', ';
    else motherinfo += 'and' += cats[i].name;
    for (let j = 0; j < cats[i].kittens.length; j++){
      total++;
      if (cats[i].kittens[j] === 'f') male++;
    }
  kittenInfo = 'The number of total kittens is '+total+'\n The number of male kittens is ' + male + 'The number of female kittens is ' + (total-male);
  }
// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);