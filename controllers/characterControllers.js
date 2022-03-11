const Character = require('../models/Character.js');

const getCharacter = (req, res)=>{
    let typ = "villains";
    if(req.originalUrl.includes("heroes")){
        typ = "heroes";
    }
    Character.findByType(typ).findOne({"_id":req.params.id}).exec()
    .then(result=>{res.send(
        {
            _id: result._id,
            name: result.name,
            powers: result.powers,
            type: result.type,
            hp: result.hp,
            description: result.description
        }
    )})
    .catch(error=>{res.status(500).json(error)});
};

const getCharacters = (req, res) =>{
    let typ = "villains";
    if(req.originalUrl.includes("heroes")){
        typ = "heroes";
    }
    Character.findByType(typ).select("name _id").exec()
    .then(results=>{res.json(results)})
    .catch(error=>{res.status(500).json(error)});
};

const postCharacter = (req, res)=>{
    let typ = "villain";
    if(req.originalUrl.includes("heroes")){
        typ = "hero";
    }
    let character = new Character({
        name: req.body.name,
        hp: req.body.hp,
        powers: req.body.powers,
        type: typ
    });
    
    character.save()
    .then(result=>{
        let obj = {
            url: `/api/v1/locations/${character._id}`,
            data: character
        }
        res.set('content-location', `/api/v1/locations/${character._id}`);
        res.status(201).json(obj);
    })
    .catch(error=>{res.status(500).json(error)});
};

module.exports = {
    getCharacters,
    getCharacter,
    postCharacter
};