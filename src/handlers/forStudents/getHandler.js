const getStudents  = require("../../controllers/forStudents/getController");

const getHandler = async (req, res) => {
  const { name } = req.query;
  const found = await getStudents();
  try {
    if (!name) {
      found.length
        ? res.status(200).json(found)
        : res.status(404).json("users not found");
    } else {
      const filtered = found.filter((e) =>{
        return e.firstName.toLowerCase().includes(name.toLowerCase())}
      );
      res.status(200).json(filtered)
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getHandler;
