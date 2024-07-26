const express = require('express');
const router = express.Router();
const { notes } = require('../models'); 

router.post("/", async (req, res) => {
    const note = req.body;
    try {
        await notes.create(note);
        res.json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
