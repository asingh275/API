const router = require('express').Router({mergeParams:true});

const {getCharacter, getCharacters, postCharacter} = require('../controllers/characterControllers.js');

router.get('/', getCharacters);
router.get('/:id', getCharacter);
router.post('/', postCharacter);

module.exports = router;