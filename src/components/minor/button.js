import { Button } from "@chakra-ui/react";

export default function ButtonComponent({ label, loading }) {
  return (
    <Button
      _hover={{ bg: "black", color: "yellow" }}
      _active={{
        bg: "black",
        color: "yellow",
      }}
      _focus={{
        boxShadow: "none",
      }}
      alignSelf="flex-end"
      border="2px solid"
      borderColor="borderColor"
      color="black"
      bg="yellow"
      fontWeight="700"
      my="40px"
      type="submit"
      isDisabled={loading ? true : false}
      isLoading={loading ? true : false}
    >
      {label}
    </Button>
  );
}
