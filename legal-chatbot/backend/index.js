require("dotenv").config();
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = process.env.PORT || 5000;

// Google Gemini API Setup
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

app.use(express.json());
app.use(cors());

// Path to the preloaded PDF
const PDF_PATH = "./backend/uploads/legal_document.pdf";

// Debug: Check if the file exists
if (!fs.existsSync(PDF_PATH)) {
  console.error(`PDF file not found at path: ${PDF_PATH}`);
} else {
  console.log(`PDF file found at path: ${PDF_PATH}`);
}

// API Endpoint: Process the PDF and Respond
app.post("/chat", async (req, res) => {
  try {
    const { query } = req.body;

    // Validate user input
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    // Read and encode the PDF
    if (!fs.existsSync(PDF_PATH)) {
      return res.status(404).json({ error: "PDF file not found" });
    }
    const pdfData = fs.readFileSync(PDF_PATH);
    const base64PDF = Buffer.from(pdfData).toString("base64");

    // Send PDF and query to Google Gemini for processing
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64PDF,
          mimeType: "application/pdf",
        },
      },
      query,
    ]);

    // Extract and send the response
    const responseText = await result.response.text();
    res.json({ response: responseText });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

