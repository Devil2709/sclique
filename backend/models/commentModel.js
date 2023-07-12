const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    voteCnt: {
      type: Number,
      required: true,
    },
    parentId: {
      type: String,
      required: true,
    },
    commentAr: {
      type: [String],
      required: true,
    },
    parentType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

commentSchema.statics.post = async function (
  text,
  username,
  parentId,
  parentType
) {
  if (!text) {
    throw Error("Enter text");
  }

  if (!username) {
    throw Error("Enter username");
  }

  if (!parentId) {
    throw Error("Enter parentId");
  }

  if (!parentType) {
    throw Error("Enter parent type");
  }

  const comment = await this.create({
    type: "comment",
    text,
    username,
    voteCnt: 0,
    parentId,
    parentType,
    commentAr: [],
  });
  console.log(comment);
  return comment;
};

module.exports = mongoose.model("Comment", commentSchema);
