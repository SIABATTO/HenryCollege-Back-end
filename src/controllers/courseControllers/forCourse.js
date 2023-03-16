const {Course, Teacher} = require("../../db")
const fs = require("fs")

const getCourses = async () => {
    // const data = fs.readFileSync('src/controllers/courseControllers/hardcode.json');
    // const result = JSON.parse(data).courses;
    const result = await Course.findAll()

    const resultMap = await result?.map(e => {
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
    return resultMap;
}

const courseFilter = async ({ name = '', level = 'all', duration = 'all' }) => {
    let courses = await getCourses();

    if (name) {
        courses = courses.filter((c) => c.name.toLowerCase().includes(name.toLowerCase()));
    }

    if (level !== 'all') {
        courses = courses.filter((c) => c.level === level)
    }

    if (duration !== 'all') {
        courses = courses.filter((c) => c.duration == duration)
    }

    return courses;
}


module.exports = {
    getCourses,
    courseFilter
}