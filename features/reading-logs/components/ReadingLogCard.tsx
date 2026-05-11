import { ReadingLog } from "../types";

type ReadingLogCardProp = {
    readingLog: ReadingLog;
};

const ReadingLogCard = ({ readingLog }: ReadingLogCardProp) => {
    return (
        <article>
            <p>投稿者：{readingLog.userName}</p>
            <p>評価：{readingLog.rating}</p>
            <p>{readingLog.comment}</p>
            <p>読了日：{readingLog.readDate}</p>
        </article>
    )
}

export default ReadingLogCard