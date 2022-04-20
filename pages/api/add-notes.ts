import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default (req: NextApiRequest, res: NextApiResponse) => {
    db.run(`INSERT INTO notes(notes, date, id) VALUES($notes, $date, $id)`, [req.body.text, req.body.date, req.body.id], (err) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        res.json({ message: 'all successful', statusCode: 200 });
    })
};