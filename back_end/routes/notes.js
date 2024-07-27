const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json())
const { notes } = require('../models'); 


router.get("/",async (req, res)=>{
    const listOfAllnotes = await notes.findAll();
    res.json(listOfAllnotes);
});

router.post("/", async (req, res) => {
    const note = req.body;
    await notes.create(note);
    res.json(note);
  });

module.exports = router;
