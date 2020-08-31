const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 0; i <5;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+(i+1)+'.jpg');
    newImage.addEventListener('click', function(){
        displayedImage.setAttribute('src','images/pic'+(i+1)+'.jpg');
    })

    thumbBar.appendChild(newImage);
}



/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
    //getAttripbute에 parameter 지정 필요
    if (btn.getAttribute('class') === 'dark'){
        btn.textContent = 'Lighten';
        btn.setAttribute('class','light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});