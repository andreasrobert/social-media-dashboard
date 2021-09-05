import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import ButtonComponent from "./minor/button";
import DeleteButtonComponent from "./minor/deleteButton";
import InputComponent from "./minor/input";
import TextAreaComponent from "./minor/textArea";
import useHandlePost from "../hooks/useHandleUpdate";

export default function EditPost({ postId, title, body, setClick, getPost }) {
  
  const url = `https://kumparan-json-server.herokuapp.com/posts/${postId}`;

  const {
    handleEdit,
    handleDeletePost,
    loading,
    newTitle,
    setTitle,
    newBody,
    setBody,
  } = useHandlePost(url, getPost, setClick, "title");

  useEffect(() => {
    if (title && body) {
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
        border="3px solid"
        borderColor="borderColor"
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
                handleDelete={handleDeletePost}
              />

              <ButtonComponent label="Update" loading={loading} />
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
