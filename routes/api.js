const router = require("express").Router();
const Exercise = require("../models/exercise.js");
const { route } = require("./htmlRoutes.js");

router.post("/api/workouts", (req, res) => {
    Exercise.create({})
    .then((exercise) => {
        res.json(exercise)
    })
    .catch((err) => {
        res.json(err)
    })
});

router.get("/api/workouts", (req,res) => {
    
})

module.exports = router;