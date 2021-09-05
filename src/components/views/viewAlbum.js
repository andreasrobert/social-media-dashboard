import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ViewAlbum({ album, user }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Link to={`/user/${album.userId}/album/${album.id}`}>
      <Flex
        flexDir="column"
        border="2px solid"
        borderColor="borderColor"
        borderRadius="8px"
        cursor="pointer"
        minH="80px"
        my="10px"
        p="10px"
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
