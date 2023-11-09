// =======================================
//      Dom-Elements-Level-1_2
// =======================================
console.log("%c <<<<<<<<< Level-1_2 >>>>>>>>", "color: #0496ff; font-size: 12px;");
const elements = document.getElementsByClassName("example");

const myFunction = ()=> {
    for (const element of elements) {
        element.classList.toggle("exampleChange")
    }
}

