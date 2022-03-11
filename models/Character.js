const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function stringToArray(powerString) {
    var array = powerString.split(",").map((power)=> {
        return power.trim();
    });
    return array;
}

const CharacterSchema = new Schema({
    name:{type:String, required:true, maxLength: 30},
    powers: {type:[String], default: ["Super strength"], set:stringToArray},
    type:{type:String, enum:['hero', 'villain'], default:'hero'},
    hp:{type:Number, default:1},
});

CharacterSchema.virtual('description').get(function(){
    if(this.type == "hero"){
        return this.name + "is a noble hero whose special powers are" + this.powers;
    }else{
        return `${this.name} is a nefarious villain whose special powers are ${this.powers}`;
    }
});

CharacterSchema.statics.findByType = function(type) {
    if(type == "heroes"){
        return this.find({type: "hero"});
    }else{
        return this.find({type: "villain"});
    }
 };

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;