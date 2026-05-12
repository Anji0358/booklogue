"use client";

import { useState } from "react";
import { ReadingLog } from "../types";
import ReadingLogForm from "./ReadingLogForm";
import ReadingLogList from "./ReadingLogList";
import ReadingLogStats from "./ReadingLogStats";

type ReadingLogSectionProps = {
    bookId: number;
    initialReadingLogs: ReadingLog[];
};

type SortType = "new" | "old" | "ratingHigh" | "ratingLow";

const ReadingLogSection = ({
    bookId,
    initialReadingLogs,
}: ReadingLogSectionProps) => {
    const [readingLogs, setReadingLogs] = useState(initialReadingLogs);
    const [sortType, setSortType] = useState<SortType>("new");

    const addReadingLog = (readingLog: ReadingLog) => {
        setReadingLogs((prevReadingLogs) => [readingLog, ...prevReadingLogs]);
    };

    const deleteReadingLog = (id: number) => {
        setReadingLogs((prevReadingLogs) =>
            prevReadingLogs.filter((readingLog) => readingLog.id !== id)
        );
    };

    const sortedReadingLogs = [...readingLogs].sort((a, b) => {
        if (sortType === "new") {
            return b.readDate.localeCompare(a.readDate);
        }

        if (sortType === "old") {
            return a.readDate.localeCompare(b.readDate);
        }

        if (sortType === "ratingHigh") {
            return b.rating - a.rating;
        }

        if (sortType === "ratingLow") {
            return a.rating - b.rating;
        }

        return 0;
    });

    return (
        <section>
            <h2>読書ログ</h2>

            <ReadingLogStats readingLogs={readingLogs} />

            <h3>読書ログを投稿する</h3>
            <ReadingLogForm bookId={bookId} onAddReadingLog={addReadingLog} />

            <div>
                <label htmlFor="sortType">並び替え</label>
                <select
                    id="sortType"
                    value={sortType}
                    onChange={(event) => setSortType(event.target.value as SortType)}
                >
                    <option value="new">新しい順</option>
                    <option value="old">古い順</option>
                    <option value="ratingHigh">評価が高い順</option>
                    <option value="ratingLow">評価が低い順</option>
                </select>
            </div>

            <ReadingLogList
                readingLogs={sortedReadingLogs}
                onDeleteReadingLog={deleteReadingLog}
            />
        </section>
    );
}

export default ReadingLogSection;