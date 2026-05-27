import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

// Fonts
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/inter/400.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/lato/400.css';
import '@fontsource/nunito/400.css';
import '@fontsource/oswald/400.css';
import '@fontsource/raleway/400.css';
import '@fontsource/ubuntu/400.css';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
