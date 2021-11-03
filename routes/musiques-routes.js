const { request } = require("express");
const express = require("express");
const router = express.Router();
const musicController = require("../controller/musique-controller");


//chemin racine : /api/musiques

router.get("/", musicController.getMusique); // afficher musique
router.get("/:musiqueId", musicController.getMusiqueById); // musique par id
router.post("/", musicController.nouvelleMusique); // ajouter une musique
router.patch("/:musiqueId", musicController.updateMusique); // mise à jour musique
router.delete("/:musiqueId", musicController.deleteMusique); // supprimer une musique

module.exports = router;
