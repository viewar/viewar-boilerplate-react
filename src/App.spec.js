import React from 'react';

import App from './App';

// injected by @viewar/webpack/karma
const { enzyme: { mount }, chai: { expect }} = global;

describe('<App />', function() {
  let wrapper;

  it('renders headline without errors', function() {
    wrapper = mount(<App />);
  });

  it('renders <h1 id="app_headline">ViewAR SDK</h1>', function() {
    expect(wrapper).to.have.descendants('#app_headline');
    expect(wrapper.find('h1')).to.contain('ViewAR SDK');
  });
});
