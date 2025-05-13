require("dotenv").config();
const express = require("express");
/* const mysql = require("mysql2/promise"); */
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database connection pool
/* const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "mydatabase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}); */

// Test endpoint
/* app.get("/api/test", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS solution");
    res.json({
      message: "API is working!",
      databaseResponse: rows[0].solution,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
}); */

// Health check endpoint
app.get("/health", (req, res) => {
  res
    .status(200)
    .json({ status: "healthy", secretValue: process.env.SECRET_VALUE });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
