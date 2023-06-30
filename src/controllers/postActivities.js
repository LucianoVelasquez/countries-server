const { Activity, Country } = require("../db");

const postActivities = async (req, res) => {
  try {
    let { name, dificultad, duracion, temporada, countri } = req.body;
    console.log(req.body);

    if (!name || !dificultad || !countri || !temporada) {
      return res.status(400).json("Faltan datos");
    }
    
    if(duracion == ""){
      duracion = 0;
    }
    
    const validar = await Activity.findOne({
      where: {
        name: name,
        dificultad: dificultad,
        duracion: duracion,
        temporada: temporada,
      },
    });
    
    if (!validar ) {
      const found = await Country.findAll({ where: { id: countri } });

      const newActivity = await Activity.create({
        name,
        dificultad,
        duracion,
        temporada,
      });

      await newActivity.addCountry(found);

      return res.json({ message: "Access" }).status(200);
    }

    return res.status(400).json("La actividad ya existe");

  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = postActivities;
