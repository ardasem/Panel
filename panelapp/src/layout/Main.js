import React from 'react'
import { Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'

function MainPage() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  )
}

export default MainPage