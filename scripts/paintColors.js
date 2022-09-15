import { getPaintColors, setPaintColor } from "./database.js";

//Event listener for when a paint color is selected.
document.addEventListener(
    "change",
    e => {
        //If target changed was a paint drop down...
        if (e.target.id === "paintColors") {
            setPaintColor(parseInt(e.target.value))
        }

    }
)



const paintColors = getPaintColors()

//Export a function which generates a drop down list of paint options in html.
export const listPaintColors = () => {
    //Declare a variable containing opening html.
    let html = `<select id="paintColors"> <option value="0">Please select a color</option>`
    //Use forEach to generate option for each object in the array.
    paintColors.forEach(paintColor => {
        html += `<option value="${paintColor.id}">${paintColor.name}</option>`
    })
    //Append string with closing tags.
    html += `</select>`
    //Return string.
    return html
}