let output = document.querySelector(".output");
output.innerHTML = '';

for (let i = 10; i >= 0; i--){
    let para = document.createElement('p');
    if (i === 10){
        para.textContent = 'Count Down ' + i;
    }
    else if(i === 0){
        para.textContent = 'Blast off!';
    }
    else{
        para.textContent = i;
    }
    output.appendChild(para);
}

