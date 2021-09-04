import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

function ViewUser({ user, getPosts, getAlbums, setMobile }) {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const handleClick = async () => {
    getPosts(user.id, user.username);
    getAlbums(user.id);
    if(window.innerWidth <= 530){
      setMobile(false)
    }
    
  };

  return (
    <Flex
      flexDir="column"
      border="2px solid black"
      borderRadius="8px"
      cursor="pointer"
      minH="80px"
      w="100%"
      my="10px"
      p="10px"
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
