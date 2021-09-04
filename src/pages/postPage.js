import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewComment from "../components/views/viewComment";
import CreateComment from "../components/createComment";
import EditPost from "../components/editPost";

function Post() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);
  const [you, setYou] = useState();
  const [click, setClick] = useState(false);

  let { id } = useParams();

  const getUser = (userId) => {
    fetch(`https://kumparan-json-server.herokuapp.com/users/${userId}`)
      .then((response) => response.json())
      .then((res) => setUser(res));
  };

  const getComments = (postId) => {
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((res) => setComments(res));
  };

  const getPost = () => {
    fetch(`https://kumparan-json-server.herokuapp.com/posts/${id}`)
      .then((response) => response.json())
      .then((res) => {
        setPost(res);
        getUser(res.userId);
        getComments(res.id);
      });
  };

  useEffect(() => {
    getPost();
    if (document.cookie) {
      setYou(
        JSON.parse(
          document?.cookie
            ?.split(";")
            .find((row) => row.startsWith("user="))
            .split("=")[1]
        )
      );
    }
  }, [id]);

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
            <Text fontWeight="500">By u/{user.username}</Text>
            {you?.username === user?.username && you ? (
              <Text onClick={() => setClick(true)} cursor="pointer">
                edit
              </Text>
            ) : (
              ""
            )}
          </Flex>
          <Heading size="H2">{post.title}</Heading>
          <Text size="P" mt="16px">
            {post.body}
          </Text>
        </Flex>
        <CreateComment postId={id} getComments={getComments}></CreateComment>
        {comments.slice(0).reverse().map((comment) => {
          return (
            <ViewComment
              getPost={getPost}
              key={comment.id}
              comment={comment}
            ></ViewComment>
          );
        })}
        {you?.username === user?.username && you && click ? (
          <EditPost
            setClick={setClick}
            getPost={getPost}
            postId={id}
            title={post.title}
            body={post.body}
          ></EditPost>
        ) : (
          ""
        )}
      </Flex>
    </Flex>
  );
}

export default Post;
