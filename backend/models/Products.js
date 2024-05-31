import mongoose from 'mongoose'

const { Schema, model } = mongoose

const productSchema = new Schema({
	templateName: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
  category: { type: String },
  likes: { type: Number },
  image: { },
	accessToken: { type: String, default: () => bcrypt.genSaltSync() }, //Blocker: is this needed?
})

export const Product = model('Product', productSchema)
