import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler (req: NextApiRequest, res: NextApiResponse) {    
    db.run(`INSERT INTO cart_shopping(customer_id, product_id) VALUES(?, ?)`, [req.body.customerId, req.body.productId], (err) => {
        if (err) {
            return res.json({ message: err, statusCode: 500 })
        }
        res.json({ message: 'all successful', statusCode: 200 });
    })
};