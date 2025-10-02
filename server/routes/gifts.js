import express from "express";
import GiftsController from "../controllers/gifts.js";

const router = express.Router();

router.get("/", GiftsController.getGifts);

// Get a specific gift
router.get("/:giftId", GiftsController.getGiftById);

export default router;
