import { books } from "@/features/books/data";
import ReadingLogCardList from "@/features/reading-logs/components/ReadingLogCardList";
import { ReadingLogForm } from "@/features/reading-logs/components/ReadingLogForm";
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
        <main>

            <section>
                <h1>{book.title}</h1>
                <p>著者：{book.author}</p>
                <p>カテゴリ：{book.category}</p>
                <p>出版年：{book.publishedDate}</p>
                <p>{book.description}</p>
            </section>

            <section>
                <h2>読書ログを投稿する</h2>
                <ReadingLogForm />
            </section>

            <ReadingLogCardList readingLogs={bookReadingLogs} />
        </main>
    )
}

export default BookDetailPage