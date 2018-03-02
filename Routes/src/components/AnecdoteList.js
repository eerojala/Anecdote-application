import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'

const AnecdoteList = ({ anecdotes }) => (
    <div>
        <h2>Anecdotes</h2>
        <Table>
            {anecdotes.map(anecdote => <Table.Row>
                <Table.Cell>
                    <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
                </Table.Cell>
            </Table.Row>)}
        </Table>
    </div>
)

export default AnecdoteList