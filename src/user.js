import { Flex, Heading, Text} from "@chakra-ui/react";
import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";

function User(){
    const [posts, setPosts] = useState([]);

    let{id} =useParams()

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
          .then((response) => response.json())
          .then((res) => setPosts(res));
      };

    useEffect(()=>{
        getPosts()
    },[posts])
    
    return(
        <Flex bg="rgb(224, 224, 0)" flexDir="column" borderBottom="2px solid black" minH="70px" w="100%" alignItems="center" justifyContent="space-around" >
            <Heading cursor="pointer">View Users</Heading>
            <Heading cursor="pointer">Create Posts</Heading>
            {posts.map((post)=>{
                return(

                    <Text my="2px">{post.title}</Text>
                )
            })}
        </Flex>

    )
}

export default User;