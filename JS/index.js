let a = [];

const addTodo = () => {
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener('click', (e)=>{
        let str = "";
        let todoArea = document.querySelector(".todos");
        let countArea = document.querySelector(".count-area");
        let countTodo = document.getElementById("countTodo");
        let warn = document.getElementById("warn");
        let x = document.forms["myForm"]["ftodo"].value;
        if(x == "") {
            warn.style.display = "block";
        }

        else {
            warn.style.display = "none";
            a.push(x);
            a.forEach((items, index)=>{
                str += `
                <div class="todo-area my-3">
                <p class="box">${items}</p>
                <button type="button" class="btn btn-danger del"><i class="fa-solid fa-trash animate"></i></button>
                </div>
                `
            });
            todoArea.innerHTML = str;
            countArea.style.display = "flex";
            document.forms["myForm"].reset();
            var deleteTask = document.querySelectorAll(".del");
            deleteTodo(deleteTask);
            countTodo.innerHTML = `You have <strong>${a.length}</strong> pending tasks.`
            e.preventDefault();
        }
    })
}

const deleteTodo = (deleteTask) => {
    let countArea = document.querySelector(".count-area");
    let countTodo = document.getElementById("countTodo");
    for(let i = 0; i<deleteTask.length; i++) {
        deleteTask[i].onclick = function() {
            this.parentNode.remove();
            a.splice(i,1);
            if(a.length == 0) {
                countArea.style.display = "none"; 
            }
            else {
                countTodo.innerHTML = `You have <strong>${a.length}</strong> pending tasks.`
            }
        }
    }
}

const clearAll = () => {
    let clear = document.getElementById("clearAll");
    clear.addEventListener("click", (e)=> {
        let todos = document.querySelector(".todos");
        let countArea = document.querySelector(".count-area");
        a.splice(0, a.length);
        todos.innerHTML = a;
        countArea.style.display = "none";
    })
}

addTodo();

clearAll();