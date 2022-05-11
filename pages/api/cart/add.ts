import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {    
    db.all(`SELECT amount FROM cart_shopping WHERE cart_shopping.customer_id = ${+req.body.userId} AND cart_shopping.product_id = ${+req.body.productId}`, (err, rows) => {
        if (err) {
            return res.json({ message: 'all', statusCode: 500 })
        }
        if (rows.length === 0) {
            db.run(`INSERT INTO cart_shopping(customer_id, product_id, amount) VALUES(?, ?, ?)`, [req.body.customerId, req.body.productId, 1], err => {
                if (err) {
                    return res.json({ message: '1', statusCode: 500 })
                }
                res.json({ message: 'all successful', statusCode: 200 });
            })
        } else {
            const amount = +rows[0].amount;
            console.log(amount + 1);
            
            db.run(`INSERT INTO cart_shopping(customer_id, product_id, amount) VALUES(?, ?, ?)`, [req.body.customerId, req.body.productId, amount], err => {
                if (err) {
                    return res.json({ message: '2', statusCode: 500 })
                }
                res.json({ message: 'all successful', statusCode: 200 });
            })
        }
    })
};