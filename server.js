// 1. Import the Express framework we installed
const express = require('express');
const path = require('path');

// 2. Create an instance of the app
const app = express();
const PORT = process.env.PORT || 8080; // Azure will tell us which port to use

// 3. The list of quotes our app will use
const devopsQuotes = [
    "The goal is not to be perfect by the end, the goal is to be better today.",
    "Move fast and break things? More like build fast and fix things.",
    "In God we trust, all others must have data.",
    "If it hurts, do it more frequently, and bring the pain forward.",
    "Automation may not be a silver bullet, but it's the closest thing we have."
];

// 4. Define an API endpoint to get a random quote
app.get('/api/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * devopsQuotes.length);
    res.json({ quote: devopsQuotes[randomIndex] });
});

// 5. Tell the server to serve our static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// 6. Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
