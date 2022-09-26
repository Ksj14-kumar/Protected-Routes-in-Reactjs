import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
function Protected({ user, children }) {

    if (!user) {
        Navigate({ to: "/", replace: true })
    }
    return children ? children : <Outlet />
}

export default Protected