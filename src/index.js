import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/w3.css';
import resumeData from './resumeData.json';
import App from './components/App';

ReactDOM.render(<App data={resumeData}/>, document.getElementById('root'));
