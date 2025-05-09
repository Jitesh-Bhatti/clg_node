const express = require("express");

const router = express.Router()

const mvi = [{ id: 101, name: "ABC" }, { id: 102, name: "DEF" }, { id: 103, name: "GHI" }, { id: 104, name: "JKL" }]

module.exports = router

router.get("/", (req, res) => {
    if (mvi) {
        res.json(mvi);
    } else {
        res.status(404).send("Item not found");
    }
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const item = mvi.find(m => m.id === id);

    if (item) {
        res.json(item);
    } else {
        res.status(404).send("Item not found");
    }
});