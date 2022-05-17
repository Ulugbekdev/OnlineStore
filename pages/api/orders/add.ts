import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const userId = req.body.userId;

    db.all(`SELECT * FROM cart_shopping WHERE customer_id = ${userId}`, (err: any, rows: any) => {
        if (err) return res.json({ message: 'Select products of user. Error status code 500', statusCode: 500 });

        db.run(`DELETE FROM cart_shopping WHERE customer_id = ${userId}`, (err: any) => {
            if (err) return res.json({ message: 'Remove cart of user. Error status code 500', statusCode: 500 });
        })

        rows.forEach((el: any) => {
            db.run(
                `INSERT INTO orders (product_id, customer_id, amount, status, date) VALUES (?, ?, ?, ?, ?)`, 
                [el.product_id, el.customer_id, el.amount, 'paid', req.body.date],
                (err: any) => {
                    if (err) return res.json({ message: 'Add order. Error status code 500', statusCode: 500 });
                }
            )
        })
        
        res.json({
            message: 'Add order successfull',
            statusCode: 200
        })
    });
}