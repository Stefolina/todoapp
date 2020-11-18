let ToDos = [];

function init() {
    let todo = document.getElementById('todo');
    todo.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {  //checks whether the pressed key is "Enter"
            addCurrentToDo();
        }
    });
}

function addToDo() {
    let list = document.getElementById('list');
    list.innerHTML = '';
    for (let i = 0; i < ToDos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = ToDos[i] + ' <a href="#" onclick="deleteItem(' + i + ')"><img style="width:30px; height:30px;" src="img/check.png"></a>';
        list.appendChild(li);
    }

}

function deleteItem(i) {
    ToDos.splice(i, 1);
    addToDo();
}

function addCurrentToDo() {
    let currentToDo = document.getElementById('todo').value;
    if (currentToDo.length > 0) { // Nur wenn die Textlänge größer als 0 ist
        ToDos.push(currentToDo);
    }

    addToDo();

    document.getElementById('todo').value = '';
}