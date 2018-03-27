import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import HeaderEvent from '../medium/HeaderEvent'
import CardEvent from '../medium/CardEvent'

class Event extends Component {
  render(){
    return(
      <div>
        <Grid centered columns={1}>
          <Grid.Column className='margin-header-event'>
            <HeaderEvent />
          </Grid.Column>
        </Grid>
        <Grid centered columns={4} padded>
          <CardEvent
            title='Bantu Sahira Balita Penderita Tumor dan Gizi Buruk'
            inisiator="Nurjanatun Na'im"
          />
          <CardEvent
            title='Bantu Sahira Balita Penderita Tumor dan Gizi Buruk'
            inisiator="Nurjanatun Na'im"
          />
          <CardEvent
            title='Bantu Sahira Balita Penderita Tumor dan Gizi Buruk'
            inisiator="Nurjanatun Na'im"
          />
        </Grid>
      </div>
    )
  }
}

export default Event
