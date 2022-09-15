import { getWheels, setWheels } from "./database.js";

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "wheels") {
            setWheels(parseInt(e.target.value))
        }
    }
)

const wheels = getWheels()

//Export a function to generate wheels as a drop down list in html.
export const listWheels = () => {
    //Declare a variable with opening html.
    let html = `<select id="wheels"> <option value="0">Please select some wheels</option>`
    //Use for each to append html string with an option for each object.
    wheels.forEach(wheel => {
        html += `<option value="${wheel.id}">${wheel.name}</option>`
    })
    //append string wtih closing html
    html += `</select>`
    //return string
    return html
}