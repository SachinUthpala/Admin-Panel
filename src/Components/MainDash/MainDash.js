import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import { UilPower } from '@iconscout/react-unicons'

const MainDash = () => {
  return (
    <div className="MainDash" id='mainDash'>

        <div className="Heading" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h1>Dashboard</h1>
          <UilPower/>
        </div>
        <Cards/>
        <Table/>
    </div>
  )
}

export default MainDash