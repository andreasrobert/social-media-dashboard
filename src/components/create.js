import { Flex, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Create({page}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState(87);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  return (
    <Flex
      d={page?"none":"flex"}
      bg="rgb(224, 224, 0)"
      margin="auto"
      h="50vh"
      //   w="700px"
      alignItems="center"
      flexDir="column"
    >
      <Heading>Create post</Heading>
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
        ></Textarea>
      </Flex>

      <Button
        _hover={{ bg: "black", color:"rgb(224, 224, 0) !important" }}
        _active={{
          bg: "black",
          color:"rgb(224, 224, 0) !important"
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
      >
        Submit
      </Button>
    </Flex>
  );
}

export default Create;
