
import React from 'react'
import "./style.css"


const ProjectContainer=({title,type,descriprion,isDark})=>{
    return (
        <div class="ProjectsContainer">
                   <img src={isDark?'./svgs/logo-github-dark.svg':'./svgs/logo-github-light.svg'} alt=""/>
                   <div class="ProjectContent">
                    <div class="ProjectType">
                        {type}
                    </div>
                  
                    <div class="ProjectTitle">
                        {title}
                    </div>
                    <div class="ProjectDescription">
                        {descriprion}
        
                    </div>
                    <div class="row">
                        <a href="" class="custombuttonSmall">
                            Visit Project
                        </a>
                         <div class="nav-bar-items2">
                            <img src={isDark?'./svgs/logo-github-dark.svg':'./svgs/logo-github-light.svg'} alt=""/>
                          
                         </div>
                    </div>
                   </div>
        </div>
    )
}

const ProjectsScreen = ({isDark}) => {
  return (
    <div  id="ProjectsMaindiv">
        <div class="title">PROJECTS</div> 
            <br/><br/>
        <div class="flexWrapDiv">
            <ProjectContainer
            isDark={isDark} 
            title='Notes & Remainders App' 
            type='Cross-Platform App'   
            descriprion='Notes & Reaminders App made by using flutter which can send Remainders To Users And We Can Set Remainders and many more features' />
            <ProjectContainer 
            isDark={isDark} 
            title='Weather App' 
            type='Cross-Platform App'   
            descriprion=' Weather App Which gets Weather Stats Using OpneWeatherMap API And Displays The Current weather Based On Location ' />
            <ProjectContainer 
            isDark={isDark} 
            title='AI-ChatBot App' 
            type='Cross-Platform App'   
            descriprion=' Ai ChatBot App is made using Chatgpt Apis by using Which we can sends api request for every Query and Displays The Response ' />
            <ProjectContainer 
            isDark={isDark} 
            title='GroupChat App' 
            type='Cross-Platform App'   
            descriprion=' An Group Chat app Made using Flutter And Firebase As Backend Which usses Firebase Realtime Database For Storing Chats And Has User Authentication And Login Features' />
            <ProjectContainer 
            isDark={isDark} 
            title='Online Shop' 
            type='Web App'   
            descriprion=' An Group Chat app Made using Flutter And Firebase As Backend Which usses Firebase Realtime Database For Storing Chats And Has User Authentication And Login Features' />
            <ProjectContainer 
            isDark={isDark} 
            title='News App' 
            type='Cross-Platform App'   
            descriprion=' News App Which gets News Using News Org API And Displays The News And The News Can Be Shared' />
        </div>
    </div>
  
  )
}

export default ProjectsScreen