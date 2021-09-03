import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function ViewUser({ user, getPosts, getAlbums }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = async () => {
    getPosts(user.id, user.username);
    getAlbums(user.id);
  };

  return (
    <Flex
      cursor="pointer"
      p="10px"
      w="300px"
      minH="80px"
      flexDir="column"
      border="2px solid black"
      borderRadius="8px"
      my="10px"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={() => handleClick()}
    >
      <Heading size="H2" textDecoration={hovered ? "underline" : "none"}>
        {user.name}
      </Heading>
      <Text>u/{user.username}</Text>
    </Flex>
  );
}

export default ViewUser;
