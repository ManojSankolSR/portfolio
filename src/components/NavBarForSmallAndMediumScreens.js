import React from 'react'
import NavbarLeftItem from "./SubComponents/NavbarLeftItem";
import NavbarRightItem from "./SubComponents/NavbarRightItem";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";



const closeDialog=()=>{
  document.getElementById("MenuDialog").close();
    
}


const openDialog=()=>{
  document.getElementById("MenuDialog").showModal();
    
}





const NavBarForSmallAndMediumScreens = ({setIsDark,isDark}) => {
  return (
    <div>
      <div className="nav-bar-for-small-medium-screens">
            <span class="material-symbols-outlined" id="Ham" onClick={openDialog}>
                <HiOutlineMenuAlt1 />
            </span >
            <div id="logo">
                MS
            </div>
      </div>
      <dialog id="MenuDialog" >
            <div id="nav-bar-header-for-Dialog">
                <span class="material-symbols-outlined" id="close" onClick={closeDialog}>
              <IoClose style={{fontSize:25}} />
            </span>
            <div id="nav-bar-title-for-Dialog">
                    MENU
            </div>
            </div>
            <br/>
            <br/>
              <NavbarLeftItem href='/' title='Home' onclick={closeDialog} />
              <NavbarLeftItem href='/about' title='About'  onclick={closeDialog} />
              <NavbarLeftItem href='/projects' title='Projects' onclick={closeDialog} />
              <NavbarLeftItem href='/knownTechs' title='Known Techs' onclick={closeDialog}/>
            <br/>
            <br/>
            <div id="nav-right-items">
              <NavbarRightItem href="" img='svgs/twitter.svg' />
              <NavbarRightItem href="" img='svgs/logo-github-light.svg' />
              <NavbarRightItem href="" img='svgs/linkedin.svg' />
              <NavbarRightItem href="" img='svgs/instagram.svg' />
              <NavbarRightItem href=""  img={isDark?"svgs/moon-filled-to-sunny-filled-loop-transition.svg":"svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg"}  onclick={()=>{
                

                isDark? setIsDark(false) : setIsDark(true);
                console.log("ok");
            }} />
            </div>
            <br/>
        </dialog>

    </div>
  )
}

export default NavBarForSmallAndMediumScreens