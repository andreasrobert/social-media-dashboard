import { Flex, Heading, Input } from "@chakra-ui/react";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

export default function InputComponent({ value, setValue, label, width }) {
  const {theme} = useContext(ThemeContext);

  return (
    <Flex
      alignItems={{ xl: "center" }}
      flexDir="column"
      pos="relative"
      my="30px"
    >
      <Heading
        pos={{ xl: "absolute" }}
        textAlign={{ xl: "end" }}
        right="103%"
        top="-6px"
        mb="10px"
        w={width}
      >
        {label} :
      </Heading>
      <Input
        _hover={{ borderColor: theme.line }}
        placeholder=". . ."
        _placeholder={{
          color: theme.col,
        }}
        border="2px solid"
        borderColor={theme.line}
        focusBorderColor="none"
        color={theme.col}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
    </Flex>
  );
}
