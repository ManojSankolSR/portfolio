

const NavbarRightItem=({href,img,onclick})=>{
    return (
        <div  class="nav-bar-items2" onClick={onclick}>
            <img src={img} alt=""/>
        </div>
    );

}

export default NavbarRightItem