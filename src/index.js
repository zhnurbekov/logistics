import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_app/App';
import './_css/style.scss';
import './_css/basscss.min.css';
import 'animate.css/animate.min.css';
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
