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

// Paths to the preloaded PDFs
const PDF_PATHS = {
  legalDocument: "./uploads/legal_document.pdf",
  carCrashGuidance: "./uploads/car_crash_guidance.pdf",

};

// Debug: Check if the files exist
for (const [key, path] of Object.entries(PDF_PATHS)) {
  if (!fs.existsSync(path)) {
    console.error(`PDF file not found at path: ${path}`);
  } else {
    console.log(`PDF file found at path: ${path}`);
  }
}

// API Endpoint: Process the PDF and Respond
app.post("/chat", async (req, res) => {
  try {
    const { query, pdfType } = req.body;

    // Validate user input
    if (!query || !pdfType) {
      return res.status(400).json({ error: "Query and PDF type are required" });
    }

    // Determine which PDF to use
    const pdfPath = PDF_PATHS[pdfType];
    if (!pdfPath || !fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: "PDF file not found" });
    }

    // Read and encode the PDF
    const pdfData = fs.readFileSync(pdfPath);
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