import ReadingLogCard from "./ReadingLogCard";
import { readingLogs } from "../data";
import { ReadingLog } from "../types";

type ReadingLogListProps = {
    readingLogs: ReadingLog[]
};

const ReadingLogCardList = ({ readingLogs }: ReadingLogListProps) => {
    return (
        <>
            <h2>読書ログ</h2>
            {readingLogs.map((readingLog) => {
                return <ReadingLogCard key={readingLog.id} readingLog={readingLog} />
            })}
        </>
    )
}

export default ReadingLogCardList