import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default function handler(req, res) {
    db.run(`INSERT INTO notes(notes, date, id) VALUES($notes, $date, $id)`, [req.body.text, req.body.date, req.body.id], (err, row) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        res.json({ message: 'all successful', statusCode: 200 });
    })
};