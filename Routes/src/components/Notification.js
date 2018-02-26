import React from 'react'

const Notification = ({ message }) => {
    const style = {
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius: 5,
        borderColor: 'green',
        padding: 5
    }

    if (message === null || message === '') {
        return null
    }

    return (
        <div>
            <br />
            <div style={style}>
                {message}
            </div>
        </div>
    )
}

export default Notification