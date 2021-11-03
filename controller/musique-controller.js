
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.urlencoded({ extended: false }));
const Musique = require("./models/musique")


let MUSIQUES = [
    {
      id: "abc",
      auteur: "Daft Punk",
      annee: 2013,
      titre: "Get lucky",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg",
    },
    {
      id: "2",
      auteur: "David Guetta ft Sia",
      annee: 2011,
      titre: "Titanium",
      imageUrl:
        "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg",
    },
    {
      id: "3",
      auteur: "Shaka Ponk",
      annee: 2019,
      titre: "Smells like teen spirits",
      imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg",
    },
    {
      id: "4",
      auteur: "Imagine Dragon",
      annee: 2018,
      titre: "Natural",
      imageUrl:
        "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg",
    },
  
    {
      id: "5",
      auteur: "Chloe x Halle",
      annee: 2020,
      titre: "forgive me",
      album: "Ungodly Hour",
      imageUrl:
        "https://talkglitz.media/wp-content/uploads/2020/06/Screenshotter-ChloexHalleForgiveMeOfficialVideo-0%E2%80%9944%E2%80%9D-1.jpg",
    },
  
    {
      id: "6",
      auteur: "Mitski",
      annee: 2021,
      titre: "Working For The Knife",
      imageUrl: "https://www.punktum.fr/wp-content/uploads/2021/10/image.png",
      album: "je ne sais pas.",
    },
  
    {
      id: "7",
      auteur: "serpentwithfeets",
      annee: 2018,
      titre: "Cherubim",
      imageUrl:
        "https://highclouds.org/wp-content/uploads/2018/05/serpentwithfeet-cherubim-1200x900.jpg",
    },
  ];

  const getMusique = (req, res, next) => { // afficher musique
      res.json({Musique})
  }

  const getMusiqueById = (req, res, next) => { // afficher musique par id

        const mId = req.params.musiqueId;
        const musique = MUSIQUES.find((m) => {
          return m.id === mId;
        });
        if (!musique) {
          return res
            .status(404)
            .json({ message: " non trouvée pour cette piste" });
        }
      
        res.json({ musique });
  }


const nouvelleMusique = (req, res, next) => { // ajouter une nouvelle musique

        const {auteur, annee, titre, album, imageUrl} = req.body;
        console.log(req.body);
        const createdMusique = {
          id: uuidv4(),
          auteur,
          annee, 
          titre,
          album,
          imageUrl
        };
      
        MUSIQUES.push(createdMusique);
        res.status(201).json({musique: createdMusique});
      
      };

const updateMusique =  (req, res, next) => { // patch égale mise à jour. contre get ou post. (patch plus propre car indique que nous ne somes pas sur de la création)
        const { auteur, annee, titre, imageUrl} = req.body; 
        const musiqueId = req.params.musiqueId;
      
        const updatedMusique = {...MUSIQUES.find((m) => {
          return m.id === musiqueId;
        })};
      
        const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId);
        updatedMusique.auteur = auteur;
        updatedMusique.annee = annee;
        updatedMusique.titre = titre;
        updatedMusique.imageUrl = imageUrl;
      
        MUSIQUES[musiqueIndex] = updatedMusique;
        res.status(200).json({ Musique: updatedMusique})}


const deleteMusique = (req, res, next) => { // suprr une musique
            const musiqueId = req.params.musiqueId;
            Musique = MUSIQUES.filter(m => m.id !== musiqueId);
            res.status(200).json({message: "Musique supprimé"})}


  exports.getMusique = getMusique;
  exports.getMusiqueById = getMusiqueById;
  exports.nouvelleMusique = nouvelleMusique;
  exports.updateMusique = updateMusique;
  exports.deleteMusique = deleteMusique;