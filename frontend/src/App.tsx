import React, { Suspense } from 'react';
import './App.css';
//import Routes from './routes/';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';
import CssBaseline from '@material-ui/core/CssBaseline';
const Routes = React.lazy(() => import('./routes'));

const loginUser = React.createContext(false);

function App() {
  return (
    <loginUser.Provider value={false}>
      <CssBaseline />
      {/*render ? <div className="loader"></div> : <Routes />*/}
      <Suspense fallback={<div className="loader-page"></div>}>
        <Routes />
      </Suspense>
    </loginUser.Provider>
  );
}

export default App;
