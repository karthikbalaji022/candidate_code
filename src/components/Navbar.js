import React from 'react'
import account from '../images/navicon/account.png'
import app_draw from '../images/navicon/app_draw.png'
import help from '../images/navicon/help.png'
import inbox from '../images/navicon/inbox.png'
import message from '../images/navicon/message.png'
import meter from '../images/navicon/meter.png'
import setting from '../images/navicon/setting.png'
import users from '../images/navicon/users.png'
import briefcase from '../images/navicon/briefcase.png'
import './Nav.css'
function Nav(){
    return(
        <div className="Nav" style={{width:"50px",height:"100vh",padding:"10px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
            <div style={{display: "flex",flexDirection: "column",alignItems: "center",flex:4,gap:"17px"}}>
                <div style={{ borderBottom: "1px solid rgba(196, 184, 184, .3)"}}>
                <img src={account} alt="navicon" className='navIcon'/>
                </div>
                <img src={meter} alt="navicon" className='navIcon'/>
                <img src={inbox} alt="navicon" className='navIcon'/>
                <img src={briefcase} alt="navicon" className='navIcon'/>
                <img src={users} alt="navicon" className='navIcon'/>
                <img src={setting} alt="navicon" className='navIcon'/>
            </div>
            <div style={{display: "flex",flexDirection: "column",alignItems: "center",flex:1}}>
            <img src={help} alt="navicon" className='navIcon'/>
                <img src={message} alt="navicon" className='navIcon'/>
                <img src={app_draw} alt="navicon" className='navIcon'/>
            </div>
        </div>
    )}
export default Nav;