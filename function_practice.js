let x = 1;

function a() {
    let y = 2;
    output(y);
}

function b(){
    let z = 3;
    output(z);
}

function output(value){
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent='Value: '+value;
}