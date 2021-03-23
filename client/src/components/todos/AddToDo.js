import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddToDo = () => {
    const history = useHistory()
    const [ title, setTitle ] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:1000/createtodo', {
            method: 'POST',
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
                    <h4>Add ToDo</h4>
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
                                    placeholder="Enter Title"
                                    value={ title }
                                    onChange={ (e) => setTitle(e.target.value) }
                                    required
                                />
                            </div>
                        </div>
                        <button className="btn btn-success btn-sm">Add ToDo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default AddToDo