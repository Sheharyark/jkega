import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {UserAuthContextProvider} from "./Context/UserAuthContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserAuthContextProvider>
    <App />
    </UserAuthContextProvider>
  </React.StrictMode>
)
