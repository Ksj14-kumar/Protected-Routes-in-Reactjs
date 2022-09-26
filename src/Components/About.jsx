import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            About
            <div className="con" style={{ display: "flex", justifyContent: "space-around" }}>
                <Link to="/dashboard">Dash</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/service">service</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default About;