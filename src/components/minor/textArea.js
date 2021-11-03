import { Flex, Heading, Textarea } from "@chakra-ui/react";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

export default function TextAreaComponent({ value, setValue, label }) {
  const {theme} = useContext(ThemeContext);

  return (
    <Flex alignItems={{ xl: "center" }} flexDir="column" pos="relative">
      <Heading
        pos={{ xl: "absolute" }}
        textAlign={{ xl: "end" }}
        right="103%"
        w="107px"
        my="10px"
      >
        {label} :
      </Heading>
      <Textarea
        _hover={{ borderColor: theme.line }}
        placeholder="Say something . . ."
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
      ></Textarea>
    </Flex>
  );
}
