const router = require('express').Router();
const { Donomon, DonomonType } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    res.render('homepage');
});

const retrieveDonomons = async (userId, retrieveDonomons, retrieveTypes) => {
    const returnObj = {};

    if (retrieveDonomons) {
        const donomonData = await Donomon.findAll({
            include: {
                model: DonomonType,
            },
            where: {
                userId,
            },
        });
        returnObj.donomons = donomonData.map((donomon) =>
            donomon.get({ plain: true }),
        );
    }
    if (retrieveTypes) {
        const donomonTypeData = await DonomonType.findAll({
            where: {
                evolution: 1,
            },
        });
        returnObj.types = donomonTypeData.map((donomon) =>
            donomon.get({ plain: true }),
        );
    }
    return returnObj;
};

router.get('/characters', withAuth, async (req, res) => {
    const { donomons, types } = await retrieveDonomons(
        req.session.userId,
        true,
        true,
    );
    res.render('characters', {
        donomons,
        types,
    });
});

router.get('/adventure', withAuth, async (req, res) => {
    const { donomons } = await retrieveDonomons(req.session.userId, true);
    // eslint-disable-next-line eqeqeq
    const activeDonomon = donomons.find(
        (donomon) => donomon.id == req.session.activeDonomonId,
    );
    res.render('adventure', {
        username: req.session.username,
        donomons,
        activeDonomon,
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/characters');
    } else {
        res.render('login');
    }
});

module.exports = router;
