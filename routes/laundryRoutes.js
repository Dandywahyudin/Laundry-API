const express = require('express');
const laundryController = require('../controllers/laundryController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware.verifyToken, laundryController.getLaundries);
router.post('/', authMiddleware.verifyToken, laundryController.createLaundry);
router.put('/:id', authMiddleware.verifyToken, laundryController.updateLaundry);
router.delete('/:id', authMiddleware.verifyToken, laundryController.deleteLaundry);

module.exports = router;
