"use client"

import { useState } from "react";
import { ReadingLog } from "../types"
import ReadingLogForm from "./ReadingLogForm";
import ReadingLogCardList from "./ReadingLogCardList";
import ReadingLogState from "./ReadingLogStatus";

type ReadingLogSectionProps = {
    bookId: number,
    initialReadingLog: ReadingLog[],
};

const ReadingLogSection = ({
    bookId,
    initialReadingLog,
}: ReadingLogSectionProps) => {
    const [readingLogs, setReadingLogs] = useState(initialReadingLog);

    const addReadinLog = (readingLog: ReadingLog) => {
        setReadingLogs((prevReadingLogs) => [readingLog, ...prevReadingLogs])
    };

    const deleteReadingLog = (id: number) => {
        setReadingLogs((prevReadingLogs) =>
            prevReadingLogs.filter((readingLog) => readingLog.id !== id)
        );
    }

    return (
        <section>

            <h2>読書ログ</h2>
            <ReadingLogState readingLogs={readingLogs} />

            <h3>読書ログを投稿する</h3>
            <ReadingLogForm bookId={bookId} onAddReadingLog={addReadinLog} />

            <ReadingLogCardList
                readingLogs={readingLogs}
                onDeleteReadingLog={deleteReadingLog}
            />


        </section>
    )
}

export default ReadingLogSection