const router = require('express-promise-router')()
const userController = require ('../controllers/user.controller')

router.get('/', userController.findAll)
router.get('/:id', userController.findById)
router.post('/', userController.create)
router.put('/:id', userController.update)
router.delete('/:id', userController.delete)

module.exports = router 