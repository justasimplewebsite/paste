// api/fetchPaste.js
export default async function handler(req, res) {
    const { id } = req.query; // Get the ID from the query parameter
    const url = `https://pastefy.app/${id}/raw`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Error fetching data' });
        }
        const data = await response.text();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}
