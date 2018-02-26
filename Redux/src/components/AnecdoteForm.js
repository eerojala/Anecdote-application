import React from 'react'
import { connect } from 'react-redux'
import { anecdoteCreation } from '../reducers/anecdoteReducer'
import { notification } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component{
    addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        this.props.anecdoteCreation(content)
        this.props.notification(`Created '${content}'`, 5)
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
    notification
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm