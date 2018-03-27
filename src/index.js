import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'semantic-ui-css/semantic.min.css'
import './scss/style.css'

import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
