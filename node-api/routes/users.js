const express               = require("express"),
      router                = express.Router(),
      users                 = require('../controllers/usersController'),
      { validateUser }      = require('../middleware/validations'),
      Schema                = require('../apiSchema/JoiSchemas');


router.post('/signup', validateUser(Schema.signup), users.signup);

// router.get('/:id');
// router.put('/:id');

// router.get('/');

// router.delete('/:id');

module.exports = router;