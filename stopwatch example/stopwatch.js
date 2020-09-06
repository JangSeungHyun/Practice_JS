let start_button = document.querySelector('.start');
let stop_button = document.querySelector('.stop');
let reset_button = document.querySelector('.Reset');
let time = 0;
let start_time = 0;
stop_button.disabled = 'disabled';
let createClock = null;


start_button.addEventListener('click', () => {
    start_time = Date.now();
    start_button.disabled = 'disabled';
    stop_button.disabled = false;
    reset_button.disabled = 'disabled';
    createClock = setInterval(displayTime, 1000);
});

stop_button.addEventListener('click', () => {
    clearInterval(createClock);
    start_button.disabled = false;
    reset_button.disabled = false;
});

reset_button.addEventListener('click', () =>{
    stop_button.disabled = 'disabled';
    displayTime();
})

function displayTime() {
    if (stop_button.disabled){
        time = 0;
    } else if(start_button.disabled){
        time = Date.now() - start_time;
    }
    time_second = parseInt(time/1000);
    time = parseInt(time_second/3600)+' 시 '+parseInt((time_second%3600)/60)+' 분 '+(time_second%3600)%60+' 초 ';
    document.querySelector('.clock').textContent = time;   
}
displayTime();

//start button 이 클릭 되고 stop button의 이벤트에 대한 리스너 추가해야 하나?
//button의 활성화 여부로 분기문의 흐름을 제어했는데 다른 방식은 없을까?