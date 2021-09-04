import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";

export default function LoginPage({ users, setChangePage }) {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const handleLogin = (event) => {
    event.preventDefault();

    for (const item of users) {
      if (item.username === username) {
        document.cookie = `user=${JSON.stringify(item)};max-age=1900;path=/`;
        setLoaded(true);
        return;
      }
    }
  };

  useEffect(() => {
    if (document.cookie) {
      setLoggedUser(
        JSON.parse(
          document.cookie
            .split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
      console.log("heloo");
    }
    setLoaded(false);
  }, [loaded]);

  return (
    <>
      <Heading>
        {loggedUser ? `Hello ${loggedUser?.name}` : "Login user"}
      </Heading>
      <Heading size="H2" mt="5px">
        {loggedUser ? `you're logged in as u/${loggedUser?.username}` : ""}
      </Heading>
      <form onSubmit={handleLogin}>
        <Flex flexDir="column" w={{ base: "90vw", lg: "500px" }}>
          <InputComponent
            value={username}
            setValue={setUsername}
            label="username"
            width={185}
          />

          <ButtonComponent label="Submit" loading={false} />

          <Text
            alignSelf="flex-end"
            cursor="pointer"
            mt="-15px"
            onClick={() => setChangePage(false)}
          >
            Create an account?
          </Text>
        </Flex>
      </form>
    </>
  );
}
