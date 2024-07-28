import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Routes,link} from 'react-router-dom';

import tabel from './tabel';
import state from './state';
import fetch from './fetch api/fetchapi';
import post from './fetch api/post';
 function app() {
    <Router>
        <link to="/tabel">Tabel</link>
        <link to="/state">state</link>
        <link to="/fetch">fetch</link>
        
        <Routes>
            <route path="/" element={<tabel />} />
            <route path="/tabel" element={<tabel />} />
            <route path="/state" element={<state />} />
            <route path="/fetch" element={<fetch/>}/>
        </Routes>
    </Router>
 }