import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header({ setPage }) {
  return (
    <Flex
      borderBottom="2px solid black"
      justifyContent="space-around"
      alignItems="center"
      bg="yellow"
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
    </Flex>
  );
}

export default Header;
