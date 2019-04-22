(function($){
    document.addEventListener('DOMContentLoaded', function() {

    })

    $(function(){

    });

    var dom = $('#todo'),
       // add_input = dom.find('.js_add_input'),
        /*add_input_tom = dom.find('.js_add_tom'),
        add_input_car = dom.find('.js_add_car'),
        add_input_meat = dom.find('.js_add_meat'),*/
        add_btn_tom = dom.find('.js_add_button_tom'),
        add_btn_car = dom.find('.js_add_button_car'),
        add_btn_meat = dom.find('.js_add_button_meat'),
        list = dom.find('.js_list'), 
        list_arr = $.parseJSON(localStorage.getItem('todo') || '[]');
        item_template = $('#todo_item_template').text();

        
    function save() {
        localStorage.setItem('todo', JSON.stringify(list_arr))
    }

    function buildList() {
        list.html('');

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

    add_btn_tom.on('click', function() {
        //var text = add_input_tom.val();
        list_arr.push("Tomato");
        changeAction();
    });
    add_btn_car.on('click', function() {
        //var text = add_input_car.val();
        list_arr.push("Carrot");
        changeAction();
    });
    add_btn_meat.on('click', function() {
        //var text = add_input_meat.val();
        list_arr.push("Meat");
        changeAction();
    });



    buildList();

}(jQuery))