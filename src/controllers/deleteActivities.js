const { Activity } = require("../db");

const deleteActivities = async (req, res) => {
  try {
    const { id } = req.params;
    
    const removedActivite = await Activity.destroy({ where: { id: id } });

    if(!removedActivite) throw Error('Id incorrecto');

    return res.status(200).json({ acces: removedActivite });
  } catch (error) {

    return error.message.includes('Id')?
    res.status(404).json({error: error.message})
     :
    res.status(500).json({ error: error.message });
    
  }
};

module.exports = deleteActivities;
