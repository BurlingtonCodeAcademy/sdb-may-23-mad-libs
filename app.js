const express = require("express")
const app = express()
const cors = require("cors")

let adjective, noun = ""

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/first-word", (req, res) => {
    res.send(`<form method='POST' action='/second-word'>
        <input name='adjective' placeholder='adj'>
        <button type='submit'>Go</button>
    </form>`)
})

app.post("/second-word", (req, res) => {
    adjective = req.body.adjective
    res.sendFile(`${__dirname}/public/noun.html`)
})

app.post("/third-word", (req, res) => {
    noun = req.body.noun
    res.redirect("/story")
})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

app.get("/story", (req, res) => {
    res.send(`<h1>${adjective} ${noun}</h1>`)
})

app.listen(4000, () => {
    `[server] runs on 4000`
})