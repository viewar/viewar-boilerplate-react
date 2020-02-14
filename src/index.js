import React from 'react';
import ReactDOM from 'react-dom';

import viewarApi from 'viewar-api';

import './index.scss';

import App from './app';
if (process.env.NODE_ENV !== 'production') {
  require('./remote-console');
}

(async function() {
  window.api = await viewarApi.init({appId: 'viewar.VASB6762Test'});

  const WCSModel = await viewarApi.modelManager.fetchModelFromRepository(
    '19741',
  );

  await viewarApi.sceneManager.insertModel(WCSModel, {
    pose: {
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  });

  await viewarApi.cameras.arCamera.activate();
  await viewarApi.tracker.activate();

  const rootElement = document.getElementById('app');

  const render = Component => {
    ReactDOM.render(
      <Component />,
      rootElement
    );
  };

  render(App);

  if (module.hot) {
    module.hot.accept(App, () => {
      render(App);
    });
  }
})();
