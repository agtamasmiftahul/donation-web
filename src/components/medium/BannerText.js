import React, { Component } from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'

class BannerText extends Component {
  render(){
    return(
      <Grid centered columns={1} padded>
        <Grid.Column className='banner-text'>
          <Header size='huge' textAlign='center'>
            Galang Dana Online Untuk Biaya Pengobatan
            <Header.Subheader>
              Kini donasi yang diterima dapat langsung disalurkan ke Rumah Sakit terdaftar
            </Header.Subheader>
          </Header>
        </Grid.Column>
        <Grid.Column>
          <center>
            <Button className='banner-button'>
              GALANG DANA
            </Button>
          </center>
        </Grid.Column>
      </Grid>
    )
  }
}

export default BannerText
