import React from 'react'
import ReactDOM from 'react-dom/client'
import './src/index.css'
import App from './App.jsx'
import './styles.css'
import { SpeedInsights } from '@vercel/speed-insights/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
  </React.StrictMode>,
)
