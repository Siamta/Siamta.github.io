import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "@styles"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if (process.env.READY === "true" && "serviceWorker" in navigator && !navigator.serviceWorker.controller) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" });
}
