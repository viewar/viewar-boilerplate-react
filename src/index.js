import React from 'react';
import ReactDOM from 'react-dom';

import viewarApi from 'viewar-api';

import './index.scss';

import App from './app';
(async function() {
  window.api = await viewarApi.init();

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

  const sheepModel = await viewarApi.modelManager.fetchModelFromRepository(
    '20'
  );

  for (let x = 0; x < 20; ++x) {
    await viewarApi.sceneManager.insertModel(sheepModel, {
      pose: {
        position: {
          x: Math.random() * 4000 - 2000,
          y: 0,
          z: Math.random() * 4000 - 2000,
        },
      },
    });
  }
})();
