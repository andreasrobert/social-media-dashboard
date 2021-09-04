import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import LoginPage from "../components/login";
import RegisterPage from "../components/register";

function Create({ page, users, getUsers }) {
  const [action, setAction] = useState(true);

  return (
    <Flex
      d={page === "login" ? "flex" : "none"}
      alignItems="center"
      flexDir="column"
      bg="rgb(224, 224, 0)"
      margin="auto"
      h="50vh"
    >
      {action ? (
        <LoginPage users={users} setAction={setAction}></LoginPage>
      ) : (
        <RegisterPage
          users={users}
          action={action}
          setAction={setAction}
          getUsers={getUsers}
        ></RegisterPage>
      )}
    </Flex>
  );
}

export default Create;
