import React from 'react'
import { Link } from 'react-router-dom'

const style = {
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'cyan',
    backgroundColor: 'cyan',
    padding: 5
}

const Menu = () => (
    <div style={style}>    
        <Link to="/anecdotes">Anecdotes</Link>&nbsp;
        <Link to="/createNew">Create new</Link>&nbsp;
        <Link to="/about">About</Link>
    </div>
)

export default Menu