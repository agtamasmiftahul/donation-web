import React, { Component } from 'react'
import { Menu, Image, Divider, Header, Icon } from 'semantic-ui-react'

class MenuBar extends Component {
  render(){
    return(
      <Menu secondary fluid className='nav'>
        <Menu.Menu position='left'>
          <Menu.Item>
            <Image src='images/logo-kitabisa-white.png' size='small'/>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Header size='small' className='nav'>
              Galang Dana
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Header size='small' className='nav'>
              Donasi
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Header size='small' className='nav'>
              Zakat
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Divider vertical />
          </Menu.Item>
          <Menu.Item>
            <Icon name='users' className='nav'/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MenuBar
