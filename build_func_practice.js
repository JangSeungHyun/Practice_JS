function displayMessage(msgText, msgType) {
    const html = document.querySelector('html');

    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
    closeBtn.textContent='x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function(){
        panel.parentNode.removeChild(panel);
    }
    if (msgType === 'warning'){
        panel.style.backgroundColor = 'red';
    } else if (msgType === 'chat'){
        panel.style.backgroundColor = 'aqua';
    } else {
        msg.style.paddingLeft = '20px;'
    }
}


const message_button = document.querySelector('.btn');
// 함수명 뒤에 괄호 들어갈 경우 함수가 바로 호출됨에 주의하자
//message_button.onclick = displayMessage;
message_button.onclick = function(){
    // displayMessage('Woo, this is a different message!');
    displayMessage('Brian: Hi ther, how are you today?','chat');
    displayMessage('Your inbox is almost full - delete some mails', 'warning');
}
