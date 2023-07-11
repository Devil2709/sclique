export const useNode = () => {
  const makeTree = async (curNode) => {
    let childAr = [];
    console.log(curNode);
    childAr = await Promise.all(
      curNode.commentAr.map(async (comment_id) => {
        const response = await fetch(
          "http://localhost:4000/api/comment/" + comment_id,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const json = await response.json();

        if (!response.ok) {
          console.log("Error");
        } else {
          return await makeTree(json);
        }
      })
    );
    console.log(childAr);
    return { ...curNode, commentAr: childAr };
  };

  const addComment = async (neededId, commentNode, newComment) => {
    if (neededId === commentNode._id) {
      const response = await fetch(
        "http://localhost:4000/api/comment/create_comment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment),
        }
      );

      if (!response.ok) {
        console.log("Error");
      } else {
        commentNode.commentAr.unshift(newComment);
        return commentNode;
      }
    } else {
      let lastNode = [];
      lastNode = await Promise.all(
        commentNode.commentAr.map(async (nxtNode) => {
          return await addComment(neededId, nxtNode, newComment);
        })
      );
      return { ...commentNode, commentAr: lastNode };
    }
  };

  return { addComment, makeTree };
};
