import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PostList } from './views/PostList';
import { PostCreate } from './views/PostCreate';
import { PostView } from './views/PostView';

import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import { LocaleProvider } from '@douyinfe/semi-ui';
import { Error404 } from './views/Error404';
import { Layout } from '@douyinfe/semi-ui';
import { NavBar } from "./components/NavBar"

ReactDOM.render(
  <BrowserRouter>
    <LocaleProvider locale={en_GB}>
      <Layout>
        <NavBar/>
          <Layout.Content
              style={{
                  padding: '24px',
                  backgroundColor: 'var(--semi-color-bg-0)'
              }}>
            <Routes>
              <Route path="/" element={<PostList />}></Route>
              <Route path="list" element={<PostList />}></Route>
              <Route path="create" element={<PostCreate />}></Route>
              <Route path="post/:id" element={<PostView />}></Route>
              <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </Layout.Content>
      </Layout>
    </LocaleProvider>
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