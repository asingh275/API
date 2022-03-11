const Location = require('../models/Location.js');

const getLocation = (req, res)=>{
    Location.findOne({"_id":req.params.id}).exec()
    .then(results=>{res.json(results)})
    .catch(error=>{res.status(500).json(error)});
}

const getLocations = (req, res) =>{
    Location.find({}).exec()
    .then(results=>{res.send(results)})
    .catch(error=>{res.status(500).json(error)});
}

const postLocation = (req, res)=>{
    console.log(req.body);
    let location = new Location({
        name: req.body.name,
        description: req.body.description
    });
    
    location.save()
    .then(result=>{
        let obj = {
            url: `/api/v1/locations/${location._id}`,
            data: location
        }
        res.set('content-location', `/api/v1/locations/${location._id}`);
        res.status(201).json(obj);
    })
    .catch(error=>{res.status(500).json(error)});
};

module.exports = {
    getLocations,
    getLocation,
    postLocation
}