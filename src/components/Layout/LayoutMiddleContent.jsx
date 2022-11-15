import React from "react";
import SideNav from "../SideNav/SideNav";
import MiddleContent from "./MiddleContent";
import SideContent from "./SideContent";

export default class LayoutMiddleContent extends React.Component{
     constructor(props){
         super(props)  
     }
     
     render(){
        return(
            <div style={{ 
                display: "flex",
                justifyContent: "space-between"
             }}> 
               <SideNav/>
               {/* will replace as routes */}
               <MiddleContent/>
               <SideContent/>
            </div>
        )
     }
}