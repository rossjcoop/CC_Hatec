import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './components/App';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
// import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello'

ReactDOM.render(
  <StatefulHello name="Ross" enthusiasmLevel={10} />,
  // <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
