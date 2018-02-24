const notificationReducer = (state = 'Placeholder', action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const voteNotification = (id) => {
    return {
        type: 'SET_NOTIFICATION',
        notification: 'VOTED'
    }
}

export default notificationReducer