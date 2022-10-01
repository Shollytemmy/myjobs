import { useState } from "react";
import {Routes, Route} from 'react-router-dom'
import {routes} from './route'
import "./App.scss"

function App() {
  return (
    <div className="App">
      {/* <NavLogics /> */}
      
      <Routes>
        {
          routes.map((route) => <Route key={route.id} path={route.path} element={<route.element />} />)
        }
        

      </Routes>
      {/* <FooterLogics /> */}
    
    </div>
  );
}

export default App;
