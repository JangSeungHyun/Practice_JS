// setup canvas

const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
} 

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 20, 20, exists);

    this.color = 'white';
    this.size = 10;
}

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width){
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++){
        if(!(this === balls[j])) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < this.size + balls[j].size){
                balls[j].color = this.color = 'rgb('+random(0, 255)+','+random(0, 255)+','+random(0, 255)+')';
            }
        }
    }
}

EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width){
        this.x -= (this.size);
    }

    if ((this.x - this.size) <= 0) {
        this.x += (this.size);
    }

    if ((this.y + this.size) >= height) {
        this.y -= (this.size);
    }

    if ((this.y - this.size) <= 0) {
        this.y += (this.size);
    }
}

EvilCircle.prototype.setControls = function() {
    let _this = this;
    window.onkeydown = function(e) {
        if(e.key === 'a') {
            _this.x -= _this.velX;
        } else if (e.key === 'd') {
            _this.x += _this.velX;
        } else if (e.key === 'w') {
            _this.y -= _this.velY;
        } else if (e.key === 's') {
            _this.y += _this.velY;
        }
    }
}

EvilCircle.prototype.collisonDetect = function() {
    for (let j = 0; j < balls.length; j++){
        if(balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < this.size + balls[j].size){
                balls[j].exists = false;
            }
        }
    }
}

let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size

    );

    balls.push(ball);
}

let evilcircle = new EvilCircle(
    random(0 + 20, width - 20),
    random(0 + 20, height - 20),
    true
);

evilcircle.setControls();
let para = document.querySelector('p');
// 충돌시 공이 사라지는 부분을 어디에 추가하여야 할까? collisionDetect? 혹은 loop에서 검사해서? --> loop에서 추가함.
// 모든 공을 모두 검사할 때에 if문으로 추가하여 선별적으로 그리면 한번에 처리할 수 있는 장점이 있지만 그만큼 딜레이가 생긴후 공이 사라지지 않을까 하는 고민이 있었음
function loop() {
    ctx.fillstyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    evilcircle.draw();
    evilcircle.checkBounds();
    evilcircle.collisonDetect();
    num_ball = 0;

    for(let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
            num_ball += 1;
        }
    }
    para.textContent = num_ball;
    requestAnimationFrame(loop);
}

loop();


