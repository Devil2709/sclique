export const useNode = () => {
  const makeTree = async (curNode) => {
    let childAr = [];
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
    // console.log(childAr);
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

      const json = await response.json();

      if (!response.ok) {
        console.log("Error");
      } else {
        console.log(json);
        commentNode.commentAr.unshift(json);
        return commentNode;
        // console.log(newComment);
        // if (commentNode.type === "main") {
        //   const response = await fetch(
        //     "http://localhost:4000/api/posts/" + commentNode._id,
        //     {
        //       method: "GET",
        //       headers: { "Content-Type": "application/json" },
        //     }
        //   );

        //   const json = await response.json();

        //   if (!response.ok) {
        //     console.log("Error");
        //   } else {
        //     return await makeTree(json);
        //   }
        // } else {
        //   const response = await fetch(
        //     "http://localhost:4000/api/comment/" + commentNode._id,
        //     {
        //       method: "GET",
        //       headers: { "Content-Type": "application/json" },
        //     }
        //   );

        //   const json = await response.json();

        //   if (!response.ok) {
        //     console.log("Error");
        //   } else {
        //     return await makeTree(json);
        //   }
        // }
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
