import React from 'react';

import App from './App';

// injected by @viewar/webpack/karma
const { enzyme: { mount }, chai: { expect }} = global;

describe('<App />', function() {
  let wrapper;

  it('mounts without errors', function() {
    wrapper = mount(<App />);
    // eslint-disable-next-line no-unused-expressions
    expect(wrapper).to.exist;
  });

  it('mounts with `<h1 id="app_headline">ViewAR SDK</h1>`', function() {
    expect(wrapper).to.have.descendants('#app_headline');
    expect(wrapper.find('h1')).to.contain('ViewAR SDK');
  });
});
