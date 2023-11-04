import React, { useState } from 'react';
import './SideBar.css';
import logo from '../imgs/logo.png'
import { SideBarData } from '../Data_Js/Data';


const SideBar = () => {

    const [selected, setSelected] =useState(0)

    

    const HandleClick =(num)=>{

        if (num === null || num === 0) {
           
            const value =  document.getElementById('mainDash');

            if(value === null){

            }else{
                document.getElementById('mainDash').style.display = 'block'
            }

        
        }else if (num===1) {
            console.log("Employee")
        }
        else if (num===2) {
            console.log("Employee")
        }
        else if (num===5) {
            document.getElementById('mainDash').style.display='none';
            document.getElementById('eventMAnagement').style.display='block';
            console.log("Employee")
            
        }
    }

  return (
    <div className="Sidebar">
        {/*logo*/}

        <div className="logo">
            <img src={logo} alt=""  width={80} />
            <span>River<span>'s</span> Edge</span>
        </div>

        <div className="menu">
            {
                SideBarData.map((item,index) => {
                    return (
                        <div className={selected===index?'menuItems active':'menuItems'}
                        key={index}
                        onClick={() => {setSelected (index)}
                    }
                        >
                            <item.icon/>
                            <span onClick={HandleClick(selected)}>
                                {
                                    item.headding
                                }
                            </span>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default SideBar