import { Flex, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";


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

  const handleDelete = (event) =>{
    console.log("hello")
    setLoading(true);
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}`, {
      method: "DELETE"
  }).then(()=>window.location = "/")
  }


  useEffect(() => {
    if (first && title && body) {
      setFirst(false);
      setTitle(title);
      setBody(body);
    }
  }, [title, body]);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      top="0px"
      left="0px"
      pos="fixed"
      w="100%"
      h="100%"
      bg="rgba(0, 0, 0, 0.50)"
      onClick={() => setClick(false)}
    >
      <Flex
        onClick={(e) => e.stopPropagation()}
        bg="yellow"
        w="900px"
        h="400px"
        borderRadius="80px"
        border="4px solid black"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Edit post</Heading>
        <form onSubmit={handleEdit}>
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
                value={newtitle}
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
                value={newbody}
                onChange={(e) => setBody(e.target.value)}
              ></Textarea>
            </Flex>
            <Flex justifyContent="flex-end">
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
                mr="15px"
                isDisabled={loading ? true : false}
                isLoading={loading ? true : false}
                onClick={handleDelete}
              >
                Delete
              </Button>

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
                Update
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}
