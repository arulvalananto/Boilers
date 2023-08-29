import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import '@babel/polyfill'

import App from './App'

const container = document.getElementById('app')
const root = createRoot(container)

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
