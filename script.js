//linking to html
const inputTodo = document.getElementById("inputTodo")
const addBtn = document.getElementById("addBtn")
const todos = document.getElementById("todos")


function creatTodo() {
    //Create elements
   var div= document.createElement("div")
   var paragraph= document.createElement("p")
   var delBtn= document.createElement("button")
   var editBtn = document.createElement("button")

   //adding style
   editBtn.classList.add("Btn-style")
   delBtn.classList.add("Btn-style")
   paragraph.classList.add("paragraph")
  
   

   paragraph.innerText = inputTodo.value
   delBtn.innerHTML = "Delete"
   editBtn.innerHTML = "Edit"
   inputTodo.value = ""

   //appending children
    todos.appendChild(div)
    div.appendChild(paragraph)
    div.appendChild(delBtn)
    div.appendChild(editBtn)
   
    function deleteTodo() {
        div.remove()
    }

    function editTodo() {
        //creating new elements
        var inputEdit = document.createElement
        ("input")
       
        var saveBtn = document.createElement("button")
       
        inputEdit.value =  paragraph.innerText
        saveBtn.innerHTML = "Save"

        //adding styles
        inputEdit.classList.add("input-style")
        saveBtn.classList.add("Btn-style")
       
        div.appendChild(inputEdit)
        div.appendChild(saveBtn)

        editBtn.remove()
        delBtn.remove()

        function saveTodo() {
            paragraph.innerText = inputEdit.value

            saveBtn.remove()
            inputEdit.remove()
            
            div.appendChild(delBtn)
            div.appendChild(editBtn)
        }
        saveBtn.addEventListener("click", saveTodo)
    }
 editBtn.addEventListener("click", editTodo)
 delBtn.addEventListener("click",deleteTodo)
}
addBtn.addEventListener("click",creatTodo )