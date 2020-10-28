import React from 'react';
import { Provider } from 'react-redux';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

function App() {
  return (
    //<Provider store={store}>
      <div className="App">
        <Routes />
      </div>
  );
}

export default App;

