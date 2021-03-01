let items = ['item1', 'item2', 'item3', 'item4', 'item5'];

let list = document.querySelector('#mylist');


items.forEach(function(item) {

    createItem(item);

});

let close = document.getElementsByClassName('close');


list.addEventListener('click', function(item) {
    if (item.target.tagName === 'LI') {

        item.target.classList.toggle('checked');

        deletebutton();
    }
});

document.querySelector('#deleteBtn').onclick = function() {

    let elements = document.querySelectorAll('.checked');

    elements.forEach(function(item) {

        item.style.display = 'none';
    })
}

function deletebutton() {

    let checkList = document.querySelectorAll('.checked');
    if (checkList.length > 0) {

        document.querySelector('deleteBtn'.classList.remove);
    }
}

document.querySelector('#createBtn').onclick = function() {
    let item = document.querySelector('#textinput').value;
    textinput.value = "";

    if (item === '') {

        alert('Lütfen boş değer girmeyiniz! ');
        return;
    }

    createItem(item);


};

function createItem(item) {

    let li = document.createElement('li');
    let t = document.createTextNode(item);

    li.className = 'list-group-item';
    li.appendChild(t);

    list.appendChild(li);

    let span = document.createElement('span');
    let text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {

        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }
}