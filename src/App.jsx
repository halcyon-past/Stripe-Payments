import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from 'react';
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Plans from './components/Plans'

function App() {


  const [user, setUser] = useState(null);
  useEffect(() => {

    onAuthStateChanged(auth, (userAuth) => {
      const user={
        uid:userAuth?.uid,
        email:userAuth?.email
      }
      if (userAuth) {
        console.log(user);
        setUser(user)
      } else {
        setUser(null)
      }
    });
  }, []);
  
  

  return ( 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={user ? <Plans /> : <SignIn />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/Plans" element={<Plans/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
