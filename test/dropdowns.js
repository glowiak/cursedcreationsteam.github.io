let dropdown = document.getElementById("dropdown")
let button = document.getElementById("button64")
button.addEventListener(execute)

function execute() {
    if (dropdown.selectedIndex.text == "Infdev")
        dropdown.innerHTML += "<option value=\"inf-20100227\"></option>"
}