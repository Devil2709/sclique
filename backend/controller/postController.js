const Post = require("../models/postModel.js");
const jwt = require("jsonwebtoken");

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({ _id: id });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createPost = async (req, res) => {
  const { title, content, image, username } = req.body;
  try {
    const post = await Post.post(title, content, image, username);
    res.status(200).json(post);
    console.log("done");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { getPosts, getPost, createPost };
