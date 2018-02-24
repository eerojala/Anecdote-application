import React from 'react'
import { anecdoteCreation } from '../reducers/anecdoteReducer'

class AnecdoteForm extends React.Component{
    addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        this.props.store.dispatch(anecdoteCreation(content))
        event.target.anecdote.value = ''
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