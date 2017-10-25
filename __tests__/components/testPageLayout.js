import PageLayout from 'components/pageLayout/PageLayout';
import React from 'react';
import { shallow } from 'enzyme';

describe('<PageLayout />', () => {
  it('should render self', () => {
    const renderedComponent = shallow(
      <PageLayout />
    );

    // console.log(renderedComponent.debug());
    expect(renderedComponent.find('h1').text()).toBe('React Redux Starter Kit');
  });
});
