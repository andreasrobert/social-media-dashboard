import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ViewUser from "../views/viewUser";
import ViewPost from "../views/viewPost";
import ViewAlbum from "../views/viewAlbum";

function View({ page }) {
  const [users, setUsers] = useState([]);
  const [focus, setFocus] = useState("");
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [content, setContent] = useState(true);

  // const getUsers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((res) => setUsers(res));
  // };

  const getUsers = () => {
    fetch("https://kumparan-json-server.herokuapp.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  };

  const getPosts = (userId, userData) => {
    fetch(`https://kumparan-json-server.herokuapp.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((res) => setPosts(res))
      .then(() => setFocus(userData));
  };

  const getAlbums = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((res) => setAlbums(res));
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  return (
    <Flex
      d={page === "view" ? "flex" : "none"}
      bg="rgb(224, 224, 0)"
      h="100%"
      w="100%"
      justifyContent="center"
    >
      {/* Left Side */}
      <Flex flexDir="column" alignItems="center">
        <Flex
          p="10px"
          w="300px"
          minH="40px"
          border="2px solid black"
          borderRadius="8px"
          my="10px"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="H2">Users</Heading>
        </Flex>
        {users.map((user) => {
          return (
            <ViewUser
              key={user.id}
              user={user}
              getPosts={getPosts}
              getAlbums={getAlbums}
            ></ViewUser>
          );
        })}
      </Flex>

      {/* Right Side */}
      <Flex flexDir="column" alignItems="center" ml="40px" w="500px">
        <Flex
          mx="10px"
          w="100%"
          minH="40px"
          my="10px"
          justifyContent="space-around"
          alignItems="center"
        >
          <Flex
            p="10px"
            justifyContent="center"
            cursor="pointer"
            border="2px solid black"
            borderRadius="8px 0 0 8px"
            w="50%"
            _hover={{
              bg: "black",
              color: "yellow",
              textDecoration: "underline",
            }}
            bg={content ? "black" : "inherit"}
            color={content ? "yellow" : "inherit"}
            onClick={() => setContent(true)}
          >
            <Heading size="H2">Posts</Heading>
          </Flex>
          <Flex
            p="10px"
            justifyContent="center"
            cursor="pointer"
            border="2px solid black"
            borderLeft="0px"
            borderRadius="0 8px 8px 0"
            w="50%"
            _hover={{
              bg: "black",
              color: "yellow",
              textDecoration: "underline",
            }}
            bg={content ? "inherit" : "black"}
            color={content ? "inherit" : "yellow"}
            onClick={() => setContent(false)}
          >
            <Heading size="H2">Album</Heading>
          </Flex>
        </Flex>
        <Flex flexDir="column" d={content ? "flex" : "none"}>
          {posts.map((post) => {
            if (post) {
              return (
                <ViewPost key={post.id} post={post} user={focus}></ViewPost>
              );
            }
          })}
        </Flex>

        <Flex flexDir="column" d={content ? "none" : "flex"}>
          {albums.map((album) => {
            if (album) {
              return (
                <ViewAlbum key={album.id} album={album} user={focus}></ViewAlbum>
              );
            }
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default View;
