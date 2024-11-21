export const getTimeElapsed = (publishTime) => {
    const now = new Date();
    const publishedDate = new Date(publishTime);
    const diffInSeconds = Math.floor((now - publishedDate) / 1000);

    const units = [
        { name: "year", seconds: 31536000 },
        { name: "month", seconds: 2592000 },
        { name: "week", seconds: 604800 },
        { name: "day", seconds: 86400 },
        { name: "hour", seconds: 3600 },
    ];

    for (const unit of units) {
        const quotient = Math.floor(diffInSeconds / unit.seconds);
        if (quotient >= 1) {
            return `${quotient} ${unit.name}${quotient > 1 ? "s" : ""} ago`;
        }
    }

    return "just now";
};