import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { creationNotification, hideNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

class AnecdoteForm extends React.Component{
    addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.create(content)
        this.props.anecdoteCreation(newAnecdote)
        this.props.creationNotification(content)
        

        setTimeout(() => {
            this.props.hideNotification()
        }, 5000)
    }

    render() {
        return(
            <div>
                <h2>Create new</h2>
                <form onSubmit={this.addAnecdote}>
                    <input name="anecdote" />
                    <button>Create</button> 
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    anecdoteCreation,
    creationNotification,
    hideNotification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm