"use client"

import { useState } from "react";
import { ReadingLog } from "../types"
import ReadingLogForm from "./ReadingLogForm";
import ReadingLogCardList from "./ReadingLogCardList";

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

    return (
        <section>
            <h2>読書ログを投稿する</h2>

            <ReadingLogForm bookId={bookId} onAddReadingLog={addReadinLog} />

            <ReadingLogCardList readingLogs={readingLogs} />
        </section>
    )
}

export default ReadingLogSection