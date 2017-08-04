const express = require("express")
const path = require("path")

const app = express()

const PORT = 8000

app.use(express.static(path.join(__dirname, "./client")))
app.use(express.static(path.join(__dirname, "./node_modules")))

const server = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

const io = require("socket.io").listen(server)
let count = 0

io.on("connection", (socket) => {
	console.log("New connection", socket.id)
	socket.emit("update_count", count)

	socket.on("click", () => {
		count++

		io.emit("update_count", count)
	})

	socket.on("disconnect", () => {
		console.log("Someone left!", socket.id)
	})
})