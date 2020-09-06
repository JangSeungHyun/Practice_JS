const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;
let body = document.querySelector('body');
let activate = true;

function draw(timestamp) {
    if(!startTime) {
        startTime = timestamp;
    }

    rotateCount = (timestamp - startTime) / 3;

    if (rotateCount > 359){
        rotateCount %= 360;
    }

    spinner.style.transform = 'rotate('+rotateCount+'deg)';
    raf = requestAnimationFrame(draw);
}

draw();

body.addEventListener('click', ()=>{
    if (activate){
        cancelAnimationFrame(raf);
        activate = false;
    } else if (!activate) {
        raf = requestAnimationFrame(draw);
        activate = true;
    }
})