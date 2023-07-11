const jwt = require("jsonwebtoken");
const Comment = require("../models/commentModel.js");
const Post = require("../models/postModel.js");

const getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findOne({ _id: id });
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createComment = async (req, res) => {
  const { text, username, parentId, parentType } = req.body;
  try {
    const comment = await Comment.post(text, username, parentId, parentType);
    let parent;
    if (parentType === "main") {
      parent = await Post.findOne({ _id: parentId });
    } else {
      parent = await Comment.findOne({ _id: parentId });
    }
    parent.commentAr.unshift(comment._id);
    parent.save();
    res.status(200).json(comment);
    console.log("done");
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { getComment, createComment };
