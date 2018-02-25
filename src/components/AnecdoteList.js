import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, hideNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
    vote = (id) => () => { 
        this.props.store.dispatch(vote(id))
        const anecdotes = this.props.store.getState().anecdotes
        const anecdote = anecdotes.find(a => a.id === id)   
        this.props.store.dispatch(voteNotification(anecdote.content))

        setTimeout(() => {
            this.props.store.dispatch(hideNotification())
        }, 5000)
    }

    render() {
        let anecdotes = this.props.store.getState().anecdotes
        const filter = this.props.store.getState().filter

        if (filter !== null && filter !== '') {
            anecdotes = anecdotes.filter( (anecdote) => { return anecdote.content.toUpperCase().includes(filter.toUpperCase()) } )
        }

        anecdotes.sort( (a, b) => { return b.votes - a.votes } )

        return(
            <div>
                <h2>Anecdotes</h2>
                {anecdotes.map(anecdote => 
                    <Anecdote
                        key={anecdote.id} 
                        anecdote={anecdote} 
                        handleClick={this.vote(anecdote.id)} 
                    />
                )}
            </div>
        )
    }
}

export default AnecdoteList