import React, { Component } from 'react';
import viewarApi from 'viewar-api';


class App extends Component {
  async componentDidMount() {
    // load demo 3d model
    const sheepModel = await viewarApi.modelManager.fetchModelFromRepository('20');
    // renders model into 3D layer of viewar-core
    for (let x = 0; x < 20; ++x) {
      await viewarApi.sceneManager.insertModel(sheepModel, {
        pose: {
          position: {
            y: 0,
            x: Math.random() * 4000 - 2000,
            z: Math.random() * 4000 - 2000,
          },
        },
      });
    }
  }

  render() {
    return (
      <h1>ViewAR SDK</h1>);
  }
}


export default App;
