const { Favorite } = require("../DB_connection");

exports.deleteFav = async (req, res) => {
  const { id } = req.params();

  try {
    if (!id) return res.status(400).json({ error: "falta el ID" });

    await Favorite.destroy({
      where: { id },
    });

    const allFavs = await Favorite.findAll();

    return res.status(200).json(allFavs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
