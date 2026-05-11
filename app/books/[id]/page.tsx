import { books } from "@/features/books/data";

type BookDetailPageProps = {
    params: Promise<{
        id: string
    }>;
}

const BookDetailPage = async ({ params }: BookDetailPageProps) => {
    const { id } = await params;

    const bookId = Number(id);
    const book = books.find((book) => book.id === bookId);

    if (!book) {
        return <p>本が見つかりません</p>
    }

    return (
        <>
            <h1>{book.title}</h1>
            <p>著者：{book.author}</p>
            <p>カテゴリ：{book.category}</p>
            <p>出版年：{book.publishedDate}</p>
            <p>{book.description}</p>
        </>
    )
}

export default BookDetailPage