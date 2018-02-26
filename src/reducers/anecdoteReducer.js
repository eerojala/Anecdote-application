import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE': 
            const id = action.data.id
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

export const vote = (id) => {
    return {
        type: 'VOTE',
        data: { id }
    }
}

export const anecdoteCreation = (data) => {
      return {
          type: 'NEW_ANECDOTE',
          data
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


