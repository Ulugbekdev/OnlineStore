import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM notes WHERE id = ${req.query.id} `, (err, row) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        res.json({
            message: "all successful",
            body: row,
            statusCode: 200
        })
    })
};