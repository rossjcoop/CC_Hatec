import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './Hello';

ReactDOM.render(
  <Hello name="Ross" enthusiasmLevel={10} />,
  // <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
