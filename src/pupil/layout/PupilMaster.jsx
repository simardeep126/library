import React from 'react'
import { Outlet } from 'react-router-dom'
import PupilFooter from './PupilFooter'
import PupilHeader from './pupilHeader'

function PupilMaster() {
  return (
    <>
    <PupilHeader/>
    <Outlet/>
    <PupilFooter/>
    </>
  )
}

export default PupilMaster