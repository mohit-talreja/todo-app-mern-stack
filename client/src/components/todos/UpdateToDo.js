import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const UpdateToDo = () => {
    const history = useHistory()
    const { id } = useParams()
    const [ title, setTitle ] = useState('')
    useEffect(() => {
        fetch(`http://localhost:1000/readtodo/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(({ todo }) => {
            console.log(todo)
            setTitle(todo.title)
        })
    }, [id])
    const onSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:1000/updatetodo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        history.push('/')
    }
    return (
        <div className="container mt-2">
            <div className="card">
                <div className="card-header">
                    <h4>Update ToDo</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={ onSubmit }>
                    <div className="row mb-3">
                            <label 
                                htmlFor="title" 
                                className="col-sm-2 col-form-label"
                            >
                                Title
                            </label>
                            <div className="col-sm-10">
                                <input 
                                    type="text" 
                                    id="title" 
                                    className="form-control" 
                                    value={ title }
                                    onChange={ e => setTitle(e.target.value) }
                                    required
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-sm">Update ToDo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default UpdateToDo