import React from 'react'
import "./style.css"


const TechContainer=({img,techType,techTitle})=>{
    return(
        <div class="ktsContainer">
            <img src={img} alt=""/>
           <div>
            <div class="techType">
                {techType}
            </div>
          
            <div class="tech">
                {techTitle}
            </div>
           </div>
        </div>
    )
}



const KnownTechsScreen = () => {
  return (
    <div id="ktsMainDiv">
        <br />
        <div class="title">KNOWN TECHNOLOGIES</div>
        <br/>
        <br />
        <div class="flexWrapDiv">
            <TechContainer img='./pngs/Flutter-logo.png' techType='Framework' techTitle='Flutter' />
            <TechContainer img='./pngs/Dart-logo.png' techType='Language' techTitle='Dart' />
            <TechContainer img='./pngs/riverpod-logo.png' techType='State-Managemet Tool' techTitle='Riverpod' />
            <TechContainer img='./pngs/firebase-logo.png' techType='Cloud Database' techTitle='Firebase' />
            <TechContainer img='./pngs/HTML-logo.png' techType='Markup Language' techTitle='HTML' />
            <TechContainer img='./pngs/CSS-logo.png' techType='Custom Stylesheet Language' techTitle='CSS' />
            <TechContainer img='./pngs/javascript-logo.png' techType='Language' techTitle='JavaScript' />
            <TechContainer img='./pngs/nodejs-logo.png' techType='Backend Framework' techTitle='Node JS' />
            <TechContainer img='./pngs/express-js-logo.png' techType='Backend Framework' techTitle='Express JS' />
            <TechContainer img='./pngs/java-logo.png' techType='Language' techTitle='Java' />
            <TechContainer img='./pngs/c-logo.png' techType='Language' techTitle='C' />
            <TechContainer img='./pngs/c++-logo.png' techType='Language' techTitle='C++' />
        </div>
        <br/>
    </div>
  )
}

export default KnownTechsScreen