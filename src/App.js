import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/hero';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Patients from './components/Patients';
import Doctors from './components/Doctors';
import Service from './components/Service';
import Library from './components/Library';
import Profile from './components/Profile';
import Findhospital from './components/Findhospital';
import Appointments from './components/Appointments';
import Epilepsy from './components/epilepsy';
import Stroke from './components/stroke';
import Skinconditions from './components/skinconditions';
import Diabetes from './components/diabetes';
import Cancer from './components/cancer';
import Hypertension from './components/hypertension';
import Candoc from './components/candoc';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/findhospital" element={<Findhospital />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/library" element={<Library />} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/epilepsy" element={<Epilepsy />} />
          <Route path="/stroke" element={<Stroke />} />
          <Route path="/skinconditions" element={<Skinconditions />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/hypertension" element={<Hypertension />} />
          <Route path="/candoc" element={<Candoc />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
