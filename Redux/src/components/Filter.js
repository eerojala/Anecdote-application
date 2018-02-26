import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'

class Filter extends React.Component {
    handleChange = (event) => {
        const filter = event.target.value
        this.props.changeFilter(filter)
    }

    render() {
        const style = {
            marginBottom: 10
        }

        return (
            <div style={style}>
                Filter <input onChange={this.handleChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { filter: state.filter }
}

const ConnectedFilter = connect(mapStateToProps, { changeFilter })(Filter)

export default ConnectedFilter