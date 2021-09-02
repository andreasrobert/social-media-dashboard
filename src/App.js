import { Flex } from "@chakra-ui/react";
import Header from './components/header';
import "./app.css";
import {useState} from 'react';
import Create from './components/create'
import View from './components/view'
import User from './user'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [page, setPage] = useState(false) // true->view , false->create

  return (
    <Router>
    <Flex pos="absolute"  flexDir="column" bg="rgb(224, 224, 0)"  minH="100%" w="100%"> 
    <Header setPage={setPage}></Header>
    <Switch>
      <Route exact path="/">
    <View page={page}></View>
    <Create page={page}></Create>
    </Route>
    <Route exact path="/user/:id">

      <User></User>

    </Route>
    </Switch>
    </Flex>
    </Router>

  );
}

export default App;
