import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewComment from "../components/views/viewComment";
import CreateComment from "../components/createComment";
import EditPost from "../components/editPost";

function Post() {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [comments, setComments] = useState([]);
  const [loggedUser, setLoggedUser] = useState();
  const [click, setClick] = useState(false);

  let { postId } = useParams();

  const getUser = (userId) => {
    fetch(`https://kumparan-json-server.herokuapp.com/users/${userId}`)
      .then((response) => response.json())
      .then((res) => setUserData(res));
  };

  const getComments = (postId) => {
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((res) => setComments(res));
  };

  const getPost = () => {
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}`)
      .then((response) => response.json())
      .then((res) => {
        setPostData(res);
        getUser(res.userId);
        getComments(res.id);
      });
  };

  useEffect(() => {
    getPost();
    if (document.cookie) {
      setLoggedUser(
        JSON.parse(
          document?.cookie
            ?.split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
    }
  }, [postId]);

  return (
    <Flex justifyContent="center">
      <Flex flexDir="column" alignItems="center" w="700px" p="10px">
        <Flex
          flexDir="column"
          border="2px solid black"
          borderRadius="8px"
          w="100%"
          my="50px"
          p="20px"
        >
          <Flex justifyContent="space-between">
            <Text fontWeight="500">By u/{userData.username}</Text>
            {loggedUser?.username === userData?.username && loggedUser ? (
              <Text onClick={() => setClick(true)} cursor="pointer">
                edit
              </Text>
            ) : (
              ""
            )}
          </Flex>
          <Heading size="H2">{postData.title}</Heading>
          <Text size="P" mt="16px">
            {postData.body}
          </Text>
        </Flex>
        <CreateComment postId={postId} getComments={getComments}></CreateComment>
        {comments.slice(0).reverse().map((comment) => {
          return (
            <ViewComment
              getPost={getPost}
              key={comment.id}
              comment={comment}
            ></ViewComment>
          );
        })}
        {loggedUser?.username === userData?.username && loggedUser && click ? (
          <EditPost
            setClick={setClick}
            getPost={getPost}
            postId={postId}
            title={postData.title}
            body={postData.body}
          ></EditPost>
        ) : (
          ""
        )}
      </Flex>
    </Flex>
  );
}

export default Post;
