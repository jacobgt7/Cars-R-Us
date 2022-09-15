import { mainHTML } from "./Cars-R-Us.js";

document.addEventListener(
    "stateChanged",
    () => {
        renderHTML()
    }
)


const mainContainer = document.querySelector(".container")

const renderHTML = () => {
    mainContainer.innerHTML = mainHTML()
}

renderHTML()