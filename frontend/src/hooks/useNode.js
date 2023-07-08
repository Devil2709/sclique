export const useNode = () => {
  const addComment = (neededId, commentNode, newComment) => {
    if (neededId === commentNode.id) {
      newComment.id = new Date().getTime();
      commentNode.commentAr.unshift(newComment);
      return commentNode;
    } else {
      let lastNode = [];
      lastNode = commentNode.commentAr.map((nxtNode) => {
        return addComment(neededId, nxtNode, newComment);
      });
      return { ...commentNode, commentAr: lastNode };
    }
  };

  return { addComment };
};
