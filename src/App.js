import { Flex } from "@chakra-ui/react";
import Header from './components/navbar';
import "./app.css";
import {useState} from 'react';
import CreatePost from './components/pages/createPostPage'
import View from './components/pages/userPage'
import PostPage from './components/pages/postPage'
import AlbumPage from "./components/pages/albumPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateUser from './components/pages/createUserPage'


function App() {

  const [page, setPage] = useState("view") // true->view , false->create

  return (
    <Router>
    <Flex pos="absolute"  flexDir="column" bg="rgb(224, 224, 0)"  minH="100%" w="100%"> 
    <Header setPage={setPage}></Header>
    <Switch>
      <Route exact path="/">
    <View page={page}></View>
    <CreatePost page={page}></CreatePost>
    <CreateUser page={page}></CreateUser>
    </Route>
    <Route exact path="/post/:id">
      <PostPage></PostPage>
    </Route>
    <Route exact path="/user/:userId/album/:id">
      <AlbumPage></AlbumPage>
    </Route>
    </Switch>
    </Flex>
    </Router>

  );
}

export default App;
