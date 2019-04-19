document.body.innerHTML = '';
var player_el = document.createElement('div');
player_el.style.backgroundColor = 'green';
player_el.style.height = '100px';
player_el.style.width = '100px';
player_el.style.position = 'absolute';
player_el.style.top = '0px';
player_el.style.left = '0px';
document.body.appendChild(player_el);
player_el.classList.add('player');
player_el.classList.toggle('qwery');


var left = 0;
var bottom = 0;
document.addEventListener('keydown',function(event) {
    if (event.code === 'ArrowRight') 
    {
        left++;
        player_el.style.left = left + 'px';    
    }

    if (event.code === 'ArrowLeft') 
    {
        left--;
        player_el.style.left = left +'px';    
    }

    if (event.code === 'ArrowUp') 
    {
        bottom++;
        player_el.style.top = bottom - 'px';    
    }

     if (event.code === 'ArrowDown') 
    {
        bottom++;
        player_el.style.top = bottom + 'px';    
    }

    
})