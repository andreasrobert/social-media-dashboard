import { Flex, Heading} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

function Header({setPage}){
    
   
    return(
        <Flex bg="rgb(224, 224, 0)" borderBottom="2px solid black" h="70px" w="100%" alignItems="center" justifyContent="space-around" >
            <Link to="/">
            <Heading onClick={()=>setPage("view")} cursor="pointer">View Users</Heading>
            </Link>
            <Link to="/">
            <Heading onClick={()=>setPage("create")} cursor="pointer">Create Posts</Heading>
            </Link>
            <Link to="/">
            <Heading onClick={()=>setPage("login")} cursor="pointer">Login User</Heading>
            </Link>
        </Flex>

    )
}

export default Header;