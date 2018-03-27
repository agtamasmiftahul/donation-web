import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import InformationImage from '../medium/InformationImage'
import InformationText from '../medium/InformationText'

class Information extends Component {
  render(){
    return(
      <Grid centered columns={2} padded className='information'>
        <Grid.Column width={8} className='information-text'>
          <InformationText />
        </Grid.Column>
        <Grid.Column width={8} className='information-image'>
          <InformationImage />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Information
