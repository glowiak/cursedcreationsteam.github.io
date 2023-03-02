let dropdown = document.getElementById("dropdown")
let downloads = document.getElementById("dl")
let versionObject64 = {
    "Infdev": {
        "Infdev 20100227 (Maxxx)": [],
        "Infdev 20100313 (RVH)": [],
        "Infdev 20100325 (Maxxx)": [],
        "Infdev 20100330 (Zero)": [],
        "Infdev 20100414 (314rft)": [],
        "Infdev 20100420 (314rft, Zero)": [],
        "Infdev 20100624 (314rft)": [],
    },
    "Alpha": {
        "Alpha v1.0.1_01": []
    }
}
dropdown.onchange = () => {
    for (let val in versionObject64[this.value]) {
        dl.options[dl.options.length] = new Option(val, val);
    }
}
window.onload = () => {

}
let button = document.getElementById("button64")
button.addEventListener(execute)

function execute() {
    
}