import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  const editBookById = async (id, newtitle) => {
    const response = await axios.patch(`http://localhost:3001/books/${id}`, {
      title: newtitle,
    });
    
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const newBook = response.data;
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };


  return <BooksContext.Provider value={{}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
