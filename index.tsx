
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';

const root = document.createElement("div")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



if ('serviceWorker' in navigator) {
  // navigator.serviceWorker.register('/js/index.html')
  navigator.serviceWorker.register('/js/index.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}


console.log("Hello from the service worker!");

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
});

self.addEventListener('fetch', (event) => {
  console.log('Service Worker fetching...');
});

