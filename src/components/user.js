import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function User({ user }) {
  const [hovered, setHovered] = useState(false);

  

  const handleHover= ()=>{
    setHovered(!hovered)
  }

  return (
      <Link to={`/user/${user.id}`}>
    <Flex
      cursor="pointer"
      mx="10px"
      p="10px"
      w="300px"
      minH="80px"
      flexDir="column"
      border="2px solid black"
      borderRadius="8px"
      my="10px"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Heading size="H2" textDecoration={hovered?"underline":"none"}>{user.name}</Heading>
      <Text>u/{user.username}</Text>
    </Flex>
    </Link>
  );
}

export default User;
