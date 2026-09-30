const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
const router = express.Router();


app.get("/hello", function(req, res) {
    res.send("Hello World");
});

app.get("/goodbye", function(req, res) {
    res.send("Goodbye World");
});

router.get("/songs", function(req, res) {
    const songs = [
        {
            title: "Song 1",
            artist: "Artist 1",
            popularity: 80,
            releaseDate: new Date("2022-01-01"),
            genre: ["Pop"],
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            popularity: 90,
            releaseDate: new Date("2021-01-01"),
            genre: ["rock", "pop"],
        }
    ]
    res.json(songs);
        
});

app.use("/api", router);
app.listen(3000)
