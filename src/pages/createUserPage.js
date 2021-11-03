import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import LoginPage from "../components/login";
import RegisterPage from "../components/register";
import { ThemeContext } from "../hooks/useTheme"
import { useContext } from "react";

function Create({ page, users, getUsers }) {
  const [changePage, setChangePage] = useState(true); 

  const {theme} = useContext(ThemeContext);

  return (
    <Flex
      d={page === "login" ? "flex" : "none"}
      alignItems="center"
      flexDir="column"
      bg={theme.bg}
      margin="auto"
      h="50vh"
    >
      {changePage ? (
        <LoginPage users={users} setChangePage={setChangePage}></LoginPage>
      ) : (
        <RegisterPage
          users={users}
          changePage={changePage}
          setChangePage={setChangePage}
          getUsers={getUsers}
        ></RegisterPage>
      )}
    </Flex>
  );
}

export default Create;
