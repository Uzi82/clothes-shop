import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import MainPage from './MainPage'

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);