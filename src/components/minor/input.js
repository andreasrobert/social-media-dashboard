import { Flex, Heading, Input } from "@chakra-ui/react";

export default function InputComponent({ value, setValue, label, width }) {
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
        _hover={{ borderColor: "borderColor" }}
        placeholder=". . ."
        _placeholder={{
          color: "black",
        }}
        border="2px solid"
        borderColor="borderColor"
        focusBorderColor="none"
        color="black"
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></Input>
    </Flex>
  );
}
