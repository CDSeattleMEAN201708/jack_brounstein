const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
	name: {type: String, minlength: 2},
}, {timestamps: true})

mongoose.model("User", UserSchema)