import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import MenuBar from '../medium/Menu'
import BannerText from '../medium/BannerText'

class HeaderGlobal extends Component {
  render(){
    return(
      <Grid.Column className='banner'>
        <MenuBar />
        <BannerText />
      </Grid.Column>
    )
  }
}

export default HeaderGlobal
