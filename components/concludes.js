const ButtonConcludesTask = () => {
    const buttonConcludes = document.createElement("button")

    buttonConcludes.classList.add("check-button")
    buttonConcludes.innerText = ""
    buttonConcludes.addEventListener("click", concludesTask)

    return buttonConcludes
}

const concludesTask = (event) => {
    const buttonConcludes = event.target
    const taskConcludes = buttonConcludes.parentElement

    taskConcludes.classList.toggle("done")
}

export default ButtonConcludesTask