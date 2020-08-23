import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './comps/Spinner'
import TryAgain from './comps/TryAgain'
import * as serviceWorker from './serviceWorker';
import { AuthProvider, useAuth } from './utils/context/auth'

import JavascriptTimeAgo from 'javascript-time-ago'
// The desired locales.
import en from 'javascript-time-ago/locale/en'
import { useEffect } from 'react';

import './styles/main.scss';
// Initialize the desired locales.
JavascriptTimeAgo.locale(en)

const App = React.lazy(() => import('./pages/App'))
const Landing = React.lazy(() => import('./pages/Landing'))

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<Spinner />}>
        <Root />
      </Suspense>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
function Root() {
  let { loading, error, isAuthenticated, user, logon } = useAuth();
  useEffect(() => {
    logon();
    // eslint-disable-next-line
  }, [])
  if (loading)
    return <Spinner />
  else if (error)
    return <TryAgain fn={logon} message='Something went wrong, check you connection and try again' />
  else if (isAuthenticated && user)
    return <App />
  return <Landing />
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
