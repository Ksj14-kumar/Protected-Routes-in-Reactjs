import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
    console.log(window.location.pathname)
    return (
        <div>
            <h1>Protected Routes</h1>
            <br />
            Home
            <div className="con" style={{ display: "flex", justifyContent: "space-around" }}>

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/service">Service</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/News/1258963">News</Link>
            </div>
            <Outlet />
        </div>
    )
}
export default Home;