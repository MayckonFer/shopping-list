const ButtonDelete = () => {
    const buttonDeleteTask = document.createElement("button")

    buttonDeleteTask.innerText = ""
    buttonDeleteTask.classList.add("delete-button")
    buttonDeleteTask.addEventListener("click", deletetask)

    return buttonDeleteTask
}

const deletetask = (event) => {
    const buttonDeleteTask = event.target
    const taskComplet = buttonDeleteTask.parentElement

    taskComplet.remove()

    return buttonDeleteTask
}

export default ButtonDelete