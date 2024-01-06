import { Router } from 'express';
import { createGame, verifyGame } from '../controllers/gameController.js';

const router = Router();

router.get("/game/:id", verifyGame);
router.post("/game", createGame);

export default router;
