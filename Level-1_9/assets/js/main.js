// =======================================
//      Dom-Elements-Level-1_9
// =======================================
console.log("%c <<<<<<<<< Level-1_9 >>>>>>>>", "color: #0496ff; font-size: 12px;");

const selectionField = document.getElementById("farbeAuswahlen")
console.log(selectionField)
const button = document.body.querySelector("button");
button.addEventListener("click", () => {
    event.preventDefault()
    const element = selectionField.selectedIndex
    selectionField.remove(element)

})
