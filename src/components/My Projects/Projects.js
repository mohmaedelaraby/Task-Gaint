import React from 'react';
import './Projects.css';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TableRowsIcon from '@mui/icons-material/TableRows';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TableChartSharpIcon from '@mui/icons-material/TableChartSharp';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

function Projects() {
  return(
  <>
  <div className='project_container'>
      <div className='Wrapper'>
          <div className='p_left'>
                  <h2>My Projects</h2>
                  <span className='buttons'>
                      <button className='btn1'>Create</button>
                      <button className='btn2'>Import</button>
                  </span>  
          </div>
          <div className='p_right'>
              <span className='input_con'>
              <input placeholder='Search ...'/>
              <SearchIcon className='x'/>
              </span>

              <span className='p_icons'>
                  <span className='p_icons_left'>
                      <span className='selecct_icon'>
                          <FilterAltIcon style={{width:"20px", height:"20px"}}/> <p>Filter</p> <ArrowDropDownIcon style={{width:"20px", height:"20px"}}/>
                      </span>

                      
                      <span className='selecct_icon'>
                           <TableRowsIcon style={{width:"20px", height:"20px"}}/> <p> Groubs</p> <ArrowDropDownIcon style={{width:"20px", height:"20px"}}/>
                      </span>

                      
                      <span className='selecct_icon'>
                           <StarIcon style={{width:"20px", height:"20px"}} /> <p>Favorite</p> <ArrowDropDownIcon style={{width:"20px", height:"20px"}}/>
                      </span>
                  </span>
                  <span className='p_icons_right'>
                      <span className='side_icon'> <VerticalSplitIcon style={{width:"20px", height:"20px"}}/></span>
                      <span className='side_icon'> <EventNoteIcon style={{width:"20px", height:"20px"}}/></span>
                      <span className='side_icon'> <GridViewSharpIcon style={{width:"20px", height:"20px"}}/></span>
                      <span className='side_icon'> <TableChartSharpIcon style={{width:"20px", height:"20px"}}/></span>
                      <span className='side_icon'> <AssessmentOutlinedIcon style={{width:"20px", height:"20px"}}/></span>

                  </span>
              </span>
          </div>

      </div>
  </div>
  </>
) 
}

export default Projects;
