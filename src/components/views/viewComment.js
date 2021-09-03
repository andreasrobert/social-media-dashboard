import { Flex, Heading, Text } from "@chakra-ui/react";

function ViewComment({ comment }) {
  return (
    <Flex
      flexDir="column"
      p="20px"
      w="700px"
      borderRadius="8px"
      border="2px solid black"
      my="10px"
    >
      <Text fontWeight="400">By u/{comment.email}</Text>
      <Heading size="H2">{comment.name}</Heading>
      <Text size="P" mt="4px">
        {comment.body}
      </Text>
    </Flex>
  );
}

export default ViewComment;
