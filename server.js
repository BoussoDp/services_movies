const express = require("express");

const mongoose = require("mongoose");
const logger = require("morgan");
const moviesRoutes = require("./routes/movies");
const app = express();


const movies = require("./movies.json");

const port = 4000;

mongoose
.connec("mongodb://localhost:27017/movies_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> console.log("MongoDb connected"))
.catch((err)=> console.error("MongoDB connection error"))
app.use(logger("short"));

app.use(express.json());

app.post("/movies", (req, res) => {
    movies.push(req.body);
    res.status(200).json(movies);
});
 app.get("/", (req, res) =>{  
    movie.push(req.body);
    res.send("Server running");
});

 app.get("/movies/:id", (req, res) =>{
    res.status(200).json(movies);
     
});

app.put("/movies/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    let movies = movies.find(m => m.id ===id);
    (movie.tittle = req.body.tittle), (movies.release = req.body.release);
    res.status(200).json(movies);
});

app.listen(port, () => 
   console.log('Express server Listening at http://localhost:${port}'));