import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './styles/main.scss';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

import UserSignup from './containers/auth/UserSignup'; 
import UserSignin from './containers/auth/UserSignin'; 
import Home from './containers/public/Home'; 
const theme = createTheme();

function App() {
  return (<Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Switch>
            <Route path="/signin">
              <UserSignin />
            </Route>
            <Route path="/signup">
              <UserSignup />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  </Provider>);
}

export default App;
