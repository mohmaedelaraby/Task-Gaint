import React from 'react';
import './Table_Item.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ProgressBar from "@ramonak/react-progress-bar";
import SingleTable from './SingleTable';



function Table_Item({title , min,max,color,bscolor ,price ,data}) {
  return (

    <div className='Item_Container'>
        <span className='progress'>
            <span className='New'>
                 <h4>{title}</h4>
                 <span className='ic'><AddOutlinedIcon/></span>
            </span>
            <span className='pro'>
                <span className='pp'>
                <ProgressBar
            completed={min}
            maxCompleted={max}
            customLabel=" "
            bgColor={color}
            baseBgColor={bscolor}
            borderRadius='0px'
            width='100%'
            margin='0px 0px 0px 15px'
            /> 

            </span>
            <p className='pr'>$ {price}</p>
          </span>   
        </span>
        {
          data.map((item)=>(
            <SingleTable title={item.title} kind={item.kind} price={item.price} 
            photo={item.photo} twoStar={item.twoStar} sideColor={item.sideColor} clockColor={item.clockColor}/>
          ))

        }
        
        
         


    </div>
  )
}

export default Table_Item;
