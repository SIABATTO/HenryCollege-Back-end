const getController = require("../../controllers/forTeachers/getController");
const getHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const all = await getController();
    if (!name) {
      res.status(200).json(all);
    } else {
      const filtered = all.filter(e =>
        e.firstName.toLowerCase().includes(name.toLowerCase())
      );
      filtered.length
        ? res.status(200).json(filtered)
        : res.status(404).send("not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = getHandler;
