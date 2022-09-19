import logo from './logo.svg';
import './App.css';

import SignInForm from './components/SignInForm';
import Feed from './components/Feed';

import { useState } from 'react';
import Header from './components/Header';


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>

      <Header user ={user} />
      
      { user ? <Feed user={user} /> : <SignInForm setUser={setUser} />  }

    </div>
  );
}

export default App;