const router = require('express').Router();
const { User } = require('../../models');

// Sign up route
router.post('/', async (req, res) => {
    try {
        const newUserData = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = newUserData.dataValues.id;
            req.session.username = newUserData.dataValues.name;
            res.status(200).json(newUserData);
        });
    } catch (err) {
        // error if email already exists and error if password is too short and error if name is too short
        if (err.errors[0].type === 'unique violation') {
            res.status(400).json({
                message: 'Email already exists!',
            });
        } else if (err.errors[0].type === 'Validation error') {
            res.status(400).json({
                message: 'Password must be at least 8 characters long!',
            });
        } else {
            res.status(500).json(err);
        }
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({
                message: 'Incorrect email or password. Please try again!',
            });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({
                message: 'Incorrect email or password. Please try again!',
            });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.dataValues.id;
            req.session.username = dbUserData.dataValues.name;
            req.session.activeDonomonId = dbUserData.dataValues.activeDonomonId;
            res.status(200).json({
                user: dbUserData,
                message: 'You are now logged in!',
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//___________________________________________________________Active Donomon Setup___________________________________________________________
//in user model, set activeDonomonId to the id of the donomon that was clicked
router.put('/active/:id', async (req, res) => {
    try {
        await User.update(
            {
                activeDonomonId: req.params.id,
            },
            {
                where: {
                    id: req.session.userId,
                },
            },
        );
        req.session.save(() => {
            req.session.activeDonomonId = req.params.id;
            // res.json(activeDonomon.get({ plain: true }));
            res.end();
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//get active donomon id from user table
router.get('/active', async (req, res) => {
    try {
        const activeDonomon = await User.findByPk(req.session.userId);
        res.status(200).json(activeDonomon);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Logout route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/username', (req, res) => {
    return res.session.username;
});

module.exports = router;
