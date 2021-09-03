import { Flex, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function ViewPhoto({ photo }) {
  const [focus, setFocus] = useState(false);

  return (
    <Flex
      p="10px"
      m="10px"
      w="170px"
      flexDir="column"
      minH="200px"
      bg="black"
      alignItems="center"
      borderRadius="8px"
      border="2px solid black"
    >
      <Image
        cursor="pointer"
        onClick={() => setFocus(!focus)}
        boxSize="150px"
        fit="fill"
        borderRadius="8px"
        border="2px solid black"
        src={photo.thumbnailUrl}
      ></Image>
      <Text mt="4px" color="yellow" fontWeight="400">
        {photo.title}
      </Text>
      <Flex
        onClick={() => setFocus(!focus)}
        d={focus ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        top="0px"
        left="0px"
        pos="fixed"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.50)"
      >
        <a target="_blank" rel="noopener noreferrer" href={photo.url}>
          <Image
            onClick={(e) => e.stopPropagation()}
            cursor="pointer"
            boxSize="600px"
            fit="fill"
            src={photo.url}
          ></Image>
        </a>
      </Flex>
    </Flex>
  );
}

export default ViewPhoto;
