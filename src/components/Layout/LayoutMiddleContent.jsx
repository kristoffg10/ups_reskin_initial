import React from "react";
import SideNav from "../SideNav/SideNav";
import MiddleContent from "./MiddleContent";

export default class LayoutMiddleContent extends React.Component{
     constructor(props){
         super(props)  
     }
     
     render(){
        return(
            <div style={{ 
                display: "flex"
             }}> 
               <SideNav/>
               {/* will replace as routes */}
               <MiddleContent/>
            </div>
        )
     }
}