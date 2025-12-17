import { useState } from "react"
import "./App.css";
function MessageCard({title,message}){
   
    return(
        <div className="message">
        <h3>MessageCard</h3>
        <h3>Title:{title}</h3>
        <h3>Message:{message}</h3>
        </div>
    )
}
export default MessageCard