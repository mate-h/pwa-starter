import { h, render } from 'preact';
import 'preact/devtools';
import App from './components/app';
import './style/index.css';

const root = document.getElementById('root');
if (root) render(<App />, root);
