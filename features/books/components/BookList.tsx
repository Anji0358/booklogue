import { Book } from "../types"
import BookCard from "./BookCard"

type BookListProps = {
    books: Book[]
};

const BookList = ({ books }: BookListProps) => {
    if (books.length === 0) {
        return <p>本が登録されていません</p>
    }

    return (
        <section>
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />
            })}
        </section>
    )
}

export default BookList