import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve the pricing page
app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pricing.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚗 Clearwater Golf Cart Rentals server is running!`);
    console.log(`📍 Local: http://localhost:${PORT}`);
    console.log(`🌊 Ready to serve the best golf cart rental experience in Clearwater!`);
});