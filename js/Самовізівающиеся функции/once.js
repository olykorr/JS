function once(func) {
    var runned=false;
    return function(){
        if (runned){
            return;
        }
        runned=true;
        func();
    }
   
}


var Myonce= once(function() {console.log('Callbsck function');});

