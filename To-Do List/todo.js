let num = 0;

function currTime() {
    let dateClass = new Date();
    let time = dateClass.toLocaleTimeString();
    let date = dateClass.toLocaleDateString();
    document.querySelector('.time').innerText = time;
    document.querySelector('.date').innerText = date;
}

setInterval(currTime, 1000);

let checkboxes = document.querySelectorAll('.checkboxes');
for (let checkbox of checkboxes) {
    toggleCheckbox(checkbox);
}

function toggleCheckbox(checkbox) {
    checkbox.addEventListener('change', () => {
        let id = checkbox.getAttribute('id');
        let label = document.querySelector(`label[for=${id}]`);
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
            label.style.textDecorationColor = "red";
        } else {
            label.style.textDecoration = "none";
        }
    });
}

let btn = document.querySelector('.Addbtn');
btn.addEventListener('click', () => {
    let text = document.querySelector('#newTask').value;
    if (text != '') {
        let lastDiv = document.querySelector('.commonActivities').lastElementChild;

        let newDiv = document.createElement('div');
        newDiv.className = "checks";

        let newCheckBox = document.createElement('input');
        newCheckBox.type = "checkbox";
        newCheckBox.className = "checkboxes";
        let checkboxId = `checkbox${num++}`;
        newCheckBox.id = checkboxId;
        toggleCheckbox(newCheckBox);

        let newLabel = document.createElement('label');
        newLabel.textContent = text;
        newLabel.htmlFor = checkboxId;

        newDiv.appendChild(newCheckBox);
        newDiv.appendChild(newLabel);

        let lastLabel = lastDiv.querySelector('label');
        lastDiv.after(newDiv);
    }
});


