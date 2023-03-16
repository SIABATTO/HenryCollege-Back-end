const {Course, Teachers} = require("../../db")

const createCourse = async (course) =>{
    const newCourse = await Course.create({
        name: course.name,
        tags: course.tags,
        level: course.level,
        duration: course.duration,
        price: course.price,
        description: course.description,
    })

    console.log('add', newCourse.addTeachers);

    let teacher = await Teachers.findAll({
        where: { id: course.teacherId },
      });

    // console.log(teacher);

    return newCourse;
}

module.exports = createCourse;
