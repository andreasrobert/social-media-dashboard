import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

function ViewPhoto({ photo }) {
  const [focus, setFocus] = useState(false);

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      border="2px solid"
      borderColor="borderColor"
      borderRadius="8px"
      bg="black"
      minH="200px"
      w="170px"
      p="10px"
      m="10px"
    >
      <Image
        src={photo.thumbnailUrl}
        cursor="pointer"
        border="2px solid"
        borderColor="borderColor"
        borderRadius="8px"
        boxSize="150px"
        fit="fill"
        onClick={() => setFocus(!focus)}
      ></Image>
      <Text color="yellow" fontWeight="400" mt="4px">
        {photo.title}
      </Text>
      <Flex
        d={focus ? "flex" : "none"}
        bg="rgba(0, 0, 0, 0.50)"
        justifyContent="center"
        alignItems="center"
        pos="fixed"
        left="0px"
        top="0px"
        w="100%"
        h="100%"
        onClick={() => setFocus(!focus)}
      >
        <a target="_blank" rel="noopener noreferrer" href={photo.url}>
          <Image
            src={photo.url}
            cursor="pointer"
            boxSize="600px"
            fit="fill"
            onClick={(e) => e.stopPropagation()}
          ></Image>
        </a>
      </Flex>
    </Flex>
  );
}

export default ViewPhoto;
