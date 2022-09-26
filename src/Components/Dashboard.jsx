import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Dashboard() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get("lname"))
    console.log(searchParams.get("name"))
    console.log(searchParams.getAll("age"))
    // console.log(searchParams.keys())
    // console.log(searchParams.values())
    console.log(searchParams.entries())
    for (let a of searchParams.entries()) {
        console.log(a)
    }
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard;