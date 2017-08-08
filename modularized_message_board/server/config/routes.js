const messages = require("./../controllers/messages.js")

module.exports = (app) => {
	app.get("/", messages.index)
	app.post("/new_message", messages.create_message)
	app.post("/new_comment", messages.create_comment)
}