const {Course, Teachers, Order} = require("../../db")


const getCourses = async () => { // pedir con un findAll()
    const result = await Course.findAll({
        // where: {
        //     name: name
        // },
        include: [
            {
                model: Teachers,
                attributes: [
                    "id", "firstName"
                ],
                through: {
                    attributes: []
                }
            }, 
            // {
            //     model: Order,
            //     attributes: [
            //         "id", "date", "totalPrice"
            //     ],
            //     through: {
            //         attributes: []
            //     }
            // }
        ]
    })

    const resultMap = await result ?. map(e => {
        return {
            id: e.id,
            name: e.name,
            tags: e.tags,
            level: e.level,
            duration: e.duration,
            price: e.price,
            description: e.description
        }
    })

    return resultMap
}

module.exports = {
    getCourses
}
