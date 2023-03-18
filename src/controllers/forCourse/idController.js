const {getCourses} = require("./getController")

const getId = async(id) => {
const allCourse = await getCourses()
console.log(allCourse)
const filtered = allCourse.filter(e => e.id == id)
return filtered
}

module.exports = getId;