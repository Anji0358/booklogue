import React, { useState } from 'react'
import { ReadingLog } from '../types';

type ReadingLogStateProps = {
    readingLogs: ReadingLog[]
};

const ReadingLogState = ({ readingLogs }: ReadingLogStateProps) => {
    const logCount = readingLogs.length;

    if (logCount === 0) {
        return (
            <section>
                <p>まだ評価はありません。</p>
            </section>
        );
    }

    const totalRating = readingLogs.reduce(
        (sum, readingLog) => sum + readingLog.rating,
        0
    );

    const averageRating = totalRating / logCount;

    return (
        <section>
            <p>読書ログ件数：{logCount}件</p>
            <p>平均評価：{averageRating.toFixed(1)}</p>
        </section>
    )
}

export default ReadingLogState