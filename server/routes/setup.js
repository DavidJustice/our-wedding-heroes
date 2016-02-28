const User = require('../models/user');
const co = require('co');

module.exports = (app, express) => {
    const router = new express.Router();

    router.route('/')
        .post(co.wrap(function* createUser(req, res, next) {
            try {
                const userCount = yield User.count({});

                if (userCount >= 1) {
                    return res
                        .status(400)
                        .send({ success: false, message: 'Setup has already been run' });
                }

                req.checkBody('name').notEmpty();
                req.checkBody('username').isEmail();
                req.checkBody('password').notEmpty();

                const errors = req.validationErrors();

                if (errors) {
                    return res
                        .status(400)
                        .send(errors);
                }

                const user = new User();

                user.name = req.body.name;
                user.username = req.body.username;
                user.password = req.body.password;

                try {
                    yield user.save();
                } catch (err) {
                    if (err.code === 11000) {
                        return res
                            .status(400)
                            .json({ success: false, message: 'A user with that username already exists.' });
                    }

                    return res
                        .status(400)
                        .send(err);
                }

                return res.json({ message: 'User created!' });
            } catch (error) {
                return next(error);
            }
        }));

    return router;
};
