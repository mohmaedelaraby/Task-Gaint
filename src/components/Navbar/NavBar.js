import React from 'react';
import "./NavBar.css";
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import { Avatar, Badge } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import QuestionAnswerRoundedIcon from '@mui/icons-material/QuestionAnswerRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import admin from '../../img/1.jpg'
  

function NavBar() {
  return ( 
  <div className='nav_bar'>
      <div className='navWR'>
        <div className='nav_left'> 
        <span className='logo'> 
        <ViewComfyIcon/> <h3>My Site</h3>
        </span>
        </div>

        <div className='nav_right'>
             <span className='nav_icons'>
             <Badge className='menu-item' badgeContent={17} color='primary'>
                    <AccessTimeIcon className='i'/>
            </Badge>

            
            <Badge className='menu-item' badgeContent={15} color='primary'>
                    <QuestionAnswerRoundedIcon className='i'/>
            </Badge>

            <CloseRoundedIcon className='menu-item'/>
             </span>

             <span className='nav_admin'>
             <Avatar  
             src={admin}
             sx={{  width: "30px", height: "30px"}}
             />
                 <h5>Administrator </h5>

             </span>
        </div> 
        </div>
    </div>
            
        )
  
}

export default NavBar;
