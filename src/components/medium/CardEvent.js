import React, { Component } from 'react'
import { Card, Image, Grid } from 'semantic-ui-react'

class CardEvent extends Component {
  render(){
    const { title, inisiator } = this.props

    return(
      <Grid.Column>
        <Card fluid>
          <Image src='images/image-card.jpg' fluid />
          <Card.Content>
            <Card.Header>
              { title }
            </Card.Header>
            <Card.Description>
              { inisiator }
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default CardEvent
