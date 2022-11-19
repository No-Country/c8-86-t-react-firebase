import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from '../src/store/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <React.StrictMode>
      <Provider store={store} >
        <App />

      </Provider>
    </React.StrictMode>
  </HashRouter>
)
