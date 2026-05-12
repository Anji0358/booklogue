import { ReadingLog } from "../types";

type ReadingLogCardProps = {
    readingLog: ReadingLog;
    onDeleteReadingLog: (id: number) => void;
};

const ReadingLogCard = ({
    readingLog,
    onDeleteReadingLog,
}: ReadingLogCardProps) => {
    return (
        <article>
            <p>投稿者：{readingLog.userName}</p>
            <p>評価：{readingLog.rating}</p>
            <p>{readingLog.comment}</p>
            <p>読了日：{readingLog.readDate}</p>

            <button type="button" onClick={() => onDeleteReadingLog(readingLog.id)}>
                削除
            </button>
        </article>
    );
}

export default ReadingLogCard;