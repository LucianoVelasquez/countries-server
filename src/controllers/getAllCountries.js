const axios = require("axios");
const data2 = require('../../api/db.json');

module.exports = async (Country) => {
  try {
    /* const { data } = await axios.get("http://localhost:5000/countries"); */
    let { countries } = data2; 
    
    /* console.log(data3); */ 
    
    countries.forEach(async (element) => {
      const {
        cca3,
        name,
        flags,
        continents,
        capital,
        subregion,
        area,
        population,
      } = element;

      if (cca3 && name && flags && continents && capital && subregion && area && population){
        await Country.findOrCreate({
          where: {
            id: cca3,
            name: name.official,
            flags: flags.png,
            continents: continents[0],
            capital: capital[0],
            subregion,
            area,
            population,
          }
        });
      }
    });
 
  } catch ({ message }) {
    console.log(`Error:${message}`);
    return res.status(500).json(message);
  }
};
