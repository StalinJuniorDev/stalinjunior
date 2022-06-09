const express = require("express")
const app = express()
const fetch = require("node-fetch")

app.get("/", (req, res) => {
    res.render(process.cwd() + "/public/index.ejs")
})

app.get("/team", (req, res) => {
    res.render(process.cwd() + "/public/team.ejs")
})

app.get("/projects", (req, res) => {
    res.render(process.cwd() + "/public/projects.ejs")
})

app.listen(3000, () => {
    console.log("server active")
})