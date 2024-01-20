// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Loginpage from './Pages/Loginpage';
import Signup from './Pages/Signup';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/home" element={<Signup />}></Route>
        {/* <Route path="/form" element={<Form />}></Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
