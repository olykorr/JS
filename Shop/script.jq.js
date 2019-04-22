(function($){
    document.addEventListener('DOMContentLoaded', function() { /*Методы addEventListener и removeEventListener являются современным способом 
	назначить или удалить обработчик, и при этом позволяют использовать сколько угодно любых обработчиков.*/
	//Синтаксис:
	//object.addEventListener(event, function[, phase]); object - обьект котром назначаеться событие, function-Ссылка на функцию, которую надо поставить обработчиком.,  Необязательный аргумент, «фаза», на которой обработчик должен сработать. Этот аргумент редко нужен, мы его рассмотрим позже.
    //Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером, не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов.
	})

    $(function(){

    });

    var dom = $('#cart'),
        add_btn_item1 = dom.find('.js_add_button_item1'),
        add_btn_item2 = dom.find('.js_add_button_item2'),
        add_btn_item3 = dom.find('.js_add_button_item3'),
        list = dom.find('.js_list'), 
        list_arr = $.parseJSON(localStorage.getItem('cart') || '[]'); //list_arr сюд записываем полученный елемент по ключ 'cart'
        item_template = $('#cart_item_template').text();

        
    function save() {
        localStorage.setItem('cart', JSON.stringify(list_arr))
		/*LocalStorage in JavaScript — How To
		To use LocalStorage in your web applications, there are 5 methods to choose from:
		setItem(): Add key and value to LocalStorage
		getItem(): Retrieve a value by the key from LocalStorage
		removeItem(): Remove an item by key from LocalStorage
		clear(): Clear all LocalStorage
		key(): Passed a number to retrieve nth key of a LocalStorage
		https://itchief.ru/lessons/javascript/javascript-sessionstorage-and-localstorage
		*/
    }

    function buildList() {
        list.html(''); /*Return content:
						$(selector).html(); Получает HTML-содержимое первого элемента в наборе.
						Set content:
						$(selector).html(content); content-HTML строка которую нужно вставить в элемент.
						Set content using a function:
						$(selector).html(function(index,currentcontent)); function(index, currentcontent); Тип: Функция; 
						Заменяет html-содержимое каждого выбранного элемента в наборе на возвращенное функцией function значение. 
						Функция вызывается, для каждого из выбранных элементов.
		*/

        $(list_arr).each(function(index, text){
            var item = makeItem(text);
            list.append(item);
            setItemActions(item, index);
        })


    };

    function makeItem(value) {
        var li = $('<li>');
        li.html(item_template.replace(/{{val}}/g, value));
        return li;
    }

    function setItemActions(item, index) {
        var remove_btn = item.find('.js_item_remove_btn'),
            item_text = item.find('.js_item_text');
        remove_btn.on('click', function() {
            list_arr.splice(index, 1);
            changeAction();
        });

        
    }

    function changeAction() {
        buildList();
        save();
    }

    add_btn_item1.on('click', function() {
        //var text = add_input_tom.val();
        list_arr.push("Tomato");
        changeAction();
    });
    add_btn_item2.on('click', function() {
        //var text = add_input_car.val();
        list_arr.push("Carrot");
        changeAction();
    });
    add_btn_item3.on('click', function() {
        //var text = add_input_meat.val();
        list_arr.push("Meat");
        changeAction();
    });



    buildList();

}(jQuery))