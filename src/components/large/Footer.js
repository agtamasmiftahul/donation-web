import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class Footer extends Component {
  render(){
    return(
      <Grid columns={2} padded className='footer'>
        <Grid.Column>
          <Image src='images/logo-kitabisa-blue.png' size='small' />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Footer
