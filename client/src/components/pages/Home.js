import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [ todos, setTodos ] = useState([])
    useEffect(() => {
        fetch('http://localhost:1000/readtodos', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(({ todos }) => {
            console.log(todos)
            setTodos(todos)
        })
    }, [])
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">All ToDos</h4>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo) => <tr key={ todo._id }>
                                    <td>{ todo.title }</td>
                                    <td><Link to={`/updatetodo/${todo._id}`} className="btn btn-success btn-sm">Edit</Link></td>
                                    <td><Link to="/deletetodo" className="btn btn-danger btn-sm">Delete</Link></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home