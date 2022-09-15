import { getInteriors, setInterior } from "./database.js";

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "interiors") {
            setInterior(parseInt(e.target.value))
        }
    }
)

const interiors = getInteriors()

//Export a function to generate interiors as a drop down list in html.
export const listInteriors = () => {
    //Declare a variable with opening html.
    let html = `<select id="interiors"> <option value="0">Please select an interior</option>`
    //Use for each to append html string with an option for each interior object.
    interiors.forEach(interior => {
        html += `<option value="${interior.id}">${interior.name}</option>`
    })
    //append string wtih closing html
    html += `</select>`
    //return string
    return html
}