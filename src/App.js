import './App.css'
import Navbar from "./Components/Navbar";
import Addlist from "./Components/Addlist";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import ViewList from './Components/ViewList';


library.add(fas)


function App() {

  const [notes,setNotes] = useState([])

  
  const getNotes = (note) => { 
    setNotes((prev)=>{ return [...prev,note]})
  }

  const deleteNote =(id)=>{

    const newNotes = notes.filter(note => { return note.id!==id;});
    setNotes(newNotes)

  }

  return (
    <div className="App">

      <Navbar/>
      <Addlist getNotes={getNotes} />
      <ViewList notes={notes} deleteNote={deleteNote}/>
    
    </div>
  );
}

export default App;
