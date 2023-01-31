import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { App } from './App';

axios.defaults.baseURL = 'http://localhost:5000/api';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
