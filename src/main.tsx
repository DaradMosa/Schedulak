
/**
 * Application Entry Point - React application bootstrap
 * 
 * This file:
 * - Gets the root DOM element where the React app will mount
 * - Creates a React root using createRoot (React 18+ method)
 * - Renders the main App component inside the root
 * - Imports global CSS styles from index.css
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

/**
 * Application Entry Point
 * 
 * This file:
 * 1. Gets the root DOM element where the React app will mount
 * 2. Creates a React root using createRoot (React 18+ method)
 * 3. Renders the main App component inside the root
 * 4. Imports global CSS styles from index.css
 * 
 * This is the first JavaScript file that runs when the app loads in the browser.
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found in document");
}

const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
