import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ButtonComponent from "./minor/button";
import InputComponent from "./minor/input";

export default function RegisterPage({ users, setChangePage, changePage, getUsers }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState(false);
  const [used, setUsed] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    for (const item of users) {
      if (item.username === username) {
        return setUsed(true);
      }
    }
    return createUser();
  };

  const createUser = () => {
    setLoading(true);
    fetch("https://kumparan-json-server.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name: name,
        username: username,
      }),
    })
      .then((response) => response.json())
      .then(() => setCreated(true))
      .then(() => getUsers())
      .then(() => setLoading(false));
  };

  useEffect(() => {
    setCreated(false);
  }, [changePage]);

  return (
    <>
      <Heading>{created ? "User created" : "Create user"}</Heading>
      <Heading size="H2" mt="5px">
        {used ? `username is already taken` : ""}
      </Heading>
      
      <form onSubmit={handleRegister}>
        <Flex flexDir="column" w={{ base: "90vw", lg: "500px" }}>
          <InputComponent
            value={name}
            setValue={setName}
            label="name"
            width={114}
          />

          <Flex flexDir="column" my="-30px">
            <InputComponent
              value={username}
              setValue={setUsername}
              label="username"
              width={185}
            />
          </Flex>

          <ButtonComponent label="Submit" loading={loading} />

          <Text
            alignSelf="flex-end"
            cursor="pointer"
            mt="-15px"
            onClick={() => setChangePage(true)}
          >
            Login?
          </Text>
        </Flex>
      </form>
    </>
  );
}
