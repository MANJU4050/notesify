import React from 'react'
import './ViewList.css'
import ViewCard from './ViewCard'

const ViewList = ({notes,deleteNote}) => {
  return (
    <div className="viewlist">
     {notes.map((note,index) =>{
        return (<ViewCard key={note.id} deleteNote={deleteNote} id={note.id} title={note.title} note={note.note} date={note.date} />)
      })}
     
    </div>
  )
}

export default ViewList