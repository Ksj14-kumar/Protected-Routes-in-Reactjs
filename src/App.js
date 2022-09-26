import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/Dashboard';
import News from './Components/News';
import Services from './Components/Services';
import Admin from './Components/Admin';
import { useState } from 'react';
import Protected from './Components/Protected';

function App() {
  const [user, setUser] = useState("dash")
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="about" element={<About />}>
              <Route path='a12' element={<A12 />} />
              <Route path='b' element={<B />} />
              <Route path='c' element={<C />} />
            </Route>
            <Route element={<Protected user={user} />}>
              <Route path="contact" element={<Contact />} />
              <Route path="service" element={<Services />} />
              <Route path="admin" element={<Admin />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="news/:id" element={<News />} />
            </Route>
          </Route>
        </Routes>
        {/* /about/a12/home
        /about/b/office
        /about/c/college */}
      </BrowserRouter>
    </div>
  );
}

export default App;
function A12() {
  return (
    <>
      A12
    </>
  )
}
function B() {
  return (
    <>
      This is B take
      B
    </>
  )
}
function C() {
  return (
    <>
      This is c take
      C
    </>
  )
}