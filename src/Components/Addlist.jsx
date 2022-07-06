import React from 'react'
import { useState } from 'react'
import './Addlist.css'
import {nanoid} from 'nanoid'

const Addlist = (props) => {


  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const getNote = (e) => {
    setNote(e.target.value);
  }

  const getTitle = (e) => {
    setTitle(e.target.value);
  }

  const noteHandler = async(e) => {

    const newNote = {
      id: nanoid(),
      title: title,
      note: note,
      date: `${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`
    }

    console.log(newNote);

    props.getNotes(newNote)
  }




  return (
    <div className="addlist">
      <div className='input'>
        <input type="text" onChange={getTitle} placeholder='Title' />
        <input type="text" onChange={getNote} placeholder='Take a note' />

      </div>

      <button className='btn' onClick={noteHandler} >Add</button>
    </div>
  )
}

export default Addlist