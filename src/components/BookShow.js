import { useState} from "react"
import BookEdit from './BookEdit'
import useBooksContext from "../hooks/use-books-context"

function BookShow(props){
    const {book} = props
    const {deleteBookById} = useBooksContext()
    const [edit, setEdit] = useState(false)
    const handleDeleteClick = ()=> {
        deleteBookById(book.id)
    }
    const handleEditClick = ()=> {
        setEdit(!edit)
    }
    const handleSubmit = ()=>{
        setEdit(false)
    }

    let content = <h3>{book.title}</h3>
    if(edit){
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }
    
    return <div className="book-show">
        <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit 
            </button>
            <button className="delete"onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
        </div>
}

export default BookShow