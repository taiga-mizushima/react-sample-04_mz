import React from 'react'
import { SidevarData } from './SidebarData'

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidevarData.map((value, key) => {
                return (
                    <li key={key} className="row"
                        id={window.location.pathname == value.link ? "active" : ""}
                        onClick={()=>{
                        window.location.pathname = value.link;
                    }}>
                        <div id="icon">{value.icon}</div>
                        <div id="title">{value.title}</div>
                    </li>
                );
            })}
        </ul>
    </div>
  )
}

export default Sidebar