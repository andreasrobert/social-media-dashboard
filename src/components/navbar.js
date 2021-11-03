import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../hooks/useTheme";
import React, { useContext } from "react";

function Header({ setPage }) {
  const {theme, themeDispatch} = useContext(ThemeContext);

  const changeTheme = () =>{
    if (theme.bg === "yellow") themeDispatch("red")
    if (theme.bg === "red") themeDispatch("green")
    if (theme.bg === "green") themeDispatch("blue")
    if (theme.bg === "blue") themeDispatch("yellow")
    console.log(theme)
  }

  return (
    <Flex
      borderBottom="2px solid"
      borderColor={theme.line}
      justifyContent="space-around"
      alignItems="center"
      bg={theme.bg}
      h="70px"
      w="100%"
    >
      <Link to="/">
        <Heading size="H1" cursor="pointer" onClick={() => setPage("view")}>
          View Users
        </Heading>
      </Link>
      <Link to="/">
        <Heading size="H1" cursor="pointer" onClick={() => setPage("create")}>
          Create Posts
        </Heading>
      </Link>
      <Link to="/">
        <Heading size="H1" cursor="pointer" onClick={() => setPage("login")}>
          Login User
        </Heading>
      </Link>
      <Flex position="absolute" right="0px" h="35px" w="35px" bg={theme.col} color={theme.bg} onClick={()=> changeTheme()} cursor="pointer" p="1px" fontSize="9px">change color</Flex>
    </Flex>
  );
}

export default Header;
