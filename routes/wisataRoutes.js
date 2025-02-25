const express = require('express');
const router = express.Router();
const wisataController = require('../controllers/wisataController');
const authMiddleware = require('../middleware/authmiddleware');

router.get('/', authMiddleware, wisataController.getAllWisata);
router.get('/:id', authMiddleware, wisataController.getWisataById);
router.post('/', authMiddleware, wisataController.createWisata);
router.put('/:id', authMiddleware, wisataController.updateWisata);
router.delete('/:id', authMiddleware, wisataController.deleteWisata);

module.exports = router;