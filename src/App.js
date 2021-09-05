import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from "./pages/createPostPage";
import CreateUser from "./pages/createUserPage";
import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/navbar";
import UserPage from "./pages/userPage";
import PostPage from "./pages/postPage";
import AlbumPage from "./pages/albumPage";
import "./app.css";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState("view");

  const getUsers = () => {
    fetch("https://kumparan-json-server.herokuapp.com/users")
      .then((response) => response.json())
      .then((res) => setUsers(res));
  };

  useEffect(() => {
    if (page === "view") {
      getUsers();
    }
  }, [page]);

  return (
    <Router>
      <Flex
        pos="absolute"
        flexDir="column"
        bg="yellow"
        minH="100%"
        w="100%"
      >
        <Header setPage={setPage}></Header>
        <Switch>
          <Route exact path="/">
            <UserPage page={page} users={users}></UserPage>
            <CreatePost page={page}></CreatePost>
            <CreateUser
              page={page}
              users={users}
              getUsers={getUsers}
            ></CreateUser>
          </Route>
          <Route exact path="/post/:postId">
            <PostPage></PostPage>
          </Route>
          <Route exact path="/user/:userId/album/:albumId">
            <AlbumPage></AlbumPage>
          </Route>
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
