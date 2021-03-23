import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Home from './components/pages/Home'
import AddToDo from './components/todos/AddToDo'
import UpdateToDo from './components/todos/UpdateToDo'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/addtodo" component={ AddToDo } />
        <Route path="/updatetodo/:id" component={ UpdateToDo } />
      </Switch>
    </Router>
  )
}

export default App