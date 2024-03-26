import React from 'react'
import {NavLink} from 'react-router-dom'

const NavbarLeftItem=({href,title,onclick})=>{
    return (
        <div class="nav-bar-items">
            <NavLink className={(e)=>{return e.isActive?  "active":""}} to={href} onClick={onclick} >{title}</NavLink>
        </div>
    );
}

export default NavbarLeftItem