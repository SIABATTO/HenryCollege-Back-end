/*const { Course, Teachers } = require("../../db");

const createCourse = async (course) => {
  const newCourse = await Course.create({
    name: course.name,
    tags: course.tags,
    level: course.level,
    duration: course.duration,
    price: course.price,
    description: course.description,
  });

  console.log("add", newCourse.addTeachers);

  let teacher = await Teachers.findAll({
    where: { id: course.teacherId },
  });

  // console.log(teacher);

  return newCourse;
};

module.exports = createCourse;*/

// const { sequelize } = require("../../db");
const {Course,Teachers} = require("../../db")


const createCourse = async (info) => {
  
  const {
    name,
    tags,
    level,
    duration,
    price,
    description,
    videoSrc,
    imageSrc,
    teacherId,
  } = info;
  console.log(teacherId)

  const newCourse = await Course.findOrCreate({
    where: { name: name },
    defaults: {
      tags: tags,
      level: level,
      duration: duration,
      price: price,
      description: description,
      videoSrc: videoSrc,
      imageSrc: imageSrc,
    },
    
  });
  console.log(newCourse)
  // let teacher = await Teachers.findAll({
  //   where: { id:teacherId }
  // });
  let teacher = await Teachers.findAll({
    where: { id: teacherId },
  });

  console.log(`bueaaanaassssss ${teacher}`)


  return newCourse;
};



module.exports = createCourse;

