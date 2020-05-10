module.exports = {
	ENV: process.env.NODE_ENV || 'development',
	PORT: process.env.PORT || 3000,
	URL: process.env.BASE_URL || 'http://localhost:3000',
//	MONGODB_URI: 'mongo//:@localhost/tracktrail'
	MONGODB_URI: 'mongo://mongo:27017/tracktrail'
}
