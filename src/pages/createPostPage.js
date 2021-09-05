import { Flex, Heading } from "@chakra-ui/react";
import ButtonComponent from "../components/minor/button";
import InputComponent from "../components/minor/input";
import TextAreaComponent from "../components/minor/textArea";
import useHandleCreate from "../hooks/useHandleCreate";

function Create({ page }) {
  
  const {
    handleSubmitPost,
    loggedUser,
    title,
    setTitle,
    body,
    setBody,
    loading,
  } = useHandleCreate("", "", page);

  return (
    <Flex
      d={page === "create" ? "flex" : "none"}
      alignItems="center"
      flexDir="column"
      bg="yellow"
      margin="auto"
      h="50vh"
    >
      <Heading>Create post</Heading>
      <Heading size="H2" mt="5px">
        {loggedUser ? `as u/${loggedUser?.username}` : "Please login!"}
      </Heading>
      <form onSubmit={handleSubmitPost}>
        <Flex flexDir="column" w={{ base: "90vw", lg: "500px" }}>
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

export default Create;
