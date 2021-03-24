import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

const UpdateToDo = () => {
    const history = useHistory()
    
    const { id } = useParams()
    
    const [ todo, setToDo ] = useState({
        title: '',
        desc: '',
        date: new Date(),
    })
    
    const { title, desc, date } = todo
    
    useEffect(() => {
        fetch(`http://localhost:1000/readtodo/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(({ todo }) => {
            console.log(todo)
            setToDo(todo)
        })
    }, [id])
    
    const onSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:1000/updatetodo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                desc,
                date
            })
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
                                    className="input-control" 
                                    value={ title }
                                    onChange={ e => setToDo({ ...todo, title: e.target.value }) }
                                    placeholder="Enter Title"
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3 mt-2">
                            <label 
                                htmlFor="desc" 
                                className="col-sm-2 col-form-label"
                            >
                                Description
                            </label>
                            <div className="col-sm-10">
                                <textarea 
                                    rows="4" 
                                    cols="23" 
                                    value={ desc }
                                    onChange={ e => setToDo({ ...todo, desc: e.target.value }) }
                                    placeholder="Enter Description"
                                    required
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className="row mb-3 mt-2">
                            <label 
                                htmlFor="date" 
                                className="col-sm-2 col-form-label"
                            >
                                Date
                            </label>
                            <div className="col-sm-10">
                                <DatePicker 
                                    id="date"
                                    className="input-control"
                                    selected={ moment(date).toDate() }
                                    onChange={ date => setToDo({ ...todo, date: date }) }
                                />
                            </div>
                        </div>
                        <button className="btn btn-success btn-sm">Update ToDo</button>
                    </form>      
                </div>
            </div>
        </div>
    )
}

export default UpdateToDo