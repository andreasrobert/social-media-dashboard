import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewPhoto from "../views/viewPhoto";
import { Link } from "react-router-dom";

function AlbumPage() {
  const [albums, setAlbums] = useState([]); // .albumId, .userId
  const [user, setUser] = useState([]); //.userId
  const [photos, setPhotos] = useState([]); // .albumId,
  const [isAllowed, setIsAllowed] = useState(false);

  let { userId, id } = useParams();

  const getAllUserAlbums = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      .then((response) => response.json())
      .then((res) => setAlbums(res));
  };

  const getUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((res) => setUser(res));
  };

  const getPhotos = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((response) => response.json())
      .then((res) => setPhotos(res));
  };

  useEffect(() => {
    if (!isAllowed) {
      getUser();
      getAllUserAlbums();
    }

    if (isAllowed) {
      getPhotos();
    }
  }, [userId, id, isAllowed]);

  return (
    <Flex flexDir="column" alignItems="center">
      <Heading my="10px">u/{user.username} Albums</Heading>
      <Flex flexWrap="wrap" w="70%" justifyContent="center">
        {albums.map((album) => {
          if (album.id == id && !isAllowed) {
            setIsAllowed(true);
          }
          return (
            <Link key={album.id} to={`/user/${user.id}/album/${album.id}`}>
              <Flex
                bg={album.id == id ? "black" : "inherit"}
                color={album.id == id ? "yellow" : "inherit"}
                _hover={{ bg: "black", color: "yellow" }}
                h="30px"
                border="2px solid black"
                px="3px"
                alignItems="center"
                m="3px"
                borderRadius="8px"
              >
                <Text>{album.title}</Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center">
        {photos.map((photo) => {
          return <ViewPhoto photo={photo} key={photo.id}></ViewPhoto>;
        })}
      </Flex>
    </Flex>
  );
}

export default AlbumPage;
