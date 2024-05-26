const router = require('express').Router();
const { Donomon } = require('../../models');

router.post('/', async (req, res) => {
    try {
        await Donomon.create({
            userId: req.session.userId,
            donomonTypeId: req.body.donomonTypeId,
        });

        res.end();
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all donomons for the user
router.get('/', async (req, res) => {
    try {
        const donomonsList = await Donomon.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        res.json(donomonsList);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single donomon by its `id` value from session activeDonomonId and get donomon table values
router.get('/active/:id', async (req, res) => {
    try {
        const activeDonomon = await Donomon.findOne({
            where: {
                id: req.session.activeDonomonId,
            },
        });

        res.json(activeDonomon);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a donomon by its `id` value (for characters page)
router.delete('/:id', async (req, res) => {
    try {
        await Donomon.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.end();
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
