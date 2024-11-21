const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api/search', async (req, res) => {
    const searchQuery = req.query.q;
    const apiUrl = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`;
    try {
        const fetch = (await import('node-fetch')).default;
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server is running on http://localhost:${PORT}`);
});

