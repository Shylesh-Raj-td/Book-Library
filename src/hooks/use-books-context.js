import { useContext } from "react";
import BooksContext from "../context/books";

function useBooksContext(){
    return useContext(BooksContext)                              // We can use custom hooks so that this same code will not be repeated
}

export default useBooksContext