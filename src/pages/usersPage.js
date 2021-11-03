import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import ViewUser from "../components/views/viewUser";
import ViewPost from "../components/views/viewPost";
import ViewAlbum from "../components/views/viewAlbum";
import { ThemeContext } from "../hooks/useTheme"
import { useContext } from "react";

function View({ page, users }) {
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(true);   // true-> show posts || false -> show albums
  const [mobile, setMobile] = useState(true);    // UX design change when width is small
  const [focus, setFocus] = useState("");       // which user to show their posts/albums

  const {theme, themeDispatch} = useContext(ThemeContext);

  const getPosts = (userId, userData) => {
    setLoading(true);
    fetch(`https://kumparan-json-server.herokuapp.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((res) => setPosts(res))
      .then(() => setFocus(userData))
      .then(() => setLoading(false));
  };

  const getAlbums = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((res) => setAlbums(res));
  };

  return (
    <Flex
      alignItems={{ base: "center", lg: "inherit" }}
      flexDir={{ base: "column", lg: "row" }}
      d={page === "view" ? "flex" : "none"}
      justifyContent="center"
      bg={theme.bg}
      h="100%"
      w="100%"
      px="10px"
    >
      
      {/* Left Side */}
      <Flex
        w={{ base: "90vw", lg: "300px" }}
        alignItems="center"
        flexDir="column"
      >

        {/* Left Side Header */}
        <Heading
          textAlign="center"
          border="2px solid"
          borderColor={theme.line}
          borderRadius="8px"
          minH="40px"
          size="H2"
          w="100%"
          my="10px"
          p="10px"
          cursor={mobile ? "" : "pointer"}
          onClick={() => setMobile(true)}
        >
          Users
        </Heading>

        {/* List of users */}
        {mobile
          ? users?.map((user) => {
              return (
                <ViewUser
                  key={user.id}
                  user={user}
                  getPosts={getPosts}
                  getAlbums={getAlbums}
                  setMobile={setMobile}
                ></ViewUser>
              );
            })
          : ""}
      </Flex>

      {/* Right Side */}
      <Flex
        w={{ base: "90vw", lg: "500px" }}
        ml={{ lg: "40px" }}
        alignItems="center"
        flexDir="column"
      >
        <Flex
          justifyContent="space-around"
          alignItems="center"
          minH="40px"
          w="100%"
          m="10px"
        >

          {/* Right Side Header */}
          <Heading
            _hover={{
              bg: theme.col,
              color: `${theme.bg}`,
              textDecoration: "underline",
            }}
            color={content ? theme.bg : theme.col}
            bg={content ? theme.col : "inherit"}
            textAlign="center"
            borderRadius="8px 0 0 8px"
            border="2px solid"
            borderColor={theme.line}
            cursor="pointer"
            size="H2"
            p="10px"
            w="50%"
            onClick={() => setContent(true)}
          >
            {loading ? <Spinner /> : "Posts"}
          </Heading>

          <Heading
            _hover={{
              bg: theme.col,
              color: theme.bg,
              textDecoration: "underline",
            }}
            color={content ? theme.col : theme.bg }
            bg={content ? "inherit" : theme.col}
            textAlign="center"
            borderRadius="0 8px 8px 0"
            border="2px solid"
            borderColor={theme.line}
            borderLeft="0px"
            cursor="pointer"
            size="H2"
            p="10px"
            w="50%"
            onClick={() => setContent(false)}
          >
            {loading ? <Spinner /> : "Album"}
          </Heading>
        </Flex>

        {/* List of Posts */}
        <Flex d={content ? "flex" : "none"} flexDir="column" w="100%">
          {posts.map((post) => {
            if (post) {
              return (
                <ViewPost key={post.id} post={post} user={focus}></ViewPost>
              );
            }
            return <></>;
          })}
        </Flex>

        {/* List of Albums */}
        <Flex d={content ? "none" : "flex"} flexDir="column" w="100%">
          {albums.map((album) => {
            if (album) {
              return (
                <ViewAlbum
                  key={album.id}
                  album={album}
                  user={focus}
                ></ViewAlbum>
              );
            }
            return <></>;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default View;
