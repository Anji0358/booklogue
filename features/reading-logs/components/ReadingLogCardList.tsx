import ReadingLogCard from "./ReadingLogCard";
import { ReadingLog } from "../types";

type ReadingLogListProps = {
    readingLogs: ReadingLog[],
    onDeleteReadingLog: (id: number) => void,
};

const ReadingLogCardList = ({
    readingLogs,
    onDeleteReadingLog,
}: ReadingLogListProps) => {
    if (readingLogs.length === 0) {
        return <p>まだ読書ログはありません。</p>;
    }

    return (
        <section>
            {readingLogs.map((readingLog) =>
                <ReadingLogCard
                    key={readingLog.id}
                    readingLog={readingLog}
                    onDeleteReadingLog={onDeleteReadingLog}
                />
            )}
        </section>
    )
}

export default ReadingLogCardList