// =======================================
//      Dom-Elements-Level-1_4
// =======================================
console.log("%c <<<<<<<<< Level-1_4 >>>>>>>>", "color: #0496ff; font-size: 12px;");

const inputField = document.body.querySelector("#userInput");
const outputWrapper = document.body.querySelector("section");
const button = document.body.querySelector("#button");

const myList = document.createElement("ul");
outputWrapper.appendChild(myList);
console.log(inputField.value)

const addElement = () => {
    button.addEventListener("click", () => {
        const input = inputField.value
        const element = document.createElement("li");
        if (inputField.value.length !== 0) {
            myList.appendChild(element);
            element.textContent = input;
            console.log(inputField.value)
        } else {
            window.alert("Eingabefeld darf nicht leer sein!" )
        }
        
    })
}
addElement()
