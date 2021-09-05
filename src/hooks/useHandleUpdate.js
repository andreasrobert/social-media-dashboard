import { useState } from "react";

export default function useHandlePost(url, getPost, setShowEdit, label) {
  const [loading, setLoading] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newBody, setBody] = useState("");

  const handleEdit = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        [label]: newTitle,
        body: newBody,
      }),
    })
      .then((response) => response.json())
      .then(() => getPost())
      .then(() => setLoading(false))
      .then(() => setShowEdit(false));
  };

  const handleDeletePost = () => {
    setLoading(true);
    fetch(url, {
      method: "DELETE",
    }).then(() => (window.location = "/"));
  };

  const handleDeleteComment = () => {
    setLoading(true);
    fetch(url, {
      method: "DELETE",
    })
      .then(() => getPost())
      .then(() => setShowEdit(false));
  };

  return {
    handleEdit,
    handleDeletePost,
    handleDeleteComment,
    loading,
    newTitle,
    setTitle,
    newBody,
    setBody,
  };
}
