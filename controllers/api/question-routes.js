const router = require('express').Router();
const { Answer, Question, QuestionAnswer } = require('../../models');
const sequelize = require('../../config/connection');

//const withAuth = require('../utils/auth');

<<<<<<< HEAD
// Sign up route
=======
>>>>>>> ff922715ab6920f4d8b19d4d0956cdf0a60a4be6
router.get(
    '/random',
    /*withAuth,*/ async (req, res) => {
        const randomQuestion = (
            await Question.findAll({
                attributes: ['id', 'text'],
                include: [
                    {
                        model: Answer,
                        through: {
                            model: QuestionAnswer,
                            attributes: [],
                        },
                        as: 'answer',
                        attributes: ['id', 'text'],
                    },
                ],
                order: sequelize.literal('rand()'),
                limit: 1,
            })
        )[0];
        const randomQuestionPlain = randomQuestion.get({ plain: true });
        res.json(randomQuestionPlain);
<<<<<<< HEAD
    },
=======
    }
>>>>>>> ff922715ab6920f4d8b19d4d0956cdf0a60a4be6
);

module.exports = router;
