import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/Login/SignUp';
import SignIn from './Component/Login/SignIn';
import Protected from './Component/Protected/Protected';
import Home from './Component/Main/Home';
import Invest1 from './Component/Invest/Invest1/Invest1';
import Invest2 from './Component/Invest/Invest2/Invest2';
import Invest3 from './Component/Invest/Invest3/Invest3';
import Invest4 from './Component/Invest/Invest4/Invest4';
import Invest5 from './Component/Invest/Invest5/Invest5';
import Invest6 from './Component/Invest/Invest6/Invest6';
import Stocks from './Component/List/Stocks';
import Pay1 from './Component/Invest/Invest1/Pay/Pay1';
import Pay2 from './Component/Invest/Invest2/Pay2/Pay2';
import Pay3 from './Component/Invest/Invest3/Pay3/Pay3'
import Analyse from './Component/Invest/Invest1/Analyse/Analyse1';
import Analyse2 from './Component/Invest/Invest2/Analyse2/Analyse2';
import Analyse3 from './Component/Invest/Invest3/Analyse3/Analyse3';

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
        <Route path="/protected" element={<Protected />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/invest1" element={<Invest1 />} />
        <Route path="/invest2" element={<Invest2 />} />
        <Route path="/invest3" element={<Invest3 />} />
        <Route path="/invest4" element={<Invest4 />} />
        <Route path="/invest5" element={<Invest5 />} />
        <Route path="/invest6" element={<Invest6 />} />
        <Route path="/pay1" element={<Pay1 />} />
        <Route path="/analyse" element={<Analyse />} />
        <Route path="/pay1" element={<Pay2 />} />
        <Route path="/analyse" element={<Analyse2/>} />
        <Route path="/pay1" element={<Pay3 />} />
        <Route path="/analyse" element={<Analyse3/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
