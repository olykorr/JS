document.body.innerHTML = '';

function makeKvadrat(player_el,k1,k2,k3,k4,color,pozx,pozy)
{
var speed = 5;
var player_el = document.createElement('div');
player_el.style.height = '100px';
player_el.style.width = '100px';
player_el.style.position = 'absolute';
player_el.style.backgroundColor = color;
player_el.style.top = pozx;
player_el.style.left = pozy;

var keyState = {
    up: false,
    down: false,
    left: false,
    right: falsefsfsaf
};

var position = {
   top: 0,
   left: 0  
};

document.body.appendChild(player_el);


document.addEventListener('keydown', function(event) {
    if (event.code === k2) {
        keyState.down = true;
    } else if (event.code === k1) {
        keyState.up = true;
    } else if (event.code === k3) {
        keyState.left = true;
    } else if (event.code === k4) {
        keyState.right = true;
    }
})

document.addEventListener('keyup', function(event) {
    if (event.code === k2) {
        keyState.down = false;
    } else if (event.code === k1) {
        keyState.up = false;
    } else if (event.code === k3) {
        keyState.left = false;
    } else if (event.code === k4) {
        keyState.right = false;
    }
})


var actionInterval = setInterval(function() { //віполняет функцию с заданым промежутком времени
    if (keyState.up) {
        position.top--;
    }

    if (keyState.down) {
        position.top++;
    }
    
    if (keyState.left) {
        position.left--;
    }

    if (keyState.right) {
        position.left++;
    }
});


var drawInterval = setInterval(function() {
    player_el.style.top = position.top + 'px';
    player_el.style.left = position.left + 'px';
}, (1000/30));   
}

makeKvadrat('player_el1','kW','kS','kA','kD','red','100px','100px');

makeKvadrat('player_el2','ArrowDown','ArrowUp','ArrowLeft','ArrowRight','green','50px','50px');
