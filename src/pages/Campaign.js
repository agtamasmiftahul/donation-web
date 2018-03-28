import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import HeaderCampaign from '../components/large/HeaderCampaign'
import FormCampaign from '../components/large/FormCampaign'

class Campaign extends Component {
  render(){
    return(
      <Grid centered columns={1} className='campaign-background'>
        <Grid.Column>
          <HeaderCampaign />
          <FormCampaign />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Campaign
