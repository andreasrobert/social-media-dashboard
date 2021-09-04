import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";

export default function LoginPage({ users, setAction }) {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState();

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
      setUser(
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
      <Heading>{user ? `Hello ${user?.name}` : "Login user"}</Heading>
      <Heading size="H2" mt="5px">
        {user ? `you're logged in as u/${user?.username}` : ""}
      </Heading>
      <form onSubmit={handleLogin}>
        <Flex flexDir="column" w={{ base: "90vw", lg: "500px" }}>
          <InputComponent
            value={username}
            setValue={setUsername}
            name="username"
            width={185}
          />

          <ButtonComponent act="Submit" loading={false} />

          <Text
            alignSelf="flex-end"
            cursor="pointer"
            mt="-15px"
            onClick={() => setAction(false)}
          >
            Create an account?
          </Text>
        </Flex>
      </form>
    </>
  );
}
