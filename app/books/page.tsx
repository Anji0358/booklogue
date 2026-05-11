import { books } from "../../features/books/data";
import BookList from "@/features/books/components/BookList";

const BookPage = () => {
    return (
        <section>
            <BookList books={books} />
        </section>
    )
};

export default BookPage;