import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Campaign from './pages/Campaign'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Grid centered columns={1}>
          <Grid.Column>
            <Route exact path='/' component={Home} />
            <Route path='/campaign' component={Campaign} />
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default App
