import React from 'react'
import '../Screens/style.css'
import NavbarLeftItem from "./SubComponents/NavbarLeftItem";
import NavbarRightItem from "./SubComponents/NavbarRightItem";








const Navbar = ({setIsDark,isDark}) => {

    

    

  return (
    <div class="nav-bar-for-large-screens">
        <div id="nav-left-items">
            <NavbarLeftItem href='/' title='Home' />
            <NavbarLeftItem href='/about' title='About' />
            <NavbarLeftItem href='/projects' title='Projects' />
            <NavbarLeftItem href='/knownTechs' title='Known Techs' />
        </div>
        <div id="logo">
            MS
        </div>
        <div id="nav-right-items">
            <NavbarRightItem href="" img='svgs/twitter.svg' />
            <NavbarRightItem href="" img={isDark?'./svgs/logo-github-dark.svg':'./svgs/logo-github-light.svg'} />
            <NavbarRightItem href="" img='svgs/linkedin.svg' />
            <NavbarRightItem href="" img='svgs/instagram.svg' />
            <NavbarRightItem href="" img={isDark?"svgs/moon-filled-to-sunny-filled-loop-transition.svg":"svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"}  onclick={()=>{
                isDark? setIsDark(false) : setIsDark(true);
                console.log("ok");
            }} />
        </div>
    
    </div>
    
  );
}





export default Navbar