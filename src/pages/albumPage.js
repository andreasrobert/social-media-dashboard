import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewPhoto from "../components/views/viewPhoto";
import { Link } from "react-router-dom";
import { ThemeContext } from "../hooks/useTheme"
import { useContext } from "react";

function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [userData, setUserData] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isAllowed, setIsAllowed] = useState(false); // won't fetch album if user doesn't have the right albumId in the url params

  let { userId, albumId } = useParams(); // route-> siteName/user/:userId/album/:albumId

  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    const getAllUserAlbums = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
        .then((response) => response.json())
        .then((res) => setAlbums(res));
    };

    const getUser = () => {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((res) => setUserData(res));
    };

    const getPhotos = () => {
      fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then((response) => response.json())
        .then((res) => setPhotos(res));
    };

    if (!isAllowed) {
      getUser();
      getAllUserAlbums();
    }

    if (isAllowed) {
      getPhotos();
    }
  }, [userId, albumId, isAllowed]);

  return (
    <Flex flexDir="column" alignItems="center">
      <Heading textAlign="center" my="10px">
        u/{userData.username} Albums
      </Heading>

      {/* List of user albums */}
      <Flex justifyContent="center" flexWrap="wrap" w="70%">
        {albums.map((album) => {
          if (album.id == albumId && !isAllowed) {
            setIsAllowed(true);
          }
          return (
            <Link key={album.id} to={`/user/${userData.id}/album/${album.id}`}>
              <Text
                color={album.id == albumId ? `${theme.bg}` : theme.col }
                bg={album.id == albumId ? theme.col : "inherit"}
                _hover={{ bg: theme.col, color: theme.bg }}
                textAlign="center"
                border="2px solid"
                borderColor={theme.line}
                borderRadius="8px"
                minH="80%"
                px="3px"
                m="3px"
              >
                {album.title}
              </Text>
            </Link>
          );
        })}
      </Flex>

      {/* List of album photos */}
      <Flex flexWrap="wrap" justifyContent="center">
        {photos.map((photo) => {
          return <ViewPhoto photo={photo} key={photo.id}></ViewPhoto>;
        })}
      </Flex>
    </Flex>
  );
}

export default AlbumPage;
