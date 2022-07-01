import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Calender from './components/Calender';
import CompletedTask from './components/CompletedTask';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route path="/" element={<Home />}></Route>
         <Route path="/calender" element={<Calender />}></Route>
         <Route path="/completedTask" element={<CompletedTask />}></Route>
      </Routes>
    </div>
  );
}

export default App;
