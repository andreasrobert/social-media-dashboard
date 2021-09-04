import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import EditComment from "../editComment";

function ViewComment({ comment, getPost }) {
  const [user, setUser] = useState();
  const [click, setClick] = useState(false);

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
        {user?.username === comment.email && user ? (
          <Text onClick={() => setClick(true)} cursor="pointer">
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
      {user?.username === comment.email && user && click ? (
        <EditComment
          setClick={setClick}
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
