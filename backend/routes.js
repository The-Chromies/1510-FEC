var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/overview', controller.overview.get);
// router.post('/overview', controller.overview.post);
// router.put('/overview', controller.overview.put);
// router.delete('/overview', controller.overview.delete);


router.get('/questions', controller.questions.get);
// router.post('/questions', controller.questions.post);
// router.put('/questions', controller.questions.put);
// router.delete('/questions', controller.questions.delete);


router.get('/ratings', controller.ratings.get);
// router.post('/ratings', controller.ratings.post);
// router.put('/ratings', controller.ratings.put);
// router.delete('/ratings', controller.ratings.delete);


router.get('/related', controller.related.get);
// router.post('/related', controller.related.post);
// router.put('/related', controller.related.put);
// router.delete('/related', controller.related.delete);

router.post('/interactions', controller.interactions.post);

module.exports = router;
