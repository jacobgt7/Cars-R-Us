import { listPaintColors } from "./paintColors.js";
import { listInteriors } from "./interiors.js";
import { listTechPackages } from "./techPackages.js";
import { listWheels } from "./wheels.js";
import { listOrders } from "./orders.js";
import { submitOrder } from "./database.js"

//Event listener for button click that adds current state of order to permanent state.
document.addEventListener(
    "click",
    e => {
        if (e.target.id === "orderButton") {
            submitOrder()
        }
    }
)

//export a function that generates html for the .container element.
//Use callback functions for dropdown lists.
export const mainHTML = () => `
<h1>Cars 'R Us: Personal Car Builder</h1>
<section class="car_builder" id="carBuilder">
    <div>
        <h2>Paints</h2>
        ${listPaintColors()}
    </div>
    <div>
        <h2>Interior</h2>
        ${listInteriors()}
    </div>
    <div>
        <h2>Wheels</h2>
        ${listWheels()}
    </div>
    <div>
        <h2>Technologies</h2>
        ${listTechPackages()}
    </div>
</section>
<button id="orderButton">Place Car Order</button>
<section id="car_orders">
    ${listOrders()}
</section>`