import React from 'react'
import { useParams } from 'react-router-dom'

function News() {
    const { id } = useParams()
    return (
        <div>News
            {id}
        </div>
    )
}

export default News