require("dotenv").config()
const express = require("express")

const app = express()

const { SERVER_PORT } = process.env

const port = SERVER_PORT || 3005

app.use(express.static(`${__dirname}/../build`))
app.use(express.json())

let space = require("./spacesController")

app.get("/api/get/spaces", space.getCheckers)

app.listen(port, () => console.log(`Listening on port ${port}`))