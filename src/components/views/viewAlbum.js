import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

function ViewAlbum({ album, user }) {
  const [hovered, setHovered] = useState(false);

  const {theme} = useContext(ThemeContext);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <Link to={`/user/${album.userId}/album/${album.id}`}>
      <Flex
        flexDir="column"
        border="2px solid"
        borderColor={theme.line}
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
