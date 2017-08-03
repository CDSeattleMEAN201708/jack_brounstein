const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))

app.set("views", path.join(__dirname, "./client/views"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
	console.log("GET request at '/'")
	let my_numbers = [98, 113, 49, 512, 2, 0]
	res.render("index", {name: "Jack", numbers: my_numbers})
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})