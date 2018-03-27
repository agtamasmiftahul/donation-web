import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Grid centered columns={1}>
          <Grid.Column>
            <Home />
          </Grid.Column>
        </Grid>
      </BrowserRouter>
    )
  }
}

export default App
