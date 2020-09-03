const section1 = document.querySelector('section');

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
  var cats = JSON.parse(catString);
  for (let i = 0; i < cats.length; i++){
    if (i !== cats.length - 1) {motherInfo += cats[i].name + ', ';}
    else {motherInfo += ' and ' + cats[i].name + '.';}
    for (let j = 0; j < cats[i].kittens.length; j++){
      total+=1;
      if (cats[i].kittens[j].gender === 'f') {male+=1};
    }
  kittenInfo = 'The number of total kittens is '+total+'. The number of male kittens is ' + male + '. The number of female kittens is ' + (total-male) +'.';
  }
// Don't edit the code below here!
