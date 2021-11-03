const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const filmController = require("../controller/film-controller");


router.get("/", filmController.getFilms) ;
router.get("/:filmId", filmController.getFilmsById);
router.post("/", filmController.nouveauFilm);
router.patch("/:filmId", filmController.updateFilm);
router.delete("/:filmId", filmController.deleteFilm);


module.exports = router;
