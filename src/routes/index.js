const { Router } = require("express");
const { getCountries,getCountry,postActivities, getActivities, deleteActivities,putActivities } = require('../controllers/index');
const router = Router();


router.get('/countries',getCountries);
router.get('/countries/:idPais',getCountry); 

router.post('/activities',postActivities);
router.get('/activities',getActivities);
router.delete('/activities/:id',deleteActivities);
router.put('/activities',putActivities);


module.exports = router;
