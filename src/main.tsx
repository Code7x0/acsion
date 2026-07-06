import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/theme.css';
import './styles/animations.css';
import './styles/sections.css';
import './styles/responsive.css';
import './styles/about.css';
import './styles/shop.css';
import './styles/product.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
