import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/Login/SignUp';
import SignIn from './Component/Login/SignIn';
import Protected from './Component/Protected/Protected';
import Home from './Component/Main/Home';
import Stocks from './Component/List/Stocks'; // Corrected import path

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/protected" element={<App />} />
        <Route path="/stocks" element={<Stocks />} /> {/* Corrected import path */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
