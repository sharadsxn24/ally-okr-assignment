import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import configureAppStore from './store';
import ErrorBoundary from "./components/ErrorBoundary";
import OkrPage from './pages/OkrPage';
import './styles/index.css';

const store = configureAppStore();

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/okr" />
            </Route>
            <Route path="/okr">
              <OkrPage />
            </Route>
          </Switch>
        </Router>
        <div id="app-modal" />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
