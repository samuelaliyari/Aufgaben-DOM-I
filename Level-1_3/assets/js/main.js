
// =======================================
//      Dom-Elements-Level-1_3
// =======================================
console.log("%c <<<<<<<<< Level-1_3 >>>>>>>>", "color: #0496ff; font-size: 12px;");

const myList = document.body.querySelector("#myList");
const output = document.body.querySelector("output");
const buttons = document.body.querySelectorAll("button");
console.log(myList.firstElementChild)
const showElement = () => {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            switch (button.textContent) {
                case "# firstElementChild":
                        output.textContent = myList.firstElementChild.textContent
    
                    break;
                case "# lastElementChild":
                        output.textContent = myList.lastElementChild.textContent
    
                    break;
                case "# firstElementChild nextElementSibling":
                        output.textContent = myList.firstElementChild.nextElementSibling.textContent
    
                    break;
                case "# lastElementChild previousElementSibling":
                        output.textContent = myList.lastElementChild.previousElementSibling.textContent
                    break;
            
                default:
                    break;
            }
        })
    }
}
showElement()