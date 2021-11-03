import { Flex, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewComment from "../components/views/viewComment";
import CreateComment from "../components/createComment";
import EditPost from "../components/editPost";
import useVerifyUser from "../hooks/useVerifyUser";
import { ThemeContext } from "../hooks/useTheme"
import { useContext } from "react";

function Post() {
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [comments, setComments] = useState([]);
  const [showEdit, setShowEdit] = useState(false);

  const {theme} = useContext(ThemeContext);
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

  const { loggedUser } = useVerifyUser(postId);

  useEffect(() => {
    getPost();
  }, [postId]);

  return (
    <Flex justifyContent="center">
      <Flex flexDir="column" alignItems="center" w="700px" p="10px">

        {/* The Post */}
        <Flex
          flexDir="column"
          border="2px solid"
          borderColor={theme.line}
          borderRadius="8px"
          w="100%"
          my="50px"
          p="20px"
        >
          <Flex justifyContent="space-between">
            <Text fontWeight="500">By u/{userData.username}</Text>
            {loggedUser?.username === userData?.username && loggedUser ? (
              <Text onClick={() => setShowEdit(true)} cursor="pointer">
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

        {/* Create Comment */}
        <CreateComment
          postId={postId}
          getComments={getComments}
        ></CreateComment>

        {/* List of Comments */}
        {comments
          .slice(0)
          .reverse()
          .map((comment) => {
            return (
              <ViewComment
                getPost={getPost}
                key={comment.id}
                comment={comment}
              ></ViewComment>
            );
          })}

        {/* Enable logged user to edit their comment */}
        {loggedUser?.username === userData?.username &&
        loggedUser &&
        showEdit ? (
          <EditPost
            setShowEdit={setShowEdit}
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
