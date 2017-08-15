const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = {
	login: (req, res) => {
		console.log(req.body)

		User.findOne({name: req.body.name})
			.then(user => {
				if(user){
					req.session.user_id = user._id
					res.json(true)
				} else {
					let new_user = new User(req.body) 
		
					new_user.save()
						.then(() => {
							req.session.user_id = new_user._id
							res.json(true)
						})
						.catch(err => {
							console.log("User create error", err)
							res.status(500).json(err)
						})
				}
			})
			.catch(err => {
				console.log("User Find One error", console.log(err))
				res.status(500).json(err)
			})
	},
	get_all_users: (req, res) => {
		console.log("req.session.user_id", req.session.user_id)
		User.find()
			.then(users => res.json(users))
			.catch(err => {
				console.log("user find all error", err)
				res.status(500).json(err)
			})
	},
	get_logged_in_user: (req, res) => {
		if(req.session.user_id){
			res.json(req.session.user_id)
		} else {
			res.status(500).json(false)
		}
	},
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}
}