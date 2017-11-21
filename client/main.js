import React from 'react'
import { render } from 'react-dom'

import App from '/client/imports/App'

Meteor.startup(()=>{
  render(
    <App />,
    document.getElementById('react-body')
  )
})
