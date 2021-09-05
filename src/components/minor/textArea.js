import { Flex, Heading, Textarea } from "@chakra-ui/react";

export default function TextAreaComponent({ value, setValue, label }) {
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
        _hover={{ borderColor: "borderColor" }}
        placeholder="Say something . . ."
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
      ></Textarea>
    </Flex>
  );
}
