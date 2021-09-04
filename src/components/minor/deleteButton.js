import { Button } from "@chakra-ui/react";

export default function DeleteButtonComponent({ label, loading, handleDelete }) {
  return (
    <Button
      _hover={{ bg: "black", color: "rgb(224, 224, 0) !important" }}
      _active={{
        bg: "black",
        color: "rgb(224, 224, 0) !important",
      }}
      _focus={{
        boxShadow: "none",
      }}
      alignSelf="flex-end"
      border="2px solid black"
      color="black !important"
      bg="rgb(224, 224, 0)"
      fontWeight="700"
      my="40px"
      mr="10px"
      onClick={() => handleDelete()}
      isDisabled={loading ? true : false}
      isLoading={loading ? true : false}
    >
      {label}
    </Button>
  );
}
