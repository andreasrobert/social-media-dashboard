import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import EditComment from "../editComment";
import useVerifyUser from "../../hooks/useVerifyUser";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

function ViewComment({ comment, getPost }) {
  const [showEdit, setShowEdit] = useState(false);

  const {theme} = useContext(ThemeContext);
  const { loggedUser } = useVerifyUser();

  return (
    <Flex
      flexDir="column"
      border="2px solid"
      borderColor={theme.line}
      borderRadius="8px"
      w="100%"
      my="10px"
      p="20px"
    >
      <Flex justifyContent="space-between">
        <Text fontWeight="400">By u/{comment.email}</Text>

        {loggedUser?.username === comment.email && loggedUser ? (
          <Text onClick={() => setShowEdit(true)} cursor="pointer">
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

      {loggedUser?.username === comment.email && loggedUser && showEdit ? (
        <EditComment
          setShowEdit={setShowEdit}
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
