const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
} = require("../controller/postController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

router.get("/", getPosts);

router.get("/:id", getPost);

router.post("/create_post", createPost);

module.exports = router;
