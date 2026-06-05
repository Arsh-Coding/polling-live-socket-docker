const express = require("express");

const router = express.Router();

const authMiddleware = require(
  "../middlewares/auth.middleware"
);

const pollController = require(
  "../controllers/poll.controller"
);

// Protected Routes

router.post(
  "/",
  authMiddleware,
  pollController.createPoll
);

router.get(
  "/",
  authMiddleware,
  pollController.getMyPolls
);

router.get(
  "/:pollId",
  authMiddleware,
  pollController.getPollById
);

router.patch(
  "/:pollId/publish",
  authMiddleware,
  pollController.publishPoll
);

module.exports = router;