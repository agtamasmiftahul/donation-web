import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormInput extends Component {
  render(){
    const { label, placeholder } = this.props
    return(
      <Form.Field>
        <label>{ label }</label>
        <input placeholder={ placeholder } />
      </Form.Field>
    )
  }
}

export default FormInput
