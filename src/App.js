import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {

  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('https://refertest.pythonanywhere.com/user/data', {
      Headers: {
        "uid": 136
      }
    })
      .then(response => response.json())
      .then(data => setUser(data.data));
  }, []);

  return (
    <div>
      <Header user={user}></Header>
      <Home user={user}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
