import { Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import DeleteButtonComponent from "./minor/deleteButton";
import InputComponent from "./minor/input";
import TextAreaComponent from "./minor/textArea";

export default function EditComment({ getPost, setIsClicked, comment }) {
  const [loading, setLoading] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newBody, setBody] = useState("");

  const handleEdit = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(`https://kumparan-json-server.herokuapp.com/comments/${comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: newTitle,
        body: newBody,
      }),
    })
      .then((response) => response.json())
      .then(() => getPost())
      .then(() => setLoading(false))
      .then(() => setIsClicked(false));
  };

  const handleDelete = () => {
    console.log("hello");
    setLoading(true);
    fetch(`https://kumparan-json-server.herokuapp.com/comments/${comment.id}`, {
      method: "DELETE",
    })
      .then(() => getPost())
      .then(() => setIsClicked(false));
  };

  useEffect(() => {
    if (comment) {
      setTitle(comment.name);
      setBody(comment.body);
    }
  }, [comment]);

  return (
    <Flex
      bg="rgba(0, 0, 0, 0.50)"
      justifyContent="center"
      alignItems="center"
      pos="fixed"
      top="0px"
      left="0px"
      w="100%"
      h="100%"
      onClick={() => setIsClicked(false)}
    >
      <Flex
        w={{ base: "90vw", xl: "900px" }}
        border="4px solid black"
        borderRadius="80px"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        minH="400px"
        py="30px"
        bg="yellow"
        onClick={(e) => e.stopPropagation()}
      >
        <Heading>Edit post</Heading>
        <form onSubmit={handleEdit}>
          <Flex flexDir="column" w={{ base: "70vw", lm: "500px" }}>
            <InputComponent
              value={newTitle}
              setValue={setTitle}
              label="Title"
              width={95}
            />

            <TextAreaComponent
              value={newBody}
              setValue={setBody}
              label="Body"
            />
            <Flex justifyContent="flex-end">
              <DeleteButtonComponent
                label="Delete"
                loading={loading}
                handleDelete={handleDelete}
              />

              <ButtonComponent label="Update" loading={loading} />
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
