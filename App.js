import * as React from 'react';
import Main from './screens/Main'
import { store } from './src/app/Store';
import { Provider } from 'react-redux'
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;