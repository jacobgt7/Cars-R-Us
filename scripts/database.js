const database = {
    buildAnOrder: {},
    paintColors: [
        {
            id: 1,
            name: "Silver",
            price: 1100.49
        },
        {
            id: 2,
            name: "Midnight Blue",
            price: 1240.79
        },
        {
            id: 3,
            name: "Firebrick Red",
            price: 920.00
        },
        {
            id: 4,
            name: "Spring Green",
            price: 980.79
        }
    ],
    interiors: [
        {
            id: 1,
            name: "Beige Fabric",
            price: 642.99
        },
        {
            id: 2,
            name: "Charcoal Fabric",
            price: 642.99
        },
        {
            id: 3,
            name: "White Leather",
            price: 1289.99
        },
        {
            id: 4,
            name: "Black Leather",
            price: 1260.00
        }
    ],
    techPackages: [
        {
            id: 1,
            name: "Basic Package",
            price: 800.00
        },
        {
            id: 2,
            name: "Navigation Package",
            price: 1639.99
        },
        {
            id: 3,
            name: "Visibility Package",
            price: 2100.00
        },
        {
            id: 4,
            name: "Ultra Package",
            price: 3700.00
        }
    ],
    wheels: [
        {
            id: 1,
            name: "17-inch Pair Radial",
            price: 980.49
        },
        {
            id: 2,
            name: "17-inch Pair Radial Black",
            price: 980.49
        },
        {
            id: 3,
            name: "18-inch Pair Spoke Silver",
            price: 1389.99
        },
        {
            id: 4,
            name: "18-inch Pair Spoke Black",
            price: 1299.99
        }
    ],
    customOrders: []
}

export const getPaintColors = () => database.paintColors.map(paintColor => ({ ...paintColor }))
export const getInteriors = () => database.interiors.map(interior => ({ ...interior }))
export const getTechPackages = () => database.techPackages.map(techPackage => ({ ...techPackage }))
export const getWheels = () => database.wheels.map(wheel => ({ ...wheel }))
export const getOrders = () => database.customOrders.map(order => ({ ...order }))

export const setPaintColor = (paintId) => {
    database.buildAnOrder.paintColorId = paintId
}
export const setInterior = (id) => {
    database.buildAnOrder.interiorId = id
}
export const setTechPackage = (id) => {
    database.buildAnOrder.techPackageId = id
}
export const setWheels = (id) => {
    database.buildAnOrder.wheelId = id
}

//function contructs an object from buildAnOrder and pushes it to customOrders.
export const submitOrder = () => {
    //define a variable and store a copy of buildAnOrder in it.
    let newOrder = { ...database.buildAnOrder }
    //add a primary key to the new object based on the number of objects in customOrders.
    newOrder.id = database.customOrders.length + 1
    //add a time stamp to the new object.
    newOrder.timestamp = Date.now()
    //push the object to the customOrders array
    database.customOrders.push(newOrder)
    //reset value of buildAnOrder to empty object
    database.buildAnOrder = {}
    //trigger custom event stateChanged.
    document.dispatchEvent(new CustomEvent("stateChanged"))
}