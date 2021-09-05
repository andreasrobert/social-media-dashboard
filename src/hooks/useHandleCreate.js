import { useState, useEffect } from "react";
import useVerifyUser from "./useVerifyUser";


export default function useHandleCreate(id, getComments, page) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitComment = (event) => {
    if (!loggedUser) {
      event.preventDefault();
      return;
    }
    setLoading(true);
    event.preventDefault();
    fetch("https://kumparan-json-server.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: title,
        body: body,
        postId: id,
        email: loggedUser.username,
      }),
    })
      .then((response) => response.json())
      .then(() => getComments(id))
      .then(() => setLoading(false));
  };

  const handleSubmitPost = (event) => {
    if (!loggedUser) {
      event.preventDefault();
      return;
    }
    setLoading(true);
    event.preventDefault();
    fetch("https://kumparan-json-server.herokuapp.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: loggedUser.id,
      }),
    })
      .then((response) => response.json())
      .then(() => setLoading(false));
  };
  
  const { loggedUser } = useVerifyUser(loading, page)

  return {
    handleSubmitComment,
    handleSubmitPost,
    loggedUser,
    title,
    setTitle,
    body,
    setBody,
    loading,
  };
}
