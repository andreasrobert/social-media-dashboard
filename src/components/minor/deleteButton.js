import { Button } from "@chakra-ui/react";

export default function DeleteButtonComponent({
  label,
  loading,
  handleDelete,
}) {
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
      mr="10px"
      onClick={() => handleDelete()}
      isDisabled={loading ? true : false}
      isLoading={loading ? true : false}
    >
      {label}
    </Button>
  );
}
