const express = require("express");
const musiquesRoutes = require("./routes/musiques-routes");
const filmsRoutes = require("./routes/films-routes");
const gamesRoutes = require("./routes/games-routes");
const mongoose = require('mongoose');
const app = express();
app.use(express.json());


app.use("/api/musiques", musiquesRoutes);
app.use("/api/films", filmsRoutes);
app.use("/api/games", gamesRoutes);

app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || "une erreur non gérée est survenue" });
});

const uri = "mongodb+srv://kweenGreta:jlmh8khIICIj8ksw@cluster0.riy1n.mongodb.net/GretaBiblio?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true,};

mongoose.connect(uri, options)
.then(() => {
  app.listen(5000, console.log("server running"));
})
.catch (err => {
  console.log(err);
})


