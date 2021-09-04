import { Flex, Heading} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";
import TextAreaComponent from "./minor/textArea";

export default function CreateComment({ postId, getComments }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    if(!user){
      event.preventDefault();
      return
    }
    setLoading(true);
    event.preventDefault();
    fetch("https://kumparan-json-server.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        body: body,
        postId: postId,
        email: user.username,
      }),
    })
      .then((response) => response.json())
      .then((result) => getComments(postId))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (document.cookie) {
      setUser(
        JSON.parse(
          document?.cookie
            ?.split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
    }
  }, [loading]);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      bg="rgb(224, 224, 0)"
      margin="auto"
      minH="50vh"
      mb="30px"
    >
      <Heading>Create comment</Heading>
      <Heading size="H2" mt="5px">
        {user ? `as u/${user?.username}` : "Please login!"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex w={{ base: "90vw", lg: "500px" }} flexDir="column">
          <InputComponent
            value={name}
            setValue={setName}
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
