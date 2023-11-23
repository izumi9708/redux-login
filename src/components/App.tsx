import React from 'react';
import '../styles/App.css';
import Login from './loginComponents/Login';
import Top from './topComponents/Top';
import { useSelector } from 'react-redux';

interface State {
  status: {
    status: string
    name: string
  }
}

function App() {

  const status = useSelector((state: State) => state.status.status);

  return (
    <div className="App">
      {status === 'login'
        ?
        <Login />
        :
        <Top />
      }
    </div>
  );
}

export default App;
