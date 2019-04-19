function debounce(func,timeout)
{
    var timeout;
    var counter = 0;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func();
        }, timeout);
        return;
    }
}

var my_debounce = debounce(function(){console.log('Work now')}, 500);

