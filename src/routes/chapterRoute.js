const express = require('express');
const router = express.Router();
const { 
  createChapterController, 
  getChapterByIdController, 
  getAllChaptersController, 
  updateChapterController, 
  deleteChapterController,
  getChaptersByStoryIdController
} = require('../controllers/chapterController');

router.post('/stories/:storyId/chapters', createChapterController);
router.get('/stories/:storyId/chapters', getAllChaptersController);
router.get('/chapters/:id', getChapterByIdController);
router.put('/chapters/:id', updateChapterController);
router.delete('/chapters/:id', deleteChapterController);
router.get('/stories/:storyId/chapters', getChaptersByStoryIdController); // Tambahkan route baru

module.exports = router;