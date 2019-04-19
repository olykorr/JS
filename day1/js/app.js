/* alert('app.js'); */
var test = 1,
    second = 'asdasd',
    bool = true,
    n = null,
    un = undefined;

var fff = 'sdfgsdf';
var fff2 = fff;
fff2 = 'aaaaaaaaaa';

console.log(fff);
console.log(fff2);
console.log(fff);

var obj1 = {
    id: 0,
    name: 'test',
    name2: {
        first_name: 'vasya'
    }
};

/*var obj2 = obj1; */

//Copy object

/* var obj2 = Object.assign({}, obj1);
obj2.name = 'newValue';
obj2.name2.first_name = 'Petya';
*/
// вложенные обьекты передаются по ссылке

//чтобы полностью скопипастить  обьект - JSON.parse(JSON.stringify(obj))
/* var obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name2.first_name = 'Petya';


console.log(obj1.name);
console.log(obj2.name2.first_name);
console.log(obj1.name2.first_name);
 */
// циклы
 for (var i = 0; i < 10; i++) {
    obj1.id = i;
    console.log(obj1);
    //debugger;
}

var b = 0;
while (b<10) {
    console.log(b);
    b++;    
}

for (var i in obj1) {
    console.log(i);
}

var arr1 = [1,2,3,4,5,6];

arr1.forEach(function(val, index) {
    console.log(index, val);
});

//console.log(calc(6, 3));

function calc(a, b){
    return a + b;
}

function multiFunction(a) {
    return function(b) {
        return a + b;
    }
}

var five = 6;
switch (five) {
    case 5:
        console.log('case', 5);
        break;
    default:
        console.log('default');
        break;
}

/* function testArgs(a, b, c){
    if(void 0 !== a){
        if (void 0 !== b) {
            if (void 0 !== c) {
                console.log(a, b, c);
            }
        }
    }
} */
function testArgs(){
    console.log( arguments);

}

function testClass(){
    this.run = function(){
        console.log('sdfgsdfgsdgh');   
    }
}

testClass.prototype.abc = 'abc';

testClass.prototype.run = function(){
    console.log('method run');
}

var app = new testClass;

app.run();

testClass.run;


