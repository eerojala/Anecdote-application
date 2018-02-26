import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <div>    
        <Link to="/">Anecdotes</Link>&nbsp;
        <Link to="/createNew">Create new</Link>&nbsp;
        <Link to="/about">About</Link>&nbsp;
    </div>
)

export default Menu