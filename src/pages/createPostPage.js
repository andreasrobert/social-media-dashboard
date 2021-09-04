import { Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "../components/minor/button";
import InputComponent from "../components/minor/input";
import TextAreaComponent from "../components/minor/textArea";

function Create({ page }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
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
        userId: user.id,
      }),
    })
      .then((response) => response.json())
      .then((result) => setLoading(false));
  };

  useEffect(() => {
    if (document.cookie) {
      setUser(
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
        {user ? `as u/${user?.username}` : "Please login!"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column" w={{ base: "90vw", lg: "500px" }}>
          <InputComponent
            value={title}
            setValue={setTitle}
            name="Title"
            width={95}
          />

          <TextAreaComponent value={body} setValue={setBody} name="Body" />

          <ButtonComponent act="Submit" loading={loading} />
        </Flex>
      </form>
    </Flex>
  );
}

export default Create;
