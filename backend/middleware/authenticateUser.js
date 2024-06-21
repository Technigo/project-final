import { User } from '../models/User'

export const authenticateUser = async (req, res, next) => {
	const user = await User.findOne({
		accessToken: req.header('Authorization'),
	}).exec()
	if (user) {
		req.user = user
		next()
	} else {
		res.status(401).json({
			message: 'Unauthorised access',
			success: false,
			error: 'Please create a user to access!',
		})
	}
}
