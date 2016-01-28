import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from 'containers/App'
import todoApp from 'reducers'
import 'style/base.less'

import Paper from 'material-ui/lib/paper';

const store = createStore(todoApp)

const rootElement = document.getElementById('root')
render(
  <Paper id="app" zDepth={1}>
    <Provider store={store}>
      <App />
    </Provider>
  </Paper>,
  rootElement
)
