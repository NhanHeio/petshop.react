import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './assets/fontawesome-free-5.15.1-web/css/all.css'
import App from './App';
import { Provider } from 'react-redux';
import store, { persistor } from './redux';
import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <App persistor={persistor} />
        </SnackbarProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
