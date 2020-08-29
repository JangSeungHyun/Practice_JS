var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather(){
    var choice = select.value;

    switch (choice){
        case 'sunny':
            para.textContent = 'It is nice and sunny'
            break;
        
        case 'rainy':
            para.textContent = 'Rain is falling outside;';
            break;
        
        case 'swnowing':
            para.textContent = 'The snow is coming down';
            break;
        
        case 'overcast':
            para.textContent = 'It isn\'t raining';
            break;
            
        default:
            para.textContent = '';
    }
}