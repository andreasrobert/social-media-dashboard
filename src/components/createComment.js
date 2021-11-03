import { Flex, Heading } from "@chakra-ui/react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";
import TextAreaComponent from "./minor/textArea";
import useHandleCreate from "../hooks/useHandleCreate";
import { ThemeContext } from "../hooks/useTheme"
import { useContext } from "react";

export default function CreateComment({ postId, getComments }) {
  const {theme} = useContext(ThemeContext);

  const {
    handleSubmitComment,
    loggedUser,
    title,
    setTitle,
    body,
    setBody,
    loading,
  } = useHandleCreate(postId, getComments);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg={theme.bg}
      margin="auto"
      minH="50vh"
      mb="30px"
    >
      <Heading>Create comment</Heading>
      <Heading size="H2" mt="5px">
        {loggedUser ? `as u/${loggedUser?.username}` : "Please login!"}
      </Heading>
      
      <form onSubmit={handleSubmitComment}>
        <Flex w={{ base: "90vw", lg: "500px" }} flexDir="column">
          <InputComponent
            value={title}
            setValue={setTitle}
            label="Title"
            width={95}
          />

          <TextAreaComponent value={body} setValue={setBody} label="Body" />

          <ButtonComponent label="Submit" loading={loading} />
        </Flex>
      </form>
    </Flex>
  );
}
