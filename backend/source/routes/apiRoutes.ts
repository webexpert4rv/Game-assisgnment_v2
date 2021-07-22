/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/gameController';
const router = express.Router();

// custom defined routes --Start here
router.post('/updateGame', controller.updateGameStatus);

// custom defined routes --Ends here
export = router;
