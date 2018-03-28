import React, { Component } from 'react'
import { Grid, Form, Button, Header } from 'semantic-ui-react'

import FormInput from '../medium/FormInput'
import FormOptions from '../medium/FormOptions'

class FormCampaign extends Component {
  render(){
    return(
      <div className='form-background'>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Header size='huge' textAlign='center' className='form-header'>
              Galang Dana Online Untuk Biaya Pengobatan
            </Header>
          </Grid.Column>
        </Grid>
        <Grid centered columns={1}>
          <Grid.Column width={10} className='form'>
            <Form className='form-content'>
              <FormInput
                label='Name Lengkap'
                placeholder='Masukan nama lengkap kamu disini'
              />
              <FormInput
                label='E-mail'
                placeholder='contoh: campaigner@gmail.com'
              />
              <FormInput
                label='Judul Campaign'
                placeholder='contoh: Bantu Balita Lawan Gizi Buruk'
              />
              <FormOptions />
              <center>
                <Button className='form-button'>
                  Selanjutnya
                </Button>
              </center>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default FormCampaign
