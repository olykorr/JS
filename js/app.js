var obj1={
    name:'test'
}
var obj2=obj1;
obj2.name='new value';
console.log(obj1.name);
console.log(obj2.name);

for(var i=1; i<10;i++)
{
    obj1.id=i;
    //console.log(obj1);
}

function Multi() {
    var a=5;
    var b=100;
    var c=a*b;
    console.log (c)
  }

  Multi();