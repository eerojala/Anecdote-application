import React from 'react';
import Notification from './components/Notification'
import Filter from './components/Filter'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import { connect } from 'react-redux'
import { anecdoteInitialization } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

class App extends React.Component {
    componentDidMount = async () => {
        const anecdotes = await anecdoteService.getAll()
        this.props.anecdoteInitialization(anecdotes)
    }

    render() {
        return (
            <div>
                <h1>Programming anecdotes</h1>
                <Notification />
                <h2>Anecdotes</h2>
                <Filter />
                <AnecdoteList />
                <AnecdoteForm />
            </div>
        )
    }
}

export default connect(null, { anecdoteInitialization })(App)