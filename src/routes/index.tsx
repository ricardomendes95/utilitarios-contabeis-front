import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CartaResponsabilidade from '../pages/CartaResponsabilidade'
import { Config } from '../pages/config'
import Home from '../pages/Home'

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/cartaResponsabilidade"
          component={CartaResponsabilidade}
        />
        <Route path="/config" component={Config} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
