import { books } from "@/features/books/data";
import ReadingLogCard from "@/features/reading-logs/components/ReadingLogCard";
import ReadingLogCardList from "@/features/reading-logs/components/ReadingLogCardList";
import { readingLogs } from "@/features/reading-logs/data";

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
    const bookReadingLogs = readingLogs.filter((readingLog) => readingLog.bookId === bookId);

    return (
        <>
            <h1>{book.title}</h1>
            <p>著者：{book.author}</p>
            <p>カテゴリ：{book.category}</p>
            <p>出版年：{book.publishedDate}</p>
            <p>{book.description}</p>

            <ReadingLogCardList readingLogs={bookReadingLogs} />
        </>
    )
}

export default BookDetailPage