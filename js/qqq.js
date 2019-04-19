document.body.innerHTML = '';
var speed = 5;
var player_el = document.createElement('div');
player_el.style.height = '100px';
player_el.style.width = '100px';
player_el.style.position = 'absolute';
player_el.style.backgroundColor = 'green';
player_el.style.top = '0px';
player_el.style.left = '0px';

var keyState = {
    up: false,
    down: false,
    left: false,
    right: false
};

var position = {
   top: 0,
   left: 0  
};

document.body.appendChild(player_el);


document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        keyState.down = true;
    } else if (event.code === 'ArrowUp') {
        keyState.up = true;
    } else if (event.code === 'ArrowLeft') {
        keyState.left = true;
    } else if (event.code === 'ArrowRight') {
        keyState.right = true;
    }
})

document.addEventListener('keyup', function(event) {
    if (event.code === 'ArrowDown') {
        keyState.down = false;
    } else if (event.code === 'ArrowUp') {
        keyState.up = false;
    } else if (event.code === 'ArrowLeft') {
        keyState.left = false;
    } else if (event.code === 'ArrowRight') {
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