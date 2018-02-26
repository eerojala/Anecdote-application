import React from 'react'

const AnecdoteView = ({ anecdote }) => {
    return (
        <div>
            <h2>{anecdote.content}</h2>
            <p>Has {anecdote.votes} votes</p>
            <p>For more info, see {anecdote.info}</p>
        </div>
    )
}

export default AnecdoteView