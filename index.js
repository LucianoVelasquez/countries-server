const server = require("./src/server");
const { conn, Country } = require('./src/db.js');
const { getAllCountries } = require('./src/controllers/index');
const PORT = 3001;

conn.sync({ force: true }).then(() => { //Tiene que estar en false para que los cambios se guarden;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).then(async ()=>{
  await getAllCountries(Country);
}).catch(error => console.error(error))
