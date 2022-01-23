import React from 'react';
import './SingleTable.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Avatar } from '@mui/material';

function SingleTable({title,kind,price,twoStar,photo,sideColor,clockColor}) {
  return (
    
      
      <div className='Item'>
         <div className={sideColor}></div>
             <div className='Item_wr'>
             <p className='Item_P'> {title}</p>
             <span className='Item_kind'>
                 <p className='dot'><FiberManualRecordIcon style={{width:"15px" , height:"15px" ,color:`${clockColor}`}}/></p>
                 <p className='k'>{kind}</p>
             </span>
             <span className='Price'>
                 <p>{price}</p>
             </span>
             <span className='Item_Icons'>
                 <span className='Stars'>
                     {twoStar===true&& (<>
                          <StarRateIcon style={{color:"#ffd801"}}/>
                          <StarRateIcon style={{color:"#ffd801"}}/>
                         <StarBorderIcon style={{color:"gray"}}/>
                         <AccessTimeIcon style={{color:`${clockColor}` , width:"20px" , height:"20px"}}/>
                         </> ) }


                         {twoStar===false&& (<>
                          <StarRateIcon style={{color:"#ffd801"}}/>
                          <StarBorderIcon style={{color:"gray"}}/>
                         <StarBorderIcon style={{color:"gray"}}/>
                         <AccessTimeIcon style={{color:`${clockColor}` , width:"20px" , height:"20px"}}/>
                         </> ) }

                         
                         {twoStar==="nostar"&& (<>
                            <StarBorderIcon style={{color:"gray"}}/>
                          <StarBorderIcon style={{color:"gray"}}/>
                         <StarBorderIcon style={{color:"gray"}}/>
                         <AccessTimeIcon style={{color:`${clockColor}` , width:"20px" , height:"20px"}}/>
                         </> ) }
                    
                 </span>
                 <span className='clcok' > <Avatar src={photo} style={{width:"35px" ,height:"35px"}}/></span>
             </span>
             </div>
         </div>

    
  )
}

export default SingleTable;
