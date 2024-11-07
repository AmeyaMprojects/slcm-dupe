import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Announcement from './Announcement.jsx'
import Menu from './menu.jsx'
import Legal from './legal.jsx'
import './index.css'
import Sidebar from './sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Announcement />
    <Menu />
    <Sidebar />
    <App />
    <Legal />
  </StrictMode>,
)
