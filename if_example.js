var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
    var choice = select.value;

    if (choice === 'sunny'){
        para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to beach!';
    } else if (choice === 'rainy'){
        para.textContent = 'Rain is falling outside; take a rain coat and a brolly';
    } else if (choice === 'snowing'){
        para.textContent = 'It is snowing';
    } else if (choice === 'overcast'){
        para.textContent = 'It isn\'t raining'
    } else {
        para.textContent = '';
    }
}