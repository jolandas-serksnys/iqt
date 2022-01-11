import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList } from './components/PostList';
import { PostCreate } from './components/PostCreate';
import { PostView } from './components/PostView';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostList />}></Route>
      <Route path="list" element={<PostList />}></Route>
      <Route path="create" element={<PostCreate />}></Route>
      <Route path="post/:id" element={<PostView />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const body = document.body;
if (body.hasAttribute('theme-mode')) {
    body.removeAttribute('theme-mode');
} else {
    body.setAttribute('theme-mode', 'dark');
}