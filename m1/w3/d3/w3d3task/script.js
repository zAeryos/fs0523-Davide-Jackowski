    const userInput = document.getElementById("userInput");
    const buttonAdd = document.getElementById("buttonSend");
    const form = document.getElementById("taskForm")

    buttonAdd.addEventListener("click", function(e) {
        e.preventDefault();
        const ol = document.getElementById("taskList")
        
        if(!userInput.value) {
            return;
        }
        
        const li = document.createElement("li");
        li.innerText = userInput.value;
        ol.append(li);
        userInput.value = '';

        const buttonDelete = document.createElement("button");
        buttonDelete.innerText = "Delete";
        li.append(buttonDelete);

        li.addEventListener("click", function() {
            li.style.textDecoration = "line-through";
        })

        buttonDelete.addEventListener("click", function() {
            li.remove();
        })
    })

    