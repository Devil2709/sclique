const express = require("express");
const {
  getComment,
  createComment,
} = require("../controller/commentController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

router.get("/:id", getComment);

router.post("/create_comment", createComment);

module.exports = router;
