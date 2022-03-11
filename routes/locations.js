const router = require('express').Router({mergeParams:true});

const {getLocation, getLocations, postLocation} = require('../controllers/locationControllers.js');

router.get('/', getLocations);
router.get('/:id', getLocation);
router.post('/', postLocation);

module.exports = router;