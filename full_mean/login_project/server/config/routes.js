const path = require("path")

const users = require("./../controllers/users")

module.exports = app => {

	app.post("/user_login", users.login)
	app.get("/get_all_users", users.get_all_users)
	app.get("/get_logged_in_user", users.get_logged_in_user)
	app.get("/logout", users.logout)

	app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}