import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configStore';
import WelcomeSection from '../../components/welcomeSection/WelcomeSection';

test('App', () => {
  render(
    <Provider store={store}>
      <WelcomeSection />
    </Provider>,
  );
  const welcome = screen.getByText('The Astronomy Picture of the Day is:');

  expect(welcome.tagName).toBe('H3');
});
