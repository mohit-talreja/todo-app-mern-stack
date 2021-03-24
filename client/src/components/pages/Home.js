import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [ todos, setTodos ] = useState([])
    
    useEffect(() => {
        loadToDos()
    }, [])
    
    const loadToDos = () => {
        fetch('http://localhost:1000/readtodos', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(({ todos }) => {
            console.log(todos)
            setTodos(todos)
        })
    }
    
    const deleteToDo = id => {
        fetch(`http://localhost:1000/deletetodo/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(({ message }) => console.log(message))
        loadToDos()
    }
    
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
                                <th scope="col">View</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo) => <tr key={ todo._id }>
                                    <td>{ todo.title }</td>
                                    <td><Link to={`viewtodo/${todo._id}`} className="btn btn-primary btn-sm">View</Link></td>
                                    <td><Link to={`/updatetodo/${todo._id}`} className="btn btn-success btn-sm">Edit</Link></td>
                                    <td><button className="btn btn-danger btn-sm" onClick={ () => deleteToDo(todo._id) }>Delete</button></td>
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