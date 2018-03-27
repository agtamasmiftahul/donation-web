import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import HeaderGlobal from '../components/large/Header'
import Event from '../components/large/Event'

class Home extends Component {
  render(){
    return(
      <Grid centered columns={1}>
        <Grid.Column>
          <HeaderGlobal />
        </Grid.Column>
        <Grid.Column>
          <Event />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home
