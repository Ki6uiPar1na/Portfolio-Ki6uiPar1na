import React from 'react'
import { createRoot } from 'react-dom/client'
import PortfolioApp from './PortfolioApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>
)
