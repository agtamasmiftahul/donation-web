import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render(){
    return(
      <Grid columns={2} padded className='footer'>
        <Grid.Column>
          <Link to='/'>
            <Image src='images/logo-kitabisa-blue.png' size='small' />
          </Link>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Footer
