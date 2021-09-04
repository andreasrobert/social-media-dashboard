import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import EditComment from "../editComment";

function ViewComment({ comment, getPost }) {
  const [loggedUser, setLoggedUser] = useState();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      setLoggedUser(
        JSON.parse(
          document?.cookie
            ?.split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
    }
  }, []);

  return (
    <Flex
      flexDir="column"
      border="2px solid black"
      borderRadius="8px"
      w="100%"
      my="10px"
      p="20px"
    >
      <Flex justifyContent="space-between">
        <Text fontWeight="400">By u/{comment.email}</Text>
        {loggedUser?.username === comment.email && loggedUser ? (
          <Text onClick={() => setIsClicked(true)} cursor="pointer">
            edit
          </Text>
        ) : (
          ""
        )}
      </Flex>
      <Heading size="H2">{comment.name}</Heading>
      <Text size="P" mt="4px">
        {comment.body}
      </Text>
      {loggedUser?.username === comment.email && loggedUser && isClicked ? (
        <EditComment
          setIsClicked={setIsClicked}
          getPost={getPost}
          comment={comment}
        ></EditComment>
      ) : (
        ""
      )}
    </Flex>
  );
}

export default ViewComment;
