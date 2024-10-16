//Library imports
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// component imports
import App from './App.jsx'
// css imports
import './index.css'
import  {BrowserRouter} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster/>
  </BrowserRouter>,
)
