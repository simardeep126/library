import React from 'react'
import ManagerFooter from './ManagerFooter'
import ManagerHeader from './ManagerHeader'
import { Outlet } from 'react-router-dom'

export default function ManagerMaster() {
    return (
        <>
            <ManagerHeader />
            <Outlet />
            <ManagerFooter />
        </>
    )
}
