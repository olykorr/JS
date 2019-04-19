(function(){
    var dom = document.querySelector('#todo'), //<div></div>
        add_input = dom.querySelector('.js_add_input'),
        add_btn = dom.querySelector('.js_add_button'),
        //applay_btn = dom.querySelector('.js_applay_button'),
        list = dom.querySelector('.js_list'),// <ul>
        list_arr = JSON.parse(localStorage.getItem('todo') || '[]'),// хранилище в браузере аналогичное куки
        item_template = document.getElementById('todo_item_template').innerText; //шаблон елемента <li>

        
    function save() {
        localStorage.setItem('todo', JSON.stringify(list_arr))
    }

    function buildList() {
        list.innerHTML = '';
        list_arr.forEach(function(text, index)  {
            var item = makeItem(text);
            list.appendChild(item);
            setItemActions(item, index);
        });
    };

    function makeItem(value) {
        var li = document.createElement('li');
        li.innerHTML = item_template.replace(/{{val}}/g, value);// /{{val}}/g значит что заменяем все за один раз, если бі біло записано без регулярки меняли бі за раз одно значение.
        return li;
    }

    function setItemActions(item, index) {
        var remove_btn = item.querySelector('.js_item_remove_btn'),
            edit_btn = item.querySelector('.js_item_edit_btn'),
            applay_btn = item.querySelector('.js_item_applay_btn'),
            edit_input = item.querySelector('.js_item_input'),
            item_text = item.querySelector('.js_item_text');
        remove_btn.addEventListener('click', function() {
            list_arr.splice(index, 1);//берем индекс и пишем сколько елементов после него удалить, включая его
            changeAction();
      
           
        });

        edit_btn.addEventListener('click', function() {
            edit_input.style.display = 'inline-block';
            item_text.style.display = 'none';
            applay_btn.style.display = 'inline-block';
            edit_btn.style.display= 'none';
       
        })

        applay_btn.addEventListener('click', function() {  
          item_text.innerText=edit_input.value;
          list_arr[index]=edit_input.value;
          save();
          
          
             edit_input.style.display = 'none';
            item_text.style.display = 'inline-block';
            applay_btn.style.display = 'none';
            edit_btn.style.display = 'inline-block';
/*
            list_arr[index]=edit_input.value;
            changeAction(); */

        })

    }

    function changeAction() {
        buildList();
        save();
    }

    add_btn.addEventListener('click', function() {
        var text = add_input.value;
        list_arr.push(text);
        add_input.value = '';
        changeAction();
    });



    buildList();

}())