import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/index.css'
import './assets/table.css'
import './assets/form.css'
import App from './componentes/App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
