import type { NextApiRequest, NextApiResponse } from 'next';
import type { Notes } from '../../../lib/types';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {
    db.all(`SELECT * FROM notes WHERE id = ${req.query.id} `, (err, row) => {
        if (err) {
            return res.json({ message: err, statusCode: 500 })
        }
        const arrayNotes:Array<Notes> = row.map((el):Notes => {
            return {
                text: el.text,
                date: el.date
            }
        }) 
        res.json({
            message: 'all successful',
            body: row,
            statusCode: 200
        })
    })
};