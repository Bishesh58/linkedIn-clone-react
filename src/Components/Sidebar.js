import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) =>(  
    <div className="sidebar__recentItem">
        <span className='sidebar__hash'>#</span>
        <p>{topic}</p>
    </div>);

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://c4.wallpaperflare.com/wallpaper/153/950/371/gradient-simple-blue-white-wallpaper-preview.jpg" alt=""/>
                <Avatar className='sidebar__avatar' />
                <h2>Bishesh Sunam</h2>
                <h4>bishesh.sunam@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2,434</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,536</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareEngineering")}
                {recentItem("design")}
                {recentItem("developer")}
              
            </div>
        </div>
    )
}

export default Sidebar 
