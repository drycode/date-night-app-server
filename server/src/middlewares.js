const { verify } = require('./helpers');
exports.isAuthenticated = (req, res, next) => {
	if (!req.cookies) {
		throw "The request didn't have any cookies";
	} else if (!req.cookies.activeUser || !req.cookies.accessToken) {
		throw 'Missing activeUser or accessToken in cookies';
	} else {
		try {
			verify(req.cookies.activeUser, req.cookies.accessToken, { value: null });
			next();
		} catch (e) {
			console.log(e);
			res.status(403).send({ error: e._message });
		}
	}
};
