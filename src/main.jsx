import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const araicodeInfo = {
  name: "arai",
  age: 27,
};

const araiCodeContext = createContext(araicodeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <araiCodeContext.Provider value={araicodeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </araiCodeContext.Provider>
)

export default araiCodeContext;
