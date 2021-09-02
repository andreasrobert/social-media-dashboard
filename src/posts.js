import { Flex, Heading} from "@chakra-ui/react";
// import {useEffect} from 'react';

function Header(){
    
   
    return(
        <Flex bg="rgb(224, 224, 0)" borderBottom="2px solid black" h="70px" w="100%" alignItems="center" justifyContent="space-around" >
            <Heading cursor="pointer">View Users</Heading>
            <Heading cursor="pointer">Create Posts</Heading>
        </Flex>

    )
}

export default Header;