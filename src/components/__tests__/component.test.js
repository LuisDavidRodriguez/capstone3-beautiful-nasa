import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import FormFilter from '../apodSearch/FormFilter/FormFilter';
import store from '../../redux/configStore';
import HeaderContainer from '../header/HeaderContainer/HeaderContainer';
import MediaSearch from '../mediaSearch/MediaSeach/MediaSearch';

describe('FormFilter components', () => {
  it('Render FormFitler', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <FormFilter
              reportInputs={() => {}}
              buttonHandler1={() => {}}
            />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Header', () => {
  it('reder Header', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <HeaderContainer />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Media search', () => {
  it('Media Search', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <MediaSearch
              reportInputs={() => {}}
            />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
