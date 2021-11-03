import { Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

function ViewPhoto({ photo }) {
  const [focus, setFocus] = useState(false);  // true -> show full picture

  const {theme} = useContext(ThemeContext);

  return (
    <Flex
      w={{ base: "44vw", md: "170px" }}
      m={{ base: "5px", md: "10px" }}
      flexDir="column"
      alignItems="center"
      border="2px solid"
      borderColor={theme.line}
      borderRadius="8px"
      bg={theme.col}
      minH="200px"
      p="10px"
    >
      <Image
        boxSize={{ base: "38vw", md: "150px" }}
        src={photo.thumbnailUrl}
        cursor="pointer"
        border="2px solid"
        borderColor={theme.line}
        borderRadius="8px"
        fit="fill"
        onClick={() => setFocus(!focus)}
      ></Image>
      <Text color={theme.bg} fontWeight="400" mt="4px">
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
            boxSize={{ base: "75vw", lm: "600px" }}
            src={photo.url}
            cursor="pointer"
            fit="fill"
            onClick={(e) => e.stopPropagation()}
          ></Image>
        </a>
      </Flex>
    </Flex>
  );
}

export default ViewPhoto;
