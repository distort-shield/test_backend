const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// collection et document // collection 

const musiqueShema = new Schema({ // définition de ma classe pour la base de donnée et ses champs. 
    auteur: {type: String,required: true,}, 
    annee:{ type: String, required: true,}, 
    imageurl:{ type: String, required: true,},
    album:{ type: String, default: "inconnue",}
}); 


module.exports = mongoose.model('Musique', musiqueShema);