import { books } from "../../features/books/data";
import { Book } from "../../features/books/types";
import BookCard from "../../features/books/components/BookCard";

const BookPage = () => {
    return (
        <section>
            {books.map((book) => {
                return (
                    <BookCard key={book.id} book={book} />
                )
            })}
        </section>
    )
};

export default BookPage;