const express = require("express")
const app = express()
app.use(express.json())
const db = require("./models")


const noteRouter = require("./routes/notes")

const cors = require('cors')
const { json } = require("sequelize")


app.use(cors());

app.use("/notes", noteRouter);



db.sequelize.sync().then(()=>{
    app.listen(3001, ()=>{
        console.log("server online 3001")
    });
})
