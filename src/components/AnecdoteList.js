import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { voteNotification, hideNotification } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

class AnecdoteList extends React.Component {
    vote = (id) => () => { 
        this.props.vote(id)
        const anecdotes = this.props.anecdotes
        const anecdote = anecdotes.find(a => a.id === id)   
        this.props.voteNotification(anecdote.content)

        setTimeout(() => {
            this.props.hideNotification()
        }, 5000)
    }

    render() {
        let anecdotes = this.props.anecdotes
        const filter = this.props.filter

        if (filter !== null && filter !== '') {
            anecdotes = anecdotes.filter( (anecdote) => { return anecdote.content.toUpperCase().includes(filter.toUpperCase()) } )
        }

        anecdotes.sort( (a, b) => { return b.votes - a.votes } )

        return(
            <div>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    vote,
    voteNotification,
    hideNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
 
export default ConnectedAnecdoteList