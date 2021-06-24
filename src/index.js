import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>

  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
