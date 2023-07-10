const express = require("express");
const { getPosts, createPost } = require("../controller/postController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// router.use(requireAuth);

router.get("/", getPosts);

router.post("/create_post", createPost);

module.exports = router;
