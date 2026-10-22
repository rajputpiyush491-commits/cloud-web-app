
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Home
app.get("/", (req, res) => {
    res.send("AWS Cloud Web Application Backend is Running!");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

// Get all contacts
app.get("/api/contacts", (req, res) => {
    const contacts = db.prepare(
        "SELECT * FROM contacts ORDER BY id"
    ).all();

    res.json(contacts);
});

// Add contact
app.post("/api/contacts", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    const result = db.prepare(
        "INSERT INTO contacts (name, email) VALUES (?, ?)"
    ).run(name, email);

    const contact = db.prepare(
        "SELECT * FROM contacts WHERE id = ?"
    ).get(result.lastInsertRowid);

    res.status(201).json({
        message: "Contact added successfully",
        contact
    });
});

// Get contact by ID
app.get("/api/contacts/:id", (req, res) => {
    const contact = db.prepare(
        "SELECT * FROM contacts WHERE id = ?"
    ).get(Number(req.params.id));

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.json(contact);
});

// Update contact
app.put("/api/contacts/:id", (req, res) => {
    const { name, email } = req.body;
    const id = Number(req.params.id);

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    const result = db.prepare(
        "UPDATE contacts SET name = ?, email = ? WHERE id = ?"
    ).run(name, email, id);

    if (result.changes === 0) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.json({ message: "Contact updated successfully" });
});

// Delete contact
app.delete("/api/contacts/:id", (req, res) => {
    const result = db.prepare(
        "DELETE FROM contacts WHERE id = ?"
    ).run(Number(req.params.id));

    if (result.changes === 0) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.json({ message: "Contact deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
