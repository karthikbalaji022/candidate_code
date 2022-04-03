import React from 'react'
import account from '../images/navicon/account.png'
import app_draw from '../images/navicon/app_draw.png'
import help from '../images/navicon/help.png'
import inbox from '../images/navicon/inbox.png'
import message from '../images/navicon/message.png'
import meter from '../images/navicon/meter.png'
import setting from '../images/navicon/setting.png'
import threedots from '../images/navicon/threedots.png'
import users from '../images/navicon/users.png'
import briefcase from '../images/navicon/briefcase.png'
import './Nav.css'

function Nav(){

    return(
        <div className="Nav">
            <div className='top'>
                <div className='userIcon'>
                <img src={account} alt="navicon" className='navIcon'/>
                </div>
                <img src={meter} alt="navicon" className='navIcon'/>
                <img src={inbox} alt="navicon" className='navIcon'/>
                <div className='dots'>
                <img src={briefcase} alt="navicon" className='navIcon'/>
                <img src={threedots} alt="navicon" className='threedot'/>
                </div>                
                <div className='dots'>                
                <img src={users} alt="navicon" className='navIcon'/>
                <img src={threedots} alt="navicon"  className='threedot'/>

                </div>                
                <img src={setting} alt="navicon" className='navIcon'/>
            </div>
            <div className='bottom'>
            <img src={help} alt="navicon" className='navIcon'/>
                <img src={message} alt="navicon" className='navIcon'/>
                <img src={app_draw} alt="navicon" className='navIcon'/>
            </div>
        </div>
    )
}

export default Nav;