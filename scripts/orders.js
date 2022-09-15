import { getOrders, getInteriors, getPaintColors, getTechPackages, getWheels } from "./database.js";

const interiors = getInteriors()
const paintColors = getPaintColors()
const techPackages = getTechPackages()
const wheels = getWheels()

//Function that lists orders in html.
export const listOrders = () => {
    let orders = getOrders()
    //find the total price for each order.
    orders.forEach(order => {
        let foundInterior = interiors.find(interior => interior.id === order.interiorId)
        let foundColor = paintColors.find(color => color.id === order.paintColorId)
        let foundTechPackage = techPackages.find(techPackage => techPackage.id === order.techPackageId)
        let foundWheel = wheels.find(wheel => wheel.id === order.wheelId)
        order.price = foundInterior.price + foundColor.price + foundTechPackage.price + foundWheel.price
    })
    //define a variable with opening html
    let html = "<ul>"
    //use for each to append string with html list items for each object in orders.
    orders.forEach(order => {
        html += `<li>Order #${order.id} total cost ${order.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</li>`
    })
    //append string with closing html
    html += "</ul>"
    //return html string
    return html
}