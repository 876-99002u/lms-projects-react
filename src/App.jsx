import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the necessary components
import HomePage from './Pages/HomePage'; // Import the HomePage component (ensure it's correct)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}
export default App;

  