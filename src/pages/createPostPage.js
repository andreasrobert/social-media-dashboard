import { Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "../components/minor/button";
import InputComponent from "../components/minor/input";
import TextAreaComponent from "../components/minor/textArea";

function Create({ page }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loggedUser, setLoggedUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
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
      .then((result) => setLoading(false));
  };

  useEffect(() => {
    if (document.cookie) {
      setLoggedUser(
        JSON.parse(
          document.cookie
            .split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
    }
  }, [page]);

  return (
    <Flex
      d={page === "create" ? "flex" : "none"}
      alignItems="center"
      flexDir="column"
      bg="rgb(224, 224, 0)"
      margin="auto"
      h="50vh"
    >
      <Heading>Create post</Heading>
      <Heading size="H2" mt="5px">
        {loggedUser ? `as u/${loggedUser?.username}` : "Please login!"}
      </Heading>
      <form onSubmit={handleSubmit}>
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
