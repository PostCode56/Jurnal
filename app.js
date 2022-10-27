const inputVal = document.querySelector('.inputVal'),
    addTaskBtn = document.querySelector('.btn');
addTaskBtn.addEventListener('click', () => {
    if (inputVal.value.length < 37) { /*Проверка на длину если меньше, то продолжаю*/
        if (inputVal.value != 0) { /*Проверка на пустоту*/
            let localItems = JSON.parse(localStorage.getItem('localItem'))
            if (localItems === null) {
                taskList = []
            } else {
                taskList = localItems;
            }
            taskList.push(inputVal.value)
            localStorage.setItem('localItem', JSON.stringify(taskList))
        }
    } else {
        let str = String(inputVal.value);
        taskList.push(str.slice(0, 32))
        localStorage.setItem('localItem', JSON.stringify(taskList))
    }
    showlist();
    inputVal.value = ""; /*Очищаю input*/
})
function showlist() {
    let outPut = '';
    let taskListShow = document.querySelector('.todoListItem')
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []
    } else {
        taskList = localItems;
    }
    taskList.forEach((data, index) => {
        outPut += `
        <div class="todolist">
            <p class ="pText">${data}</p>
            <button class = "deleteTask" onclick="deleteItem(${index})">x</button>
        </div>`
    });
    taskListShow.innerHTML = outPut;
}
showlist()
function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showlist()
}
function ClearTask() {
    localStorage.clear()
    showlist()
}


