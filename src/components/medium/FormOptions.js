import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'

class FormOptions extends Component {
  constructor() {
    super()
    this.state = {
      hospitals : []
    }
  }

  getData () {
    const url = 'http://ppid.jakarta.go.id/json?url=http://data.jakarta.go.id/dataset/6925d6e6-d9a7-4159-906b-96468f870d93/resource/5d550b55-52c0-4d71-aa12-c4d319a593e8/download/Data-Rumah-Sakit-Di-DKI-Jakarta.csv'
    const config = {
      headers : {
        'Authorization' : 'htp4eICNHUqhRwbuc0eq58fdsBxQboZhTxzA35hAMoqtD10GO4ql2BkZp4PYqV/o',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
      }
    }
    axios.get(url, config, {crossdomain : true})
      .then(res => {
        const hospitals = res.data
        this.setState({ hospitals })
        console.log(hospitals)
      })
  }

  componentWillMount () {
    this.getData()
  }

  render(){
    return(
      <Dropdown text='Nama Rumah Sakit'>
        <Dropdown.Menu>
          {this.state.hospitals.map(hospital =>
            <Dropdown.Item key={hospital.kode_rumah_sakit} text={hospital.nama_rumah_sakit} />
          )}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default FormOptions
