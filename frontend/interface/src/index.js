import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import RegistrationForm from "./Components/RegistrationForm";
import LoginForm from "./Components/LoginForm";
// import PostPage from './Pages/PostPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='register' element={<RegistrationForm />}>
        </Route>
        <Route path='login' element={<LoginForm />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter >
  </div>
);
