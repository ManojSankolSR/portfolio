import React from 'react'
import Typewriter from 'typewriter-effect';



const HomeScreen = ({isDark}) => {
  return (
    <div > 
        <div class="body">
                <img src="./pngs/developer-pic-1.png" alt="" id="devPic"/>
                <div class="content">
                    <div id="devName">
                        Hi I Am Manoj Sankol S r
                    </div>
                    <div class="gap"></div>
                    <div id="devHobbies">
                    I Am A&nbsp;
                        <Typewriter
                        options={{
                            
                            strings: ['Student', 'Coder'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                        
                    </div>
                    <div class="gap">
                    </div>
                    <div id="devDescription">
                        As a skilled App developer, I am dedicated to turning ideas into innovative Cross-Platform applications. Explore my latest projects, showcasing my expertise in Flutter and Backend Development.
                    </div>
                    {/* <div class="gap"></div> */}
                    <br />
                   
                    <div class="row">
                        <a href="" class="custombutton1"><img src={isDark?'./svgs/external-link-dark.svg':'./svgs/external-link-light.svg'}  alt="" /> &nbsp; Resume</a>

                        <a href="" class="custombutton2">Contact</a>
                    </div>
                </div>
        </div>
    </div>   
  )
}

export default HomeScreen