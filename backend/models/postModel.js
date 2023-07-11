const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    voteCnt: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    commentAr: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

postSchema.statics.post = async function (title, content, image, username) {
  if (!title || !username) {
    throw Error("Enter all fields");
  }

  const post = await this.create({
    title,
    content,
    username,
    image,
    voteCnt: 0,
    type: "main",
  });
  console.log(post);
  return post;
};

module.exports = mongoose.model("Post", postSchema);
