const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.message
        case 'HIDE_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const notification = (message, seconds) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_NOTIFICATION',
            message
        })

        setTimeout(() => {
            dispatch({
                type: 'HIDE_NOTIFICATION'
            })
        }, seconds * 1000)
    }
}
 
export default notificationReducer