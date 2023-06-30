const { Country, Activity } = require("../db");

const getCountry = async (req, res) => {
  try {
    const { idPais } = req.params;
    const found = await Country.findAll({
      where: { id: idPais.toUpperCase() },
      include: [
        {
          model: Activity,
        },
      ],
    });

    if (found.length < 1) throw Error("Datos incorrectos");
    return res.status(200).json(found);
  } catch ({ message }) {
    message.includes("incorrectos")
      ? res.status(400).json({ error: message })
      : res.status(500).json({ error: message });
  }
};

module.exports = getCountry;
