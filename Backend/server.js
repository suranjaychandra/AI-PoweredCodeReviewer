import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './src/app.js';

// Load environment variables
dotenv.config();

// Enable CORS for all requests
app.use(cors());

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve frontend (if deployed together)
app.use(express.static(path.join(__dirname, "Frontend/dist")));
app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
