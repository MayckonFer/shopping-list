import ButtonConcludesTask from "./components/concludes.js"
import ButtonDelete from "./components/deleteTask.js"

const createTask = (event) => {
    event.preventDefault()
    
    // Criando uma task
    const list = document.querySelector("[data-list]")
    const input = document.querySelector("[data-form-input]")
    const valor = input.value
    const task = document.createElement("li")
    
    task.classList.add("task")
    
    const content = `<div><p class="content">${valor}</p></div>`
    
    task.innerHTML = content

    task.appendChild(ButtonConcludesTask())
    task.appendChild(ButtonDelete())
    list.appendChild(task)
    
    input.value = ""

    buttonTask.disabled = true
}

const buttonTask = document.querySelector("[data-form-button]");
const input = document.querySelector("[data-form-input]")

buttonTask.addEventListener('click', createTask)

input.addEventListener("input", () => {
    const content = document.querySelector("[data-form-input]").value

    if (content !== null && content !== '') {
        buttonTask.disabled = false
    }
})

// TEMA DARK

const buttonThemer = document.querySelector("[data-themer]")
const backgroundThemer = document.querySelector("#themer")
const bodyBackgrond = document.querySelector("body")
const title = document.querySelector("[data-title]")

buttonThemer.addEventListener("click", () => {
    backgroundThemer.classList.toggle("themer-list")
    bodyBackgrond.classList.toggle("background-body")
    title.classList.toggle("title-themer")
})