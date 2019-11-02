document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskForm = document.getElementById("create-task-form")
  let newTaskDescription = document.getElementById('new-task-description')
  let newTaskUl = document.getElementById("tasks")
  
  newTaskForm.addEventListener("submit", (e) => {
   e.preventDefault()
    console.log(e)
    let newTask = document.createElement("li")
    newTask.innerText = newTaskDescription.value
    // debugger
  
     newTaskUl.append(newTask)
  
  
  })

})

