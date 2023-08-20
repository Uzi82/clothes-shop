import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import MainPage from './MainPage'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import store from './store';
import Liked from './Liked';
import Cart from './Cart';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/liked' element={<Liked />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);