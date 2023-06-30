const { Activity } = require("../db");

const putActivities = async (req,res) =>{
    try {
        const { name, dificultad, duracion, temporada, countri,id } = req.body;
        console.log(countri);
        const activity = await Activity.findByPk(id);

        if(!activity) res.status(404).json("La actividad no existe");

        const newUpdate = await activity.update({name,dificultad,duracion,temporada},{where: {id:id}})
        
        await activity.setCountries(countri);

        return res.status(200).json({message: 'acces'});

    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = putActivities;