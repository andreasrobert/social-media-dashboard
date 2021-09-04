import { Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";
import TextAreaComponent from "./minor/textArea";

export default function EditPost({ postId, title, body, setClick, getPost }) {
  const [loading, setLoading] = useState(false);
  const [newtitle, setTitle] = useState("");
  const [newbody, setBody] = useState("");
  const [first, setFirst] = useState(true);

  const handleEdit = (event) => {
    setLoading(true);
    event.preventDefault();
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: newtitle,
        body: newbody,
      }),
    })
      .then((response) => response.json())
      .then(() => getPost())
      .then(() => setLoading(false))
      .then(() => setClick(false));
  };

  const handleDelete = (event) => {
    console.log("hello");
    setLoading(true);
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}`, {
      method: "DELETE",
    }).then(() => (window.location = "/"));
  };

  useEffect(() => {
    if (first && title && body) {
      setFirst(false);
      setTitle(title);
      setBody(body);
    }
  }, [title, body]);

  return (
    <Flex
      pos="fixed"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0, 0, 0, 0.50)"
      top="0px"
      left="0px"
      w="100%"
      h="100%"
      onClick={() => setClick(false)}
    >
      <Flex
        w={{ base: "90vw", xl: "900px" }}
        justifyContent="center"
        alignItems="center"
        border="4px solid black"
        borderRadius="80px"
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
              value={newtitle}
              setValue={setTitle}
              name="Title"
              width={95}
            />

            <TextAreaComponent value={newbody} setValue={setBody} name="Body" />

            <Flex justifyContent="flex-end">
              <Flex mr="10px">
                <ButtonComponent act="Delete" loading={loading} />
              </Flex>

              <ButtonComponent act="Update" loading={loading} />
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
