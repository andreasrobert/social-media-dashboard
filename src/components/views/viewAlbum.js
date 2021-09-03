import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewAlbum({ album, user }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Link to={`/user/${album.userId}/album/${album.id}`}>
      <Flex
        cursor="pointer"
        p="10px"
        w="500px"
        minH="80px"
        flexDir="column"
        border="2px solid black"
        borderRadius="8px"
        my="10px"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Text>By u/{user}</Text>
        <Heading size="H2">{album.title}</Heading>
      </Flex>
    </Link>
  );
}

export default ViewAlbum;
