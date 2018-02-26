import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <div>    
        <Link to="/anecdotes">Anecdotes</Link>&nbsp;
        <Link to="/createNew">Create new</Link>&nbsp;
        <Link to="/about">About</Link>
    </div>
)

export default Menu