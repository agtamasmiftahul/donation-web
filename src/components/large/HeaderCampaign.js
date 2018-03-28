import React, { Component } from 'react'
import { Image, Grid, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class HeaderCampaign extends Component {
  render(){
    return(
      <Grid.Column>
        <Menu fluid secondary className='header-campaign'>
          <Menu.Menu position='left'>
            <Link to='/'>
              <Menu.Item>
                <Image src='images/logo-kitabisa-white.png' size='small'/>
              </Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    )
  }
}

export default HeaderCampaign
