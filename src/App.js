import React from 'react';
import CareerForm from './components/CareerForm';
import ProfileView from './components/ProfileView';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
        <Router>
        <div className="bg-image"></div>
        <div className="d-flex flex-column min-vh-100 position-relative">
          <Header />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<CareerForm />} />
              <Route path="/profile" element={<ProfileView />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
      );
}

export default App;
