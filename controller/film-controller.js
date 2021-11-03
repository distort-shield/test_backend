const express = require("express");
const { deleteMusique } = require("./musique-controller");
const app = express();
  
app.use(express.urlencoded({ extended: false }));

let FILMS = [
    {
      id: "1",
      auteur: "Hayao Miyazaki",
      annee: 2001,
      titre: "Le Voyage de Chihiro",
      imageUrl:
        "https://www.gaijinjapan.org/wp-content/uploads/2016/04/Le-voyage-de-Chihiro.jpg",
    },
  
    {
      id: "2",
      auteur: "Alejandro Jodorowsky",
      annee: 2021,
      titre: "Dunes",
      imageUrl:
        "http://scriptshadow.net/wp-content/uploads/2020/10/eto_trailer_dune_090920.jpg",
    },
  
    {
      id: "3",
      auteur: "David Fincher",
      annee: 2014,
      titre: "Gone Girl",
      imageUrl:
        "https://thefilmstage.com/wp-content/uploads/2016/04/Gone-Girl.jpg",
    },
  ];
  
  
  const getFilms = (req, res, next) => {
    console.log("liste des films");
    res.json({ FILMS });
  };
  const getFilmsById = (req, res, next)  => {
    const fId = req.params.filmId;
    const film = FILMS.find((f) => {
      return f.id === fId;
    });
    console.log(fId);
    console.log(film);
    if (!film) {
      return res
        .status(404)
        .json({ message: "Film non trouvé pour cette piste" });
    }
  
    res.json({ film });
  }
  const nouveauFilm = (req, res, next) => {

    const {auteur, annee, titre, imageUrl} = req.body;
    console.log(req.body);
    const createdFilm = {
      id: uuidv4(),
      auteur,
      annee, 
      titre,
      imageUrl
    };
  
    FILMS.push(createdFilm);
    res.status(201).json({film: createdFilm});
  
  };
const updateFilm = (req, res, next) => {
    const { auteur, annee, titre, imageUrl} = req.body; 
        const filmId = req.params.filmId;
      
        const updatedFilm = {...FILMS.find((f) => {
          return f.id === filmId;
        })};
      
        const filmIndex = FILMS.findIndex(f => f.id === filmId);
        updatedFilm.auteur = auteur;
        updatedFilm.annee = annee;
        updatedFilm.titre = titre;
        updatedFilm.imageUrl = imageUrl;
      
        FILMS[filmIndex] = updatedFilm;
        res.status(200).json({ Film: updatedFilm})

}

const deleteFilm = (req, res, next) => {
        const filmId = req.params.filmId;
        FILMS = FILMS.filter(f => f.id !== filmId);
        res.status(200).json({message: "film supprimé"})
    }



  exports.getFilms = getFilms;
  exports.getFilmsById = getFilmsById;
  exports.nouveauFilm = nouveauFilm;
  exports.updateFilm = updateFilm;
  exports.deleteFilm = deleteFilm;