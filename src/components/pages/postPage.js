import { Flex, Heading, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ViewComment from "../views/viewComment";
import CreateComment from "../createComment";

function Post() {
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [comments, setComments] = useState([]);

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

  // const getHerokuComments = (resJson1, postId) => {
  //   fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}/comments`)
  //     .then((response) => response.json())
  //     .then((res) => setComments([...resJson1, ...res]));
  // };

  // const getAllCommentsNotParallel = (postId) => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  //     .then((res) => res.json())
  //     .then((resJson1) => {
  //       fetch(`https://kumparan-json-server.herokuapp.com/posts/${postId}/comments`)
  //         .then((response) => response.json())
  //         .then((resJson2) => setComments([...resJson1, ...resJson2]));
  //     });
  // };

  // const getAllCommentsSerial = async (postId) => {
  //   const res1 = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  //   );
  //   const res2 = await fetch(
  //     `https://kumparan-json-server.herokuapp.com/posts/${postId}/comments`
  //   );
  //   const res1Json = await res1.json()
  //   const res2Json = await res2.json()

  //   setComments([...res1Json, ...res2Json]);
  // };

  // const getAllComments = (postId) => {
  //   return Promise.all([
  //     fetch(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  //     ).then((res) => res.json()),
  //     fetch(
  //       `https://kumparan-json-server.herokuapp.com/posts/${postId}/comments?test=1`
  //     ).then((res) => res.json()),
  //   ]).then((results) => {
  //     setComments([...results[0], ...results[1]]);
  //   });
  // };

  

  useEffect(() => {
    const getPost = () => {
      fetch(`https://kumparan-json-server.herokuapp.com/posts/${id}`)
        .then((response) => response.json())
        .then((res) => {
          setPost(res);
          getUser(res.userId);
          getComments(res.id);
        });
    };
    getPost();
  }, [id]);

  return (
    <Flex flexDir="column" alignItems="center">
      <Flex
        flexDir="column"
        p="20px"
        w="700px"
        borderRadius="8px"
        border="2px solid black"
        my="50px"
      >
        <Text fontWeight="500">By u/{user.username}</Text>
        <Heading size="H2">{post.title}</Heading>
        <Text size="P" mt="16px">
          {post.body}
        </Text>
      </Flex>
      <CreateComment postId={id} getComments={getComments}></CreateComment>
      {comments.map((comment) => {
        return <ViewComment key={comment.id} comment={comment}></ViewComment>;
      })}
    </Flex>
  );
}

export default Post;
