import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE': 
            const id = action.data
            const anecdoteToVote = state.find(a => a.id === id)
            const votedAnecdote = { ...anecdoteToVote, votes: anecdoteToVote.votes + 1 }
            return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote)
        case 'NEW_ANECDOTE':
            return state.concat(action.data)
        case 'INIT_ANECDOTES':
            return action.data
        default:
            return state
    }
}

export const vote = (id, votedAnecdote) => {
    return async (dispatch) => {
        await anecdoteService.update(id, votedAnecdote)
        dispatch({
            type: 'VOTE',
            data: id
        })
    }
}

export const anecdoteCreation = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.create(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: newAnecdote
        })
    }
}

export const anecdoteInitialization = (data) => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default anecdoteReducer


