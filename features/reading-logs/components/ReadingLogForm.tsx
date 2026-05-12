"use client";

import { FormEvent, useState } from "react";
import { ReadingLog } from "../types";

type ReadingLogFormProps = {
    bookId: number;
    onAddReadingLog: (readingLog: ReadingLog) => void;
};

const ReadingLogForm = ({
    bookId,
    onAddReadingLog,
}: ReadingLogFormProps) => {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newReadingLog: ReadingLog = {
            id: Date.now(),
            bookId,
            userName,
            rating,
            comment,
            readDate: new Date().toISOString().slice(0, 10),
        };

        onAddReadingLog(newReadingLog);

        setUserName("");
        setRating(5);
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">投稿者名</label>
                <input
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
            </div>

            <div>
                <label htmlFor="rating">評価</label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(event) => setRating(Number(event.target.value))}
                >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>

            <div>
                <label htmlFor="comment">コメント</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                />
            </div>

            <button type="submit">投稿する</button>
        </form>
    );
}
export default ReadingLogForm; 