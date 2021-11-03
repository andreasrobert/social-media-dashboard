import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

function ViewPost({ post, user }) {
  const [hovered, setHovered] = useState(false);

  const {theme} = useContext(ThemeContext);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Link to={`/post/${post.id}`}>
      <Flex
        flexDir="column"
        borderRadius="8px"
        border="2px solid"
        borderColor={theme.line}
        cursor="pointer"
        minH="80px"
        my="10px"
        p="10px"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Text>By u/{user}</Text>
        <Heading size="H2">{post.title}</Heading>
        <Text size="Body">{post.body}</Text>
      </Flex>
    </Link>
  );
}

export default ViewPost;
