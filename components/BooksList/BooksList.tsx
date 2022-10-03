import { BooksListProps, HomeProps } from "../../types/types";
import BookCard from "../BookCard/BookCard";


const BooksList = ({books}:BooksListProps) => {
    
    return (
        <div className="flex flex-wrap p-4 gap-5 justify-center mx-auto phone:max-w-sm tablet:max-w-2xl desktop:max-w-6xl">
            {books.results.map(book =>
                <BookCard 
                    authors={book.authors} 
                    download_count={book.download_count} 
                    key={`${book.id}`} 
                    formats={book.formats['image/jpeg']} 
                    id={book.id} 
                    title={book.title} 
                />
            )}
        </div>
    )
}

export default BooksList;