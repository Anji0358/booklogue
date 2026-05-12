"use client";

import { FormEvent, useState } from "react";

export function ReadingLogForm() {
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();

        console.log({
            userName,
            rating,
            comment,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">投稿者名</label>
                <input
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="rating">評価</label>
                <select
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
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
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>

            <button type="submit">投稿する</button>
        </form>
    );
}