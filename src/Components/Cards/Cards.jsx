import React from 'react'
import './Cards.css';
import { CardData } from '../../Data_Js/Data';
import Card from './card/Card';

const Cards = () => {
  return (
    <div className="Cards" id='cads' >
      {
        CardData.map((card , id) => {
          return(
            <div className="ParentContainer">
              <Card
                title = {card.title}
                color = {card.color}
                barvalue = {card.barValue}
                value = {card.value}
                png = {card.png}
                series = {card.series}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards