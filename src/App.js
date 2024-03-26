
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ProjectsScreen from './Screens/ProjectsScreen';
import KnownTechsScreen from './Screens/KnownTechsScreen';
import {createBrowserRouter,RouterProvider,createHashRouter} from 'react-router-dom'
import NavbarForLargeScreens  from './components/NavbarForLargeScreens'
import NavBarForSmallAndMediumScreens  from './components/NavBarForSmallAndMediumScreens'
import  { useState } from "react";
import "./Screens/style.css"






function App() {
  
  const [isDark,setIsDark]=useState(false);

  const router=createHashRouter([
    {
  
      path:'/',
      element:<><div className='gap'></div><NavbarForLargeScreens setIsDark={setIsDark} isDark={isDark} /><NavBarForSmallAndMediumScreens setIsDark={setIsDark} isDark={isDark}  /><div className='gap'></div><HomeScreen isDark={isDark} /></>
    },
    {
      path:'/about',
      element:<><div className='gap'></div><NavbarForLargeScreens  setIsDark={setIsDark} isDark={isDark}  /><NavBarForSmallAndMediumScreens setIsDark={setIsDark} isDark={isDark}  /><div className='gap'></div><AboutScreen/></>
    },
    {
      path:'/projects',
      element:<><div className='gap'></div><NavbarForLargeScreens  setIsDark={setIsDark} isDark={isDark} /><NavBarForSmallAndMediumScreens setIsDark={setIsDark} isDark={isDark}  /><div className='gap'></div><ProjectsScreen isDark={isDark} /></>
    },
    {
      path:'/knownTechs',
      element:<><div className='gap'></div><NavbarForLargeScreens  setIsDark={setIsDark} isDark={isDark} /><NavBarForSmallAndMediumScreens setIsDark={setIsDark} isDark={isDark}  /><div className='gap'></div><KnownTechsScreen/></>
    },
   
  ]);
  return (
    <div data-theme={isDark?"dark":"light"} id='main-div'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
