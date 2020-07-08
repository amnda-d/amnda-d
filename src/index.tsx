import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import 'particles.js';

(window as any).particlesJS.load('particles-js', 'static/particles.json');
ReactDOM.render(<App />, document.getElementById('root'));
