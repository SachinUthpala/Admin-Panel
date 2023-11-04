import React, { useState } from 'react'
import { motion , farmerMotion, color } from "framer-motion"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css';
import { UilTimes } from '@iconscout/react-unicons'
import Chart from "react-apexcharts";


const Card = (props) => {

    const [expeended , setExpended] = useState(false)

  return (
    <farmerMotion>
        {
            expeended ? (
                <ExpendenCard params={props} setExpended={() => setExpended(false)} />
            ):
            <CompactCard params={props} setExpended={() => setExpended(true)} />
        }
    </farmerMotion>
  )
}

//compactCard

function CompactCard({params , setExpended}){
    const Png = params.png

    return(
        <motion.div className="CompactCard"
            style={{
                background: params.color.background,
                boxShadow : params.color.boxShadow,
            }}
            
            onClick={setExpended}
            layoutId='expandableCard'
        >
            <div className="redailBar">
                <CircularProgressbar 
                value={params.barvalue} 
                text={`${params.barvalue}%`}
                />
                <span>{params.title}</span>
            </div>
            <div className="details">
                <Png/>
                <span>${params.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </motion.div>
    )

}


/*expended card */
 function ExpendenCard({params,setExpended}){


    const data = {
        options:{
            chart:{
                type:"area",
                height:"auto"
            },

            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35
            },

            fill: {
                colors: ["#fff"],
                type:"gradient"
            },

            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"]
            },

            tooltip:{
                x:{
                    format:"DD/MM/YY HH:mm",
                },
            },

            grid:{
                show:true,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.00Z",
                    "2018-09-19T01:30:00.00Z",
                    "2018-09-19T02:30:00.00Z",
                    "2018-09-19T03:30:00.00Z",
                    "2018-09-19T04:30:00.00Z",
                    "2018-09-19T05:30:00.00Z",
                    "2018-09-19T06:30:00.00Z",
                ],
            }
        }
    }

    return(

        <motion.div className="ExpendenCard"
            style={{
                background: params.color.background,
                boxShadow : params.color.boxShadow,
            }}
        >
            <div style={{alignSelf:"flex-end",cursor:'pointer',color:"#fff"}}>
                <UilTimes onClick={setExpended} />
                
            </div>
            <span>{params.title}</span>
            <div className="charContainer">
                <Chart series={params.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
 }

export default Card