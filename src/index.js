import React from 'react';
import ReactDOM from 'react-dom';
import viewarApi from 'viewar-api';

import App from './App';
import styles from './index.scss';

(async function() {
  window.api        = await viewarApi.init();
  const rootElement = document.getElementById('app');

  ReactDOM.render(<App />, rootElement);

  if (module.hot) {
    module.hot.accept(App, () => {
      ReactDOM.render(<App />);
    });
  }
})();
