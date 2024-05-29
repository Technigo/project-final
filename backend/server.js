import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from "./models/User"

dotenv.config()

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/project-final'
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

// Start defining your routes here
app.get('/', (req, res) => {
	res.send('Hello Technigo!')
})

//route for signing up user
app.post('/users/signup', async (req, res) => {

})

//route for login user
app.post('/users/login', async (req, res) => {
	
})

// Start the server
app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
