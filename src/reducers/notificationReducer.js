const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        case 'HIDE_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const voteNotification = (anecdote) => {
    return {
        type: 'SET_NOTIFICATION',
        notification: `You voted '${anecdote}'`
    }
}

export const creationNotification = (anecdote) => {
    return {
        type: 'SET_NOTIFICATION',
        notification: `New anecdote: '${anecdote}'`
    }
}

export const hideNotification = () => {
    return {
        type: 'HIDE_NOTIFICATION'
    }
}

export default notificationReducer