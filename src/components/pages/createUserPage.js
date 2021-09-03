import { Flex, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Create({ page }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  const handleSubmit =(event) => {
    setLoading(true);
    event.preventDefault();
    fetch("https://kumparan-json-server.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        username: username,
      }),
    })
      .then((response) => response.json())
      .then((res) => localStorage.setItem("user",JSON.stringify(res)))
      .then(() => setLoading(false));
  };

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))

  },[page, loading])

  return (
    <Flex
      d={page === "login" ? "flex" : "none"}
      bg="rgb(224, 224, 0)"
      margin="auto"
      h="50vh"
      //   w="700px"
      alignItems="center"
      flexDir="column"
    >
      <Heading>{user?`Hello ${user?.name}`:"Create user"}</Heading>
      <Heading mt="10px" size="H2">{user?`you're logged in as u/${user?.username}`:""}</Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexDir="column">
          <Flex my="30px" alignItems="center" pos="relative">
            <Heading pos="absolute" top="-6px" left="-125px">
              name :
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </Flex>
          <Flex my="10px" alignItems="center" pos="relative">
            <Heading pos="absolute" top="-6px" left="-195px">
              username :
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
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
