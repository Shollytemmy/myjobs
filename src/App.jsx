import { useState } from "react";
// import {routes} from './route'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import News from './Pages/News'
import Jobs from './Pages/Job'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { MainJob } from "./Components/Molecules/Jobs";
import "./App.scss"
import { Error404 } from "./Pages/Error404";
import { jobInfo } from "./data/data";
import { SeeMoreInfo } from "./Pages/Routes/SeeMoreInfo";

function App() {
  return (
    <div className="App">
      {/* <NavLogics /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="seeMore/:jobID" element={<SeeMoreInfo jobInfo={jobInfo}  />} />
         <Route path='news' element={<News />} />
         <Route path="job/:jobId" element={<MainJob  jobInfo={jobInfo} />} />
          <Route path='jobs' element={<News />} />
           <Route path='/about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path="*" element={<Error404 />} />

        
      </Routes>
    
      
      
      {/* <FooterLogics /> */} 
    
    </div>
  );
}
// {
//   routes.map((route) => <Route key={route.id} path={route.path} element={<route.element />} />)
// }

export default App;
