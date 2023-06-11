import { useState } from "react"
import useBooksContext from "../hooks/use-books-context"

function BookEdit(props){
    const {book,onSubmit} = props
    const {editBookById} = useBooksContext()
    const [title,settitle] = useState(book.title)

    const handleChange = (event)=> {
        settitle(event.target.value)
    }
    const handleSubmit = (event)=> {
        event.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }
    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value = {title} onChange={handleChange}/>
        <button className="button is-primary">Save</button>
    </form>
}

export default BookEdit