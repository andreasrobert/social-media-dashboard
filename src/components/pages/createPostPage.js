import { Flex, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

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
    if(document.cookie){
      setUser(JSON.parse(document.cookie.split(';').find(row => row.startsWith("user=")).split("=")[1]))
    }
    
  }, [page]);

  return (
    <Flex
      d={page === "create" ? "flex" : "none"}
      bg="rgb(224, 224, 0)"
      margin="auto"
      h="50vh"
      //   w="700px"
      alignItems="center"
      flexDir="column"
    >
      <Heading>Create post</Heading>
      <Heading mt="5px" size="H2">
        {user ? `as u/${user?.username}` : "Please login!"}
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column">
          <Flex my="30px" alignItems="center" pos="relative">
            <Heading pos="absolute" top="-6px" left="-115px">
              Title :
            </Heading>
            <Input
              focusBorderColor="none"
              w="500px"
              border="2px solid black !important"
              placeholder=". . ."
              _placeholder={{
                color: "black",
              }}
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></Input>
          </Flex>
          <Flex alignItems="center" pos="relative">
            <Heading pos="absolute" left="-125px">
              Body :
            </Heading>
            <Textarea
              placeholder="Say something . . ."
              _placeholder={{
                color: "black",
              }}
              focusBorderColor="none"
              border="2px solid black !important"
              w="500px"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>
          </Flex>

          <Button
            _hover={{ bg: "black", color: "rgb(224, 224, 0) !important" }}
            _active={{
              bg: "black",
              color: "rgb(224, 224, 0) !important",
            }}
            _focus={{
              boxShadow: "none",
            }}
            colorScheme="purple"
            color="black !important"
            mt="40px"
            alignSelf="flex-end"
            border="2px solid black"
            bg="rgb(224, 224, 0)"
            fontWeight="700"
            type="submit"
            isDisabled={loading ? true : false}
            isLoading={loading ? true : false}
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default Create;

