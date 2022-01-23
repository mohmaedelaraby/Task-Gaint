import React from 'react';
import { data1, data2, data3, data4, data5 } from '../../Data';
import "./Tables.css"
import Table_Item from './Table_Item';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function Tables() {
  return(
    <>
    <div className='tables'>
      <div className='table_cont'>
        <div className='table_wr'>
        
        <Table_Item title="New" price="69,600" min={70} max={100} color="#0ea44e" bscolor="#e06860" data={data1}/>
        <Table_Item title="Qualified" price="61,000" min={70} max={100} color="#f1ae48" bscolor="#e0655d" data={data2}/>
        <Table_Item title="Propostion" price="24,500" min={70} max={100} color="#e0655d" bscolor="#f3f3f3" data={data3}/>
        <Table_Item title="Negotiation" price="77,000" min={33} max={100} color="#02a148" bscolor="#f1ae48" data={data4}/>
        <Table_Item title="Won" price="25,000" min={33} max={66} color="#02a148" bscolor="#f1ae48" data={data5}/>
        <span> <p className='test2'> Add New Column <AddOutlinedIcon/></p></span>
        
        </div>
      

      </div>
      
    </div>
        
    </>
  ) 
}

export default Tables;
