import { Flex, Heading, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ViewUser from "./user";

function View({ page }) {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  };

  const getComments = (postId) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((res) => setComments(res));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Flex
      d={page ? "flex" : "none"}
      bg="rgb(224, 224, 0)"
      h="100%"
      w="100%"
      flexDir="column"
      alignItems="center"
    >
      <Flex
        w="90%"
        flexWrap="wrap"
        justifyContent="center"
     

      >
        {users.map((user) => {
          return <ViewUser key={user.id} user={user}></ViewUser>;
        })}
      </Flex>
      {/* 
            <Flex mt="20px"></Flex>
            {comments.map((comment)=>{
                return(
                    <Text onClick={()=>getComments(comment.id)} cursor="pointer" key={comment.id}>{comment.name}</Text>
                )
            })} */}
    </Flex>
  );
}

export default View;
