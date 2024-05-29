import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema({
	username: { type: String, unique: true, required: true },
	email: {
		type: String,
		unique: true,
		required: true,
		match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	},
	password: { type: String, required: true },
	accessToken: { type: String, default: () => bcrypt.genSaltSync() },
})

const User = model('Thought', userSchema)

export default User
