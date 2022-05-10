import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {    
    db.all(`SELECT product_id FROM cart_shopping WHERE customer_id = ${req.query.id}`, (err, rows) => {
        if (err) {
            return res.json({ message: 'set user error status code 500', statusCode: 500 });
        }
        rows.forEach(el => {
            db.all(`SELECT name FROM products WHERE id = '${el}'`, (err, rows) => {
                if (err) {
                    return res.json({ message: 'select products of user, status code 500', statusCode: 500 });
                }   
                console.log(rows);
                res.json({ message: 'all successful', statusCode: 200 });
            })
        })
    })
};