import ReactDOM from 'react-dom';
import viewarApi from 'viewar-api';

import App from './App';
import './remote-console';
// import style from './index.scss';

(async function() {
  window.api        = await viewarApi.init();
  const rootElement = document.getElementById('app');

  ReactDOM.render(App, rootElement);

  if (module.hot) {
    module.hot.accept(App, () => {
      ReactDOM.hydrate(App);
    });
  }
})();
