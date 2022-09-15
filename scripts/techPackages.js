import { getTechPackages, setTechPackage } from "./database.js";

document.addEventListener(
    "change",
    e => {
        if (e.target.id === "techPackages") {
            setTechPackage(parseInt(e.target.value))
        }
    }
)

const techPackages = getTechPackages()

//Export a function to generate techPackages as a drop down list in html.
export const listTechPackages = () => {
    //Declare a variable with opening html.
    let html = `<select id="techPackages"> <option value="0">Please select a tech package</option>`
    //Use for each to append html string with an option for each object.
    techPackages.forEach(techPackage => {
        html += `<option value="${techPackage.id}">${techPackage.name}</option>`
    })
    //append string wtih closing html
    html += `</select>`
    //return string
    return html
}