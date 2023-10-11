    const taskText = document.getElementById("userInput");
    const buttonAdd = document.getElementById("buttonSend");
    const form = document.getElementById("taskForm")

    buttonAdd.addEventListener("click", function(e) {
        e.preventDefault();

        const ol = document.getElementById("taskList")
        const li = document.createElement("li");
        if(taskText.value !== '') {
            li.innerText = taskText.value;
            ol.append(li);
            taskText.value = '';
        }
    })

    