import React from 'react';
import Routes from "./Route/route";
import {GlobalStyle} from './Styles/GlobalStyles';
import Admin from './Component/Admin'
import UserProfile from '../src/Component/UserProfile'
import Loader from '../src/Component/Loader'
import Login from '../src/Component/Login'
import ChangePassword from '../src/Component/UserProfilePages/ChangePassword'
function App() {
  return (
    <div className="App">
      <Routes/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
