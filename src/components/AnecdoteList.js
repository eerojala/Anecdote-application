import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, hideNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
    vote = (anecdote) => () => { 
        const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
        this.props.vote(anecdote.id, changedAnecdote)   
        this.props.voteNotification(anecdote.content)

        setTimeout(() => {
            this.props.hideNotification()
        }, 5000)
    }

    render() {
        return(
            <div>
                {this.props.visibleAnecdotes.map(anecdote => 
                    <Anecdote
                        key={anecdote.id} 
                        anecdote={anecdote} 
                        handleClick={this.vote(anecdote)} 
                    />
                )}
            </div>
        )
    }
}

const anecdotesToShow = (anecdotes, filter) => {
    anecdotes.sort( (a, b) => { return b.votes - a.votes } )

    if (filter === null || filter === '') {
        return anecdotes
    }

    return anecdotes.filter( (anecdote) => { return anecdote.content.toUpperCase().includes(filter.toUpperCase()) } )
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
    }
}

const mapDispatchToProps = {
    vote,
    voteNotification,
    hideNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
 
export default ConnectedAnecdoteList