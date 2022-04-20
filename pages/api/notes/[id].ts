import type { NextApiRequest, NextApiResponse } from "next";
import sqlite3 from "sqlite3";
let db = new sqlite3.Database("./base/admin.db");

export default (req: NextApiRequest, res: NextApiResponse) => {
    db.all(`SELECT * FROM notes WHERE id = ${req.query.id} `, (err, row) => {
        if (err) return res.json({ message: err, statusCode: 500 });
        let arrayNotes = [];
        row.forEach((el) => {
            arrayNotes.push(el);
        })
        res.json({
            message: "all successful",
            body: arrayNotes,
            statusCode: 200
        })
    })
};