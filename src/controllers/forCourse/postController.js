const { sequelize } = require("../../db");

const createCourse = async (info) => {
  const {Course} = sequelize.models;
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

  const newCourse = await Course.findOrCreate({
    where: { name: name },
    defaults: {
      tags,
      level,
      duration,
      price,
      description,
      videoSrc,
      imageSrc,
      teacherId
    },
  });

  return newCourse;
};

module.exports = createCourse;
