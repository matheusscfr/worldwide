import React from "react";
import {Routes ,Route} from 'react-router-dom'
import Home from './core/pages/Home'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/states' element={<h1>States</h1>}/>
      <Route path='/country/:isoCode' element={<h1>Country</h1>}/>
      <Route path='*' element={<h1>Not found</h1>}/>
    </Routes>
  );
}

export default App;
