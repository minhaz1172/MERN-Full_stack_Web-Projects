import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProvider from './Context/ShopContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
    <App />
    </ShopProvider>

  </StrictMode>,
)
