const { Country,Activity } = require("../db.js");
const { Op } = require('sequelize');

const getCountries = async (req, res) => {
  try {
    const { name } = req.query;

    if (name) {    
      const found = await Country.findAll({
        where: { name: {
          [Op.iLike]: `%${name}%` //Sirve para buscar una sub cadena dentro de name, sin distinnguir entre mayus y minus.
        } },
        include:[{
                model: Activity,
                attributes:['name'],
                through: { attributes: [] }
            }]
      });

      if (found.length < 1) throw Error("No se encontro el pais indicado.");

      return res.status(200).json(found);
    } else {

      const allCountris = await Country.findAll({include:[{  //Inclui el modelo para poder hacer correctamente el filtro.
        model: Activity,
        attributes:['name'],
        through: { attributes: [] }
      }]});
      
      return res.status(200).json(allCountris);
    }
  } catch ({ message }) {
    message.includes("indicado")
      ? res.status(400).json({ error: message })
      : res.status(500).json({ error: message });
  }
};

module.exports = getCountries;
