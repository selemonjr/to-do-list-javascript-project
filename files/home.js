let mode = document.querySelector("#mode");
let textEl = document.querySelector("#text-el");
let saveEl = document.querySelector("#submit-el");
let text = document.querySelector("#text");
let countEl = document.querySelector("#count");
let deleteEl = document.querySelector("#delete-el");
let inputs = [];
const storage = JSON.parse(localStorage.getItem("inputs"));
if(storage) {
    inputs = storage;
    render(inputs)
}
function render() {
    let list = "";
    for(i = 0; i < inputs.length; i++) {
        list += `<li>${inputs[i]}</li>`;
    }
    text.innerHTML = list
}
mode.addEventListener("click",() => {
    let dark = document.body; {
        dark.classList.toggle("dark-theme")
    };
    if(mode.textContent === "Dark mode") {
        mode.textContent = "Light mode";
    } else {
        mode.textContent = "Dark mode"
    }
});

saveEl.addEventListener("click",() => {
    inputs.push(textEl.value);
    textEl.value = "";
    localStorage.setItem("inputs",JSON.stringify(inputs));
    render(inputs)
});
deleteEl.addEventListener("click",() => {
    localStorage.clear;
    inputs = [];
    render(inputs)
})
