import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FileSubmit from './components/FileSubmit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <FileSubmit/>
  </StrictMode>,
)
