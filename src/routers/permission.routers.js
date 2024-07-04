const router = require('express-promise-router')()
const permissionController = require('../controllers/permission.controller')

router.get('/', permissionController.getAllPermissions)
router.get('/:id', permissionController.getPermissionById)
router.post('/', permissionController.createPermission)
router.put('/:id', permissionController.updatePermission)
router.delete('/:id', permissionController.deletePermission)
router.get('/:userId', permissionController.getPermissionsByUserId)

module.exports = router