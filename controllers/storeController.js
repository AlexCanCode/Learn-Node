const mongoose = require('mongoose');
const Store = mongoose.model('Store');//Because Mongoose uses a singelton concept, we only have timport them once (in this case in the start file) and then we can reference them anywhere off of the mongoose object 

exports.homePage = (req, res) => {
	console.log(req.name);
	res.render('index');
}

exports.addStore = (req, res) => {
	res.render('editStore', {
		title: 'add Store'
	})
};

//Wrap this function with async/await in a function (via middleware) that will catch any errors
exports.createStore = async (req, res) => {
	const store = new Store(req.body);
	await store.save();
	console.log("it worked");
	res.redirect('/')
}