import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const ViewToDo = () => {
    const { id } = useParams()
    
    const [ todo, setToDo ] = useState({
        title: '',
        desc: '',
        date: new Date()
    })
    
    useEffect(() => {
        fetch(`http://localhost:1000/readtodo/${id}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(({todo}) => {
            console.log(todo)
            setToDo(todo)
        })
    }, [id])
    
    return (
        <div className="container mt-2">
            <ul className="list-group">
                <li className="list-group-item">Title: { todo.title }</li>
                <li className="list-group-item">Description: { todo.desc }</li>
                <li className="list-group-item">Date: { moment(todo.date).format('dddd, MMMM Do YYYY') }</li>
            </ul>
        </div>
    )
}

export default ViewToDo