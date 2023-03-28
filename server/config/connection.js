const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/level-up-coding",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	}
);

module.exports = mongoose.connection;
