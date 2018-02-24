import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { creationNotification, hideNotification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component{
    addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        this.props.store.dispatch(anecdoteCreation(content))
        this.props.store.dispatch(creationNotification(content))
        event.target.anecdote.value = ''

        setTimeout(() => {
            this.props.store.dispatch(hideNotification())
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

export default AnecdoteForm