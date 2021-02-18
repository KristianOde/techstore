import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../header'
import Test1 from '../testcomponents/test1';
import Test2 from '../testcomponents/test2';
import Test3 from '../testcomponents/test3';
import Test4 from '../testcomponents/test4';
import Test5 from '../testcomponents/test5';
import './app.css'

function App() {
  return (
    <div className="App">
      <Route path="\" element={<Header />} />
      <div className="MainView">
        <Routes>
          <Route path="/test1" element={<Test1 />} />
          <Route path="/test2" element={<Test2 />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 />} />
          <Route path="/test5" element={<Test5 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
