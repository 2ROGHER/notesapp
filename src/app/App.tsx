import { Provider } from 'react-redux';
import './App.scss';
import MainRouter from './router/MainRouter';
import { BrowserRouter as Router } from 'react-router';
import store from '../core/state/store';
export function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainRouter />
      </Router>
    </Provider>
  );
}

export default App
