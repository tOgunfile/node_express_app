const express = require("express")
const people = require("./model/people")
const item = require("./model/items")

const app = express();
const port = process.env.PORT || 5000

// app.use(express.static('./www'))

app.get('/', (req, res) => {
    console.log(req.url);
    res.send("Home Page")
})

app.get('/people', (req, res) => {
    console.log(req.url);
    res.send(people)
})

app.get('/item', (req, res) => {
    console.log(req.url);
    res.json(item)
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}...`)
})