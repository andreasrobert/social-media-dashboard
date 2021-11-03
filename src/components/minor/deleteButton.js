import { Button } from "@chakra-ui/react";
import { ThemeContext } from "../../hooks/useTheme"
import { useContext } from "react";

export default function DeleteButtonComponent({
  label,
  loading,
  handleDelete,
}) {
  const {theme, themeDispatch} = useContext(ThemeContext);

  return (
    <Button
      _hover={{ bg: theme.col , color: theme.bg }}
      _active={{
        bg: theme.col,
        color: theme.bg ,
      }}
      _focus={{
        boxShadow: "none",
      }}
      alignSelf="flex-end"
      border="2px solid"
      borderColor={theme.line}
      color={theme.col}
      bg={theme.bg}
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
