const {
  getCourses,
  courseFilter,
} = require("../../controllers/courseControllers/forCourse"); //lo que viene del controller

const handleCourse = async (req, res) => {
  const { name, level, duration } = req.query;
  const page = parseInt(req.query.page);
  const limit = 3;

  const start = (page - 1) * limit;
  const end = page * limit;

  const results = {};

  try {
    const result = await getCourses();

    if (name || level || duration) {
      const filteredCourses = await courseFilter({ name, level, duration });
      return filteredCourses;
    }

    if (end < result.length) {
      results.next = {
        page: page + 1,
      };
    }
    // código hecho por Andrés Casas
    if (start > 0) {
      results.previous = {
        page: page - 1,
      };
    }
    results.results = result.slice(
      start,
      end
    ); /* slice: divide el array que llega por result */
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = handleCourse;
