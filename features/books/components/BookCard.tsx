import { books } from "../data";
import { Book } from "../types";

type BookCardProps = {
  book: Book
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>著者：{book.author}</p>
      <p>カテゴリ：{book.category}</p>
      <p>{book.description}</p>

    </article>
  )
};

export default BookCard