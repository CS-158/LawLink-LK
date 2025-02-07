require("dotenv").config();
const express = require("express");
const fs = require("fs");
const pdf = require("pdf-parse");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;

// Google Gemini API Key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Middleware
app.use(express.json());
app.use(cors());

// Database setup
const db = new sqlite3.Database("./backend/responses.db", (err) => {
  if (err) console.error(err.message);
  else console.log("Connected to the SQLite database.");
});
db.run(`
  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_query TEXT, 
    ai_response TEXT
  )
`);

// Path to the preloaded PDF
const PDF_PATH = "./backend/uploads/legal_document.pdf";

// Function to extract relevant text from PDF
const extractTextFromPDF = async (query) => {
  const dataBuffer = fs.readFileSync(PDF_PATH);
  const pdfData = await pdf(dataBuffer);
  const text = pdfData.text;

  // Search for relevant sections in the PDF
  const lowerCaseText = text.toLowerCase();
  const lowerCaseQuery = query.toLowerCase();

  if (lowerCaseText.includes(lowerCaseQuery)) {
    return text.substring(lowerCaseText.indexOf(lowerCaseQuery), lowerCaseText.indexOf(lowerCaseQuery) + 500);
  } else {
    return "No relevant legal information found.";
  }
};

// Function to query Google Gemini API
const getGeminiResponse = async (query, pdfText) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = pdfText !== "No relevant legal information found."
    ? `Based on this legal document:\n\n${pdfText}\n\nAnswer the user's question: ${query}`
    : `Provide a legal answer: ${query}`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

// API Endpoint: Chat with the legal bot
app.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const pdfText = await extractTextFromPDF(query);
    const aiResponse = await getGeminiResponse(query, pdfText);

    // Store response in the database
    db.run(`INSERT INTO responses (user_query, ai_response) VALUES (?, ?)`, [query, aiResponse]);

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
