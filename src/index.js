import React from 'react';
import ReactDOM from 'react-dom';
import './remote-console';
import { getDirection } from './utils/directions';

import viewarApi from 'viewar-api';

import './index.scss';

import App from './app';
(async function() {
  window.api = await viewarApi.init();

  const WCSModel = await viewarApi.modelManager.fetchModelFromRepository(
    '19741'
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

  console.log('log', {
    'a': 1234,
    'b': '5678',
  });
  console.info('info');
  console.warn('warn');
  console.error('error');
})();
