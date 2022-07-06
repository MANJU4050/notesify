import './ViewCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ViewCard = ({title,note,date,id,deleteNote}) => {

  const deleteHandler = () => {
    deleteNote(id)
  }


  return (
    <div className="viewcard">
      <div className="viewdata">
        <p className='title'>{title}</p>
        <p className='note'>{note}</p>
        </div>
        <p className='date'>{date}</p>

        <button className='btn' onClick={deleteHandler}><FontAwesomeIcon  icon="fa-solid fa-trash fa-2xl" /></button>
     </div>
  )
}

export default ViewCard