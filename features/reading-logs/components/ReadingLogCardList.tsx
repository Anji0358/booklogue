import ReadingLogCard from "./ReadingLogCard";
import { readingLogs } from "../data";
import { ReadingLog } from "../types";

type ReadingLogListProps = {
    readingLogs: ReadingLog[],
    onDeleteReadingLog: (id: number) => void,
};

const ReadingLogCardList = ({
    readingLogs,
    onDeleteReadingLog
}: ReadingLogListProps) => {
    if (readingLogs.length === 0) {
        return <p>まだ読書ログはありません。</p>;
    }

    return (
        <>
            <h2>読書ログ</h2>
            {readingLogs.map((readingLog) => {
                <ReadingLogCard
                    key={readingLog.id}
                    readingLog={readingLog}
                    onDeleteReadingLog={onDeleteReadingLog}
                />
            })}
        </>
    )
}

export default ReadingLogCardList