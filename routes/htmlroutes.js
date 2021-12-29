const express = require("express");
const path = require("path");
const router = require("express").Router();

//homepage
router.get("/", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/index.html"));
});
//exercises
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
});
//stats
router.get("/stats", (req,res) => {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
});

module.exports = router