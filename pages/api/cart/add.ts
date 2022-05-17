import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./base/admin.db');

export default function handler(req: NextApiRequest, res: NextApiResponse) {    
    const userId = +req.body.userId;
    const productId = +req.body.productId;
    const customerId = +req.body.customerId;

    db.all(`SELECT amount FROM cart_shopping WHERE cart_shopping.customer_id = ${userId} AND cart_shopping.product_id = ${productId}`, (err: any, rows: any) => {
        if (err) {
            return res.json({ message: 'Selecting products. Error status code 500', statusCode: 500 })
        }
        if (rows.length === 0) {
            db.run(`INSERT INTO cart_shopping(customer_id, product_id, amount) VALUES(?, ?, ?)`, [customerId, productId, 1], (err: any) => {
                if (err) {
                    return res.json({ message: 'Add. Error status code 500', statusCode: 500 })
                }
                res.json({ message: 'add completed', statusCode: 200 });
            })
        } else {
            const amount = rows[0].amount + 1;                        
            db.run(`UPDATE cart_shopping SET amount = ${amount} WHERE product_id = ${productId} AND customer_id = ${customerId}`, (err: any) => {
                if (err) {
                    return res.json({ message: 'Re-add. Error status code 500', statusCode: 500 })
                }
                res.json({ message: 're-add completed', statusCode: 200 });
            })
        }
    })
};