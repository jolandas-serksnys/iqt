import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from './components/List';
import { Create } from './components/Create';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />}></Route>
      <Route path="list" element={<List />}></Route>
      <Route path="create" element={<Create />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
