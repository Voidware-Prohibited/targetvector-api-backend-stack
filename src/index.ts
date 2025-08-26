import express from 'express';
const path = require('path');
import apiRoutes from './routes/api'; // Import API routes

const app = express();
const port = 3000;

app.use(express.json()); // For parsing JSON request bodies

// Serve static files from the React app's build output in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
}

// API Routes
app.use('/api', apiRoutes);

// Catch-all route to serve the React app's index.html in production
if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});