import React from 'react'
import { Container } from 'semantic-ui-react'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import AnecdoteForm from './components/AnecdoteForm.js'
import AnecdoteView from './components/AnecdoteView'
import Notification from './components/Notification'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            anecdotes: [
                {
                    content: 'If it hurts, do it more often',
                    author: 'Jez Humble',
                    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
                    votes: 0,
                    id: '1'
                },
                {
                    content: 'Premature optimization is the root of all evil',
                    author: 'Donald Knuth',
                    info: 'http://wiki.c2.com/?PrematureOptimization',
                    votes: 0,
                    id: '2'
                }
            ],
            notification: ''
        } 
    }

    addNew = (anecdote) => {
        anecdote.id = (Math.random() * 10000).toFixed(0)
        this.setState({ 
            anecdotes: this.state.anecdotes.concat(anecdote),
            notification: `New anecdote '${anecdote.content} created!` 
        })

        setTimeout(() => {
            this.setState({
                notification: ''
            })
        }, 10000)
    }

    anecdoteById = (id) =>
        this.state.anecdotes.find(a => a.id === id)

    vote = (id) => {
        const anecdote = this.anecdoteById(id)

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)

        this.setState({ anecdotes })
    }

    render() {
        return (
            <Container>
                <Router>
                  <div>
                    <h1>Software anecdotes</h1>
                    <Menu />
                    <Notification message={this.state.notification} />
                    <Route exact path="/anecdotes" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
                    <Route path="/createNew" render={({history}) => 
                        <AnecdoteForm addNew={this.addNew} history={history} />}
                    />
                    <Route path="/about" render={() => <About /> } />
                    <Route exact path="/anecdotes/:id" render={({match}) => 
                        <AnecdoteView anecdote={this.anecdoteById(match.params.id)} />} 
                    />               
                    <Footer />
                  </div>
                </Router>
            </Container>
        )
    }
}

export default App
