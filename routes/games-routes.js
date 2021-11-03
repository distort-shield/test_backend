const express = require("express");
const router = express.Router();


let games = [
  {
    id: "1",
    auteur: "Supergiant",
    annee: 2016,
    titre: "Hadès",
    description:
      "Défiez le dieu de la mort et frayez-vous un chemin hors du monde souterrain dans ce rogue-like en mode dungeon crawler créé par les concepteurs de Bastion et Transistor.",
    imageUrl: "https://assets.vg247.com/current/2018/12/hades_main_art_2.jpg",
  },

  {
    id: "2",
    auteur: "Eric Barone",
    annee: 2013,
    titre: "Stardew Valley",
    description:
      "Stardew Valley is an open-ended country-life RPG! You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!",
    imageUrl:
      "https://www.flstudiocrack.org/wp-content/uploads/2020/04/Stardew-Valley-Free-Download.jpg",
  },

  {
    id: "3",
    auteur: "Ubisoft",
    annee: "Inconming",
    titre: "Beyond Good And Evil",
    description:
      "Rejoignez le Système 3 pour le préquel de l’un des jeux Ubisoft les plus mythiques ! Rencontrez des personnages inoubliables dans un nouveau système planétaire époustouflant et battez-vous pour la liberté de choisir votre propre destin. Beyond Good and Evil 2 est un RPG d'action-aventure jouable en solo ou avec des amis en coopération. Affrontez vos ennemis sur des planètes ou dans l'espace, à des échelles complètement différentes : dans l'enceinte d'un temple perdu ou aux confins inexplorés du système !",
    imageUrl:
      "https://icdn2.digitaltrends.com/image/beyond-good-and-evil-2-screenshot-12-1500x844.jpg?ver=1",
  },
];


router.get("/", (req, res, next) => {
  res.json({ games });
});

router.get("/:gameId", (req, res, next) => {
  const gId = req.params.gameId;
  const game = games.find((g) => {
    return g.id === gId;
  });
  if (!game) {
    return res
      .status(404)
      .json({ message: "Jeu non trouvé pour cette piste" });
  }

  res.json({ game });
});



module.exports = router;
