import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {

  const [user, setUser] = useState({});
  useEffect(() => {
    fetch('http://refertest.pythonanywhere.com/user/data', {
      Headers: {
        "uid": 136
      }
    })
      .then(response => response.json())
      .then(data => setUser(data.data));
  }, []);
  console.log(user);

  return (
    <div>
      <Header user={user}></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
