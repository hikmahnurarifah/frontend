import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot dari react-dom
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Mendapatkan referensi ke elemen HTML tempat Anda ingin merender aplikasi React
const rootElement = document.getElementById('root');

// Membuat root dengan createRoot
const root = createRoot(rootElement);

// Merender aplikasi React di dalam root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
