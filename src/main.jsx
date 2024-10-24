import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/spacing.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/js/srcipt.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App/>
</StrictMode>,)
